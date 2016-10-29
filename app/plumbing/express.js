import express from 'express';
import morgan from 'morgan';
import path from 'path';
import responseTime from 'response-time';
import compression from 'compression';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import _ from 'lodash';
import fs from 'fs';
import router from './router';
import config from '../config';

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
    app.set('views', path.join(__dirname, '../../app/views'));
    app.set('view engine', 'ejs');

    app.enable('trust proxy');

    app.disable('x-powered-by');

    // Express use middlewares
    try {
        app.use(favicon(path.join(__dirname, '../../static/favicon.png')));
    } catch (e) {
        _.noop();
    }
    app.use(allowCrossDomain);
    if (config.debug) {
        app.use(morgan('dev'));
    } else if (!config.disableLogging) {
        app.use(morgan('combined', {
            skip: (req, res) =>
                 res.statusCode < 400,

            stream: fs.createWriteStream(
                path.resolve(`${config.logDir}/access.log`),
                { flags: 'a' }
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

    const distPath = express.static(path.normalize(`${__dirname}/../../dist`));
    const staticPath = express.static(path.normalize(`${__dirname}/../../static`));
    const filesPath = express.static(path.normalize(`${__dirname}/${config.pathToDeprecatedFilesDir}`));
    const deprecatedImagesPath = express.static(path.normalize(`${__dirname}/../../static/images`));

    app.use('/static', distPath);
    app.use('/static', staticPath);
    app.use('/static/img', deprecatedImagesPath);
    app.use('/files', filesPath);

    app.use(router);

    app.use((req, res) => {
        res.status(404);

        if (req.accepts('html')) {
            res.render('index', {
                debug: config.debug,
                showHeader: true,
                htmlTitle: `Page not found — ${config.title}`,
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
