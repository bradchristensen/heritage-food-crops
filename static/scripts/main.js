import React from 'react';
import ReactDOM from 'infrastructure/reactDOM';
import { Router, useRouterHistory } from 'react-router';
import routes from 'infrastructure/routes';
import smoothScroll from 'smooth-scroll';
import ga from 'react-ga';
import { createHistory } from 'history';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

ga.initialize(window.hfcrtAppConfig.gaTrackingId, {
    debug: window.hfcrtAppConfig.debug
});

const browserHistory = useRouterHistory(useScroll(createHistory))();
const unlisten = browserHistory.listen(location => ga.pageview(location.pathname));

ReactDOM.render(
    <Router history={browserHistory}>{routes}</Router>,
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
