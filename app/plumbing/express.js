import express from 'express';
import morgan from 'morgan';
import path from 'path';
import responseTime from 'response-time';
import compression from 'compression';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import fs from 'fs';
import redirects from './redirects';
import router from './router';
import config from '../config';
import faviconData from '../../dist/faviconData.json';

function serveStaticFiles(app) {
    const distPath = express.static(path.normalize(`${__dirname}/dist`));
    const staticPath = express.static(path.normalize(`${__dirname}/static`));
    const deprecatedImagesPath = express.static(path.normalize(`${__dirname}/static/images`));
    const faviconsPath = express.static(path.normalize(`${__dirname}/dist/favicons`));

    // Favicons are served from the root directory in order to be compatible with browsers
    // or services that don't bother scanning the HTML meta tags for favicon config
    app.use('/', faviconsPath);
    // Serve bundled/generated files (e.g. CSS, webpacked javascript) from the /static path
    app.use('/static', distPath);
    // Serve other files that don't need to be generated from the same /static path
    app.use('/static', staticPath);
    // TODO: images are no longer served from this path, so this line can be removed in future
    app.use('/static/img', deprecatedImagesPath);
}

export default function (app) {
    const allowCrossDomain = (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
        next();
    };

    // settings
    app.set('env', process.env.NODE_ENV || 'development');
    app.set('port', config.server.port || 3000);
    app.set('views', path.join(__dirname, './app/views'));
    app.set('view engine', 'ejs');

    app.enable('trust proxy');

    app.disable('x-powered-by');

    app.use(allowCrossDomain);
    if (config.debug) {
        app.use(morgan('dev'));
    } else if (!config.disableLogging) {
        app.use(morgan('combined', {
            skip: (req, res) =>
                 res.statusCode < 400,

            stream: fs.createWriteStream(
                path.resolve(`${config.logDir}/access.log`),
                { flags: 'a' },
            ),
        }));
    }

    if (!config.disableCompression) {
        app.use(compression({
            filter: (req, res) => /json|text|javascript|css|svg|xml/.test(res.getHeader('Content-Type')),
            level: 9,
        }));
    }

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    serveStaticFiles(app);

    // Load routes defined by view controllers and API controllers
    app.use(router);

    // Map redirects (e.g. from '/files/old-filename.pdf' to '/static/docs/new-filename.pdf')
    Object.keys(redirects).forEach((redirectFrom) => {
        const redirectTo = redirects[redirectFrom];
        app.get(redirectFrom, (req, res) => {
            res.redirect(301, redirectTo);
        });
    });

    app.use((req, res) => {
        res.status(404);

        if (req.accepts('html')) {
            res.render('index', {
                useMinifiedCode: config.debug,
                showHeader: true,
                htmlTitle: `Page not found — ${config.title}`,
                faviconHtml: faviconData.favicon.html_code,
                currentPageTitle: 'Page not found',
                siteTitle: config.title,
                version: config.version,
                gaTrackingId: config.gaTrackingId,
                content: '',
            });
            return;
        }

        if (req.accepts('json')) {
            res.send({ error: 'Not found' });
            return;
        }

        res.type('txt').send('Not found');
    });

    if (config.debug) {
        app.use(errorHandler());
        app.use(responseTime());
    } else {
        app.use((err, req, res, next) => {
            if (err.status === 404) {
                return next(err);
            }

            console.error(err.stack);
            return next(err);
        });

        app.use((err, req, res) => {
            let message;

            const status = err.status || 500;
            res.status(status);

            message = ((err.productionMessage && err.message) ||
                err.customProductionMessage);

            if (!message) {
                if (status === 403) {
                    message = 'Not allowed';
                } else {
                    message = 'Oops, there was a problem!';
                }
            }

            if (req.accepts('json')) {
                res.send({ error: message });
                return;
            }

            res.type('txt').send(`${message}\n`);
        });
    }
}
