const path = require('path');
const nodeExternals = require('webpack-node-externals');
const generateWebpackConfig = require('./generateWebpackConfig');

process.env.BABEL_ENV = 'node';

const clientWebpackConfig = generateWebpackConfig();
const babelRule = clientWebpackConfig.module.rules.find(rule => rule.loader === 'babel-loader');

module.exports = {
    context: path.resolve(`${__dirname}../`),
    entry: '../app/plumbing/app.js',
    output: {
        path: path.resolve(__dirname, '../'),
        filename: 'index.js',
        publicPath: '/',
    },
    module: {
        rules: [
            babelRule,
            {
                loader: 'json-loader',
                test: /\.json$/,
            },
        ],
    },
    resolve: clientWebpackConfig.resolve,

    /* We must tell Webpack to target Node.js instead of the browser, which causes it not to
     * inject browser shims for core Node.js functionality, as it would by default. */
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },

    /* Calling nodeExternals() loads a list of all vendor modules (node_modules) to be treated
     * as external dependencies. These modules will be loaded externally instead of being included
     * in the bundle. */
    externals: [nodeExternals()],
};
