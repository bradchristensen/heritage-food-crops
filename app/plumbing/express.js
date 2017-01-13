import express from 'express';
import morgan from 'morgan';
import path from 'path';
import responseTime from 'response-time';
import compression from 'compression';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import fs from 'fs';
import robots from 'robots.txt';
import redirects from './redirects';
import router from './router';
import config from '../config';
import faviconData from '../../dist/faviconData.json';

function serveStaticFiles(app) {
    // Serve bundled/generated files (e.g. CSS, webpacked javascript) from the /static path
    const staticFavicons = express.static(path.normalize(`${__dirname}/dist/favicons`));
    const staticScripts = express.static(path.normalize(`${__dirname}/dist/scripts`));
    const staticStyles = express.static(path.normalize(`${__dirname}/dist/styles`));

    // Serve other files that don't need to be generated from the same /static path
    const staticDocs = express.static(path.normalize(`${__dirname}/static/docs`));
    const staticFonts = express.static(path.normalize(`${__dirname}/static/fonts`));
    const staticImages = express.static(path.normalize(`${__dirname}/static/images`));

    // Favicons are served from the root directory in order to be compatible with browsers
    // or services that don't bother scanning the HTML meta tags for favicon config
    app.use('/', staticFavicons);

    // Serve bundled/generated files and static files
    app.use('/static/docs', staticDocs);
    app.use('/static/fonts', staticFonts);
    app.use('/static/images', staticImages);
    app.use('/static/scripts', staticScripts);
    app.use('/static/styles', staticStyles);

    // TODO: images are no longer served from this path, so this line can be removed in future
    app.use('/static/img', staticImages);

    // Serve robots.txt from the root
    app.use(robots(`${__dirname}/static/robots.txt`));
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
    } else if (!config.disableLogging && config.logDir) {
        app.use(morgan('combined', {
            skip: (req, res) => res.statusCode < 400,

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
