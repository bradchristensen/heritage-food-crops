import config from 'app/config';
import routes from 'infrastructure/routes';
import { match, RouterContext } from 'react-router';
import React from 'react';
import ReactDOM from 'infrastructure/reactDOM';
import { rewind as getDocumentTitle } from 'infrastructure/documentTitle';

export default {
    get (req, res) {
        match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message);
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            } else if (renderProps) {
                let content = ReactDOM.renderToString(<RouterContext {...renderProps} />);

                // content must be rendered before we can retrieve the page title
                let title = getDocumentTitle();

                res.render('index', {
                    debug: config.debug,
                    htmlTitle: title ? title + ' — ' + config.title : config.title,
                    currentPageTitle: title,
                    siteTitle: config.title,
                    version: config.version,
                    gaTrackingId: config.gaTrackingId,
                    content
                });
            } else {
                res.status(404).send('Not found');
            }
        });
    }
};
