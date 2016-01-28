import config from 'app/config';
import routes from 'infrastructure/routes';
import Router from 'react-router';
import React from 'react';
import ReactDOM from 'infrastructure/reactDOM';
import DocumentTitle from 'components/documentTitle';

export default {
    get (req, res) {
        Router.run(routes, req.url, Root => {
            let content = ReactDOM.renderToString(<Root />);

            // content must be rendered before we can retrieve the page title
            let title = DocumentTitle.rewind();

            res.render('index', {
                debug: config.debug,
                showHeader: !title,
                title: title ? (title + ' — ' + config.title) : config.title,
                version: config.version,
                gaTrackingId: config.gaTrackingId,
                content
            });
        });
    }
};
