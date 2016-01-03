import React from 'react';
import Router from 'react-router';
import routes from 'infrastructure/routes';

// TODO: deprecated
import $ from 'jquery';
import 'jquery.fancybox';
import 'jquery.scrollto';
import 'bootstrap';

Router.run(routes, Router.HistoryLocation, Root => {
    // TODO update path in store
    React.render(<Root />, document.getElementById('page'));
});

$(document).ready(function () {
    /* Enable Bootstrap tooltips */
    $('*[title]').tooltip({
        container: 'body',
        placement: 'top auto'
    });

    $('a').click(function () {
        if (this.hash.length > 1) {
            $.scrollTo($(this.hash).offset().top, 500);
            return false;
        }
    });

    $('.ref').bind('click', function () {
        $('.cite').removeClass('highlight');
        $($(this).attr('href')).addClass('highlight');
    });
    $('a.gallery, a.fancybox').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        padding: 0,
        loop: false
    });
    $('a.fadebox').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        padding: 0,
        loop: false
    });

    var currentSubmenu = null;

    var submenu = $('#submenu');
    var submenuWrapper = $('.wrapper', submenu);

    var hideSubmenu = function () {
        currentSubmenu = null;

        $('ul#menu li').removeClass('current');
        submenu.stop().slideUp(200, () => {
            submenu.hide();
            submenuWrapper.empty();
        });
    };

    var fillWithLinks = function (link) {
        if (submenu.css('display') === 'none') {
            submenu.css('height', '0px');
            submenu.show();
        }

        submenuWrapper.empty();
        submenuWrapper.append($('ul', $(link).parent()).clone());

        var height = '' + submenuWrapper.outerHeight() + 'px';
        submenu.stop().animate({ height }, 200, () => submenu.css('height', 'auto'));

        $('ul', submenuWrapper).hide().fadeIn(200);
    };

    $('ul#menu > li > a').mouseover(function () {
        var href = $(this).attr('href');

        if (href.substr(0, 1) !== '#' || href === '#print') {
            hideSubmenu();
            return;
        }

        if ($(this).text() === currentSubmenu)
            return;

        currentSubmenu = $(this).text();

        $('ul#menu li').removeClass('current');
        $(this).parent().addClass('current');

        var link = this;

        if ($('ul', submenuWrapper).length > 0) {
            $('ul', submenuWrapper).stop().fadeOut(200, () => {
                if (currentSubmenu !== null) {
                    fillWithLinks(link);
                }
            });
        } else {
            fillWithLinks(link);
        }
    });

    $('#navbar').mouseleave(hideSubmenu);

    $('ul#menu > li > a').click(function (e) {
        if ($(this).attr('href') === '#') {
            e.preventDefault();
            submenu.css('height', '0px');
            submenu.css('position', 'static');
            submenu.show();
            fillWithLinks($('ul#menu > li:first-child > a'));
        }
    });

});
