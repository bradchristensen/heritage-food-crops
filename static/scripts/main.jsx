import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import fontawesome from '@fortawesome/fontawesome';
import ScrollToTop from './components/ScrollToTop';
import createApiClientStore from './store/init';
import routes from './infrastructure/routes';
import initSmoothScroll from './infrastructure/smoothScroll';

fontawesome.config = {
    autoAddCss: false,
};

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

initSmoothScroll();
