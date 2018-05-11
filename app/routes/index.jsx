import { StaticRouter } from 'react-router';
import { Router as routerConstructor } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import config from '../config';
import { rewind as getDocumentTitle } from '../../static/scripts/infrastructure/documentTitle';
import routes from '../../static/scripts/infrastructure/routes';
import faviconData from '../../dist/faviconData.json';
import createApiClientStore from '../../static/scripts/store/init';
import api from './api';

const router = routerConstructor({ mergeParams: true, strict: true });

router.use('/api', api);

router.use((req, res) => {
    const store = createApiClientStore({});

    const toRender = (
        <Provider store={store}>
            <StaticRouter context={{}} location={req.url}>
                {routes}
            </StaticRouter>
        </Provider>
    );

    const content = renderToString(toRender);

    // content must be rendered before we can retrieve the page title
    const title = getDocumentTitle();

    res.render('index', {
        useMinifiedCode: !config.debug,
        htmlTitle: title ? `${title} — ${config.title}` : config.title,
        faviconHtml: faviconData.favicon.html_code,
        currentPageTitle: title,
        siteTitle: config.title,
        version: config.version,
        gaTrackingId: config.gaTrackingId,
        content,
    });
});

export default router;
