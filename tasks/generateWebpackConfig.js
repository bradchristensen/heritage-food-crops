const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.BABEL_ENV = 'browser';

module.exports = function generateWebpackConfig(forProduction) {
    const minSuffix = forProduction ? '.min' : '';

    return {
        context: path.resolve(__dirname, '../'),
        entry: {
            /* Create a bundle which will be the main entrypoint to our application (minus
             * the polyfill and vendor scripts, which are dynamically linked).
             * This bundle has two of its own "entrypoints", although only one of them is an actual
             * Javascript entrypoint while the other is a stylesheet compiled in parallel. */
            main: [
                '@babel/polyfill',

                /* Our application's actual entrypoint, which will mount a React root component,
                 * initialise the Redux environment and so on). */
                './static/scripts/main.jsx',

                /* This entrypoint is not really an entrypoint as it won't be bundled into the
                 * main.js/main.min.js bundle, but instead bundled into its own
                 * main.css/main.min.css bundle (configured by the ExtractTextPlugin). */
                './static/styles/global.less',
            ],
        },
        output: {
            /* Output the generated bundle file to /dist/scripts/main.js */
            path: path.resolve(__dirname, '../dist'),
            filename: `scripts/[name]${minSuffix}.js`,
            publicPath: '/static/',
            chunkFilename: `scripts/[name]${minSuffix}.js?[chunkhash]`,
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    options: {
                        cacheDirectory: true,

                        /* The rest of Babel's config automatically comes from .babelrc.js */
                    },
                },
                {
                    /* These loaders are used to compile our SCSS entrypoint into CSS,
                     * to apply CSS fixes for older browsers and to minify the bundle
                     * (in production only). */
                    test: /\.less/,
                    use: ExtractTextPlugin.extract({
                        publicPath: '/styles/',
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    url: false, /* Don't rewrite relative paths to absolute. */
                                },
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: () => [
                                        autoprefixer(),
                                        postcssFlexbugsFixes(),
                                    ].concat(!forProduction ? [] : [
                                        cssnano(),
                                    ]),
                                },
                            },
                            { loader: 'less-loader' },
                        ],
                    }),
                },
            ],
        },
        resolve: {
            /* Normally Webpack only looks for .js files when no file extension is specified
             * in the module path (i.e. `import script from './filename'`).
             * The following configuration tells Webpack to look for scripts having either of the
             * extensions 'js' or 'jsx'. */
            extensions: ['.js', '.jsx'],
        },
        plugins: [
            /* Extract the stylesheet into its own bundle. */
            new ExtractTextPlugin(`styles/global${minSuffix}.css`),
        ].concat(!forProduction ? [] : [
            /* Define the "production" environment variable, required to strip out React
             * performance measurements at runtime. */
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                },
            }),
            /* Minify the generated bundle. */
            new webpack.optimize.UglifyJsPlugin(),
        ]),
    };
};
