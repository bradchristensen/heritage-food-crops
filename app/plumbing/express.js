import express from 'express';
import morgan from 'morgan';
import path from 'path';
import responseTime from 'response-time';
import methodOverride from 'method-override';
import compression from 'compression';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import errorHandler from 'errorhandler';
import expressValidator from 'express-validator';
import pkg from 'package.json';
import router from 'app/plumbing/router';
import config from 'app/config';
import _ from 'lodash';
import fs from 'fs';
import moment from 'moment';

var env = process.env.NODE_ENV || 'development';

export default function (app) {

    var allowCrossDomain = (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
        next();
    };

    // settings
    app.set('env', env);
    app.set('port', app.config.server.port || 3000);
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
    if (env === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(morgan('combined', {
            skip: (req, res) => {
                return res.statusCode < 400;
            },
            stream: fs.createWriteStream(
                app.config.root + '/access.log',
                { flags: 'a' }
            )
        }));
    }

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(expressValidator());
    app.use(methodOverride());

    app.use(cookieParser('correct horse battery staple'));
    app.use(session({
        name: [pkg.name, '.sid'].join(),
        resave: true,
        saveUninitialized: true,
        secret: pkg.name,
        genid: req => {
            return require('node-uuid').v4(); // use UUIDs for session IDs
        }
    }));

    app.use((req, res, next) => {
        res.locals.pkg = pkg;
        res.locals.NODE_ENV = env;
        res.locals.moment = moment;
        if (_.isObject(req.user)) {
            res.locals.User = req.user;
        }
        next();
    });

    var distPath = express.static(path.normalize(__dirname + '/../../dist'));
    var staticPath = express.static(path.normalize(__dirname + '/../../static'));
    var filesPath = express.static(path.normalize(__dirname + '/../../static/files'));
    var deprecatedImagesPath = express.static(path.normalize(__dirname + '/../../static/images'));

    app.use('/static', distPath);
    app.use('/static', staticPath);
    app.use('/static/img', deprecatedImagesPath);
    app.use('/files', filesPath);

    app.use(router);

    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(responseTime());
    } else {
        app.use(compression({
            filter: (req, res) => /json|text|javascript|css/.test(res.getHeader('Content-Type')),
            level: 9
        }));
    }

    app.use(function handleNotFound (req, res, next) {
        res.status(404);

        if (req.accepts('html')) {
            res.render('index', {
                title: 'Page not found — ' + config.title,
                version: config.version,
                content: ''
            });
            return;
        }

        if (req.accepts('json')) {
            res.send({ error: 'Not found' });
            return;
        }

        res.type('txt').send('Not found');
    });

    if (env === 'development') {

        app.use(errorHandler());

    } else {

        app.use(function logErrors (err, req, res, next) {
            if (err.status === 404) {
                return next(err);
            }

            console.error(err.stack);
            next(err);
        });

        app.use(function respondError (err, req, res, next) {
            var status, message;

            status = err.status || 500;
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
                res.send({error: message});
                return;

            } else {
                res.type('txt').send(message + '\n');
                return;
            }

        });
    }
}
