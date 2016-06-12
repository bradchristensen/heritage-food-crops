import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import routes from 'infrastructure/routes';
import smoothScroll from 'smooth-scroll';
import ReactGA from 'react-ga';
import useScroll from 'react-router-scroll';

ReactGA.initialize(window.hfcrtAppConfig.gaTrackingId, {
    debug: window.hfcrtAppConfig.debug
});

const unlisten = browserHistory.listen(location => ReactGA.pageview(location.pathname));

ReactDOM.render(
    <Router
        history={browserHistory}
        routes={routes}
        render={applyRouterMiddleware(useScroll())}
    />,
    document.getElementById('page')
);
smoothScroll.init();

unlisten();

// TODO: React-based replacement for highlighting clicked references
/*
$('.ref').bind('click', function () {
    $('.cite').removeClass('highlight');
    $($(this).attr('href')).addClass('highlight');
});
*/
