requirejs.config({
    baseUrl: '/static/scripts'
});

// Google Analytics shim
requirejs.config({
    paths: {
        '__ga__': [
            '//www.google-analytics.com/analytics',
            'data:application/javascript,'
        ]
    },
    shim: {
        '__ga__': {
            exports: '__ga__'
        }
    }
});
