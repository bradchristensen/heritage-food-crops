var path = require('path');

// also resolve modules in the static dir so that we can do server-side React rendering
var staticDir = path.resolve(__dirname, 'static/scripts/');

require('babel-register')({
    presets: ['es2015'],

    // https://gist.github.com/branneman/8048520#gistcomment-1618856
    // Resolve modules using paths relative to the app's root directory, e.g.
    // import view from 'app/views/index'
    // or require('app/views/index')
    resolveModuleSource: require('babel-resolver')(staticDir, __dirname)
});
require('./app/plumbing/app');
