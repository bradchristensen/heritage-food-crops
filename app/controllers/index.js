import config from 'app/config';
import routes from 'infrastructure/routes';
import Router from 'react-router';
import React from 'react';
import ReactDOM from 'infrastructure/react-dom';

export default {
    get (req, res) {
        Router.run(routes, req.url, Root => {
            res.render('index', {
                title: config.title,
                version: config.version,
                year: new Date().getFullYear(),
                content: ReactDOM.renderToString(<Root />)
            });
        });
    }
};
