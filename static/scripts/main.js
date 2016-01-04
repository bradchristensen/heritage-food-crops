import React from 'react';
import ReactDOM from 'infrastructure/react-dom';
import Router from 'react-router';
import routes from 'infrastructure/routes';
import smoothScroll from 'smooth-scroll';

Router.run(routes, Router.HistoryLocation, Root => {
    ReactDOM.render(<Root />, document.getElementById('page'));
    smoothScroll.init();
});

// TODO: React-based replacement for highlighting clicked references
/*
$('.ref').bind('click', function () {
    $('.cite').removeClass('highlight');
    $($(this).attr('href')).addClass('highlight');
});
*/
