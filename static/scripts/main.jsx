import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import { hot } from 'react-hot-loader';
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

function Root() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    {routes}
                </ScrollToTop>
            </BrowserRouter>
        </Provider>
    );
}

const HotReloadableRoot = process.env.NODE_ENV === 'development' ?
    hot(module)(Root) : Root;

hydrate(<HotReloadableRoot />, document.getElementById('page'));

initSmoothScroll();

window.HFCRT_BUNDLE_LOADED = true;
