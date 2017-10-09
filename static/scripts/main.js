import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import ScrollToTop from './components/ScrollToTop';
import createApiClientStore from './store/init';
import routes from './infrastructure/routes';

const store = createApiClientStore();

ReactGA.initialize(window.hfcrtAppConfig.gaTrackingId, {
    debug: window.hfcrtAppConfig.debug,
});

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                {routes}
            </ScrollToTop>
        </BrowserRouter>
    </Provider>,
    document.getElementById('page'),
);
