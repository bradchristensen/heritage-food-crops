require('babel-register')({
    presets: ['react', 'es2015'],
});
require('require-all')(`${__dirname}/tasks`);
