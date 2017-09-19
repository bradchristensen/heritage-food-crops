/* eslint-disable no-console */

const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const config = require('../app/config/gulp.json');

const src = config.src;
const dest = config.dest;

let webpackCompiler = null;

const webpackConfig = {
    context: path.resolve(__dirname, `../${src.scripts}`),
    entry: [
        'babel-polyfill',
        './main',
    ],
    output: {
        path: path.resolve(__dirname, `../${dest.scripts}`),
        filename: 'main.js',
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                query: {
                    plugins: ['lodash', 'transform-object-rest-spread'],
                    presets: ['env', 'react'],
                },
            },
        ],
    },
    devtool: 'source-map',
};

const BABEL_PRESET_ENV_NODE = {
    targets: {
        /* Targeting Node 8 since it has many new features over 6, including async/await,
         * so transformations are minimal. */
        node: '8.0.0',
    },
    useBuiltIns: 'usage',
};

const webpackNodeConfig = {
    context: path.resolve(__dirname, '../app'),
    entry: './plumbing/app',
    output: {
        path: path.resolve(__dirname, '../'),
        filename: 'index.js',
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-object-rest-spread'],
                    presets: [
                        ['env', BABEL_PRESET_ENV_NODE],
                        'react',
                    ],
                },
            },
            {
                loader: 'json-loader',
                test: /\.json$/,
            },
        ],
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
};

const webpackProductionConfig = Object.assign({}, webpackConfig, {
    output: Object.assign({}, webpackConfig.output, {
        filename: 'main.min.js',
    }),
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    ],
    devtool: undefined,
});

gulp.task('scripts:dev', (callback) => {
    if (!webpackCompiler) {
        webpackCompiler = webpack(webpackConfig);
    }

    webpackCompiler.run((err, stats) => {
        if (stats) {
            const jsonStats = stats.toJson();
            if (jsonStats.errors.length) {
                console.error(`Webpack errors: ${jsonStats.errors}`);
            }
            if (jsonStats.warnings.length) {
                console.error(`Webpack warnings: ${jsonStats.warnings}`);
            }
        }
        if (err) {
            throw new Error(`webpack: ${err.message || err}`);
        }
        callback();
    });
});

gulp.task('scripts:prod', (callback) => {
    webpack(webpackProductionConfig, (err) => {
        if (err) {
            throw new Error(`webpack: ${err.message || err}`);
        }
        callback();
    });
});

let webpackNodeCompiler = null;

gulp.task('scripts:node', (callback) => {
    if (!webpackNodeCompiler) {
        webpackNodeCompiler = webpack(webpackNodeConfig);
    }

    webpackNodeCompiler.run((err, stats) => {
        if (stats) {
            const jsonStats = stats.toJson();
            if (jsonStats.errors.length) {
                console.error(`Webpack errors: ${jsonStats.errors}`);
            }
            if (jsonStats.warnings.length) {
                console.error(`Webpack warnings: ${jsonStats.warnings}`);
            }
        }
        if (err) {
            throw new Error(`webpack: ${err.message || err}`);
        }
        callback();
    });
});

module.exports = gulp.task('scripts', [
    'scripts:dev',
    'scripts:prod',
    'scripts:node',
]);
