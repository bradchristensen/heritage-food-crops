const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

process.env.BABEL_ENV = 'node';

module.exports = {
    mode: 'none',
    context: path.resolve(`${__dirname}../`),
    entry: '../app/plumbing/app.js',
    output: {
        path: path.resolve(__dirname, '../'),
        filename: 'index.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },

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

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            // Override the default replacement of 'none' (required as of Webpack 4)
            'process.env.NODE_ENV': 'process.env.NODE_ENV',
        }),
    ],
};
