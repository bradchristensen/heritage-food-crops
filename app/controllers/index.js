import { match, RouterContext } from 'react-router';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from '../config';
import routes from '../../static/scripts/infrastructure/routes';
import { rewind as getDocumentTitle } from '../../static/scripts/infrastructure/documentTitle';
import faviconData from '../../dist/faviconData.json';

export default {
    get(req, res) {
        match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message);
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            } else if (renderProps) {
                const content = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);

                // content must be rendered before we can retrieve the page title
                const title = getDocumentTitle();

                res.render('index', {
                    useMinifiedCode: config.debug,
                    htmlTitle: title ? `${title} — ${config.title}` : config.title,
                    faviconHtml: faviconData.favicon.html_code,
                    currentPageTitle: title,
                    siteTitle: config.title,
                    version: config.version,
                    gaTrackingId: config.gaTrackingId,
                    content,
                });
            } else {
                res.status(404).send('Not found');
            }
        });
    },
};
