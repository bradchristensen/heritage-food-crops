import React from 'react';
import { hydrate } from 'react-dom';
import ReactGA from 'react-ga';
import fontawesome from '@fortawesome/fontawesome';
import Root from './views/Root';
import initSmoothScroll from './infrastructure/smoothScroll';

/* In production, this stylesheet will be extracted into a separate CSS file.
 * In development mode, it will be hot-reloadable. */
if (process.env.NODE_ENV === 'development') {
    require('../styles/global.less'); // eslint-disable-line global-require
}

fontawesome.config = {
    autoAddCss: false,
};

ReactGA.initialize(window.hfcrtAppConfig.gaTrackingId, {
    debug: window.hfcrtAppConfig.debug,
});

hydrate(<Root />, document.getElementById('page'));

initSmoothScroll();

window.HFCRT_BUNDLE_LOADED = true;
