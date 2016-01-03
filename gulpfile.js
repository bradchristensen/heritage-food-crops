require('babel-register')({
    presets: ['es2015'],

    // https://gist.github.com/branneman/8048520#gistcomment-1618856
    // Resolve modules using paths relative to the app's root directory, e.g.
    // import view from 'app/views/index'
    // or require('app/views/index')
    resolveModuleSource: require('babel-resolver')(__dirname)
});
require('require-all')(__dirname + '/tasks');
