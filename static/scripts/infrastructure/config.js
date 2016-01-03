requirejs.config({
    baseUrl: '/static/scripts',
    paths: {
        'util': 'infrastructure/util',
        'analytics': 'infrastructure/analytics',
        'history': 'infrastructure/history',

        'jquery': 'vendor/jquery.min',
        'bootstrap': 'vendor/bootstrap.min',
        'jquery.fancybox': 'vendor/jquery-fancybox.min',
        'jquery.scrollto': 'vendor/jquery-scrollto.min'
    },
    shim: {
        'bootstrap': ['jquery'],
        'jquery.fancybox': ['jquery'],
        'jquery.scrollto': ['jquery']
    }
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
