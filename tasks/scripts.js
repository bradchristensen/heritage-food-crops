import gulp from 'gulp';
import plumber from 'gulp-plumber';
import eslint from 'gulp-eslint';
import path from 'path';
import webpack from 'webpack';
import _ from 'lodash';
import nodeExternals from 'webpack-node-externals';
import config from '../app/config/gulp.json';

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
                include: [
                    path.resolve(__dirname, `../${src.scripts}`),
                ],
                query: {
                    plugins: ['lodash', 'transform-object-rest-spread'],
                    presets: ['react', 'es2015'],
                },
            },
        ],
    },
    devtool: 'source-map',
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
                loader: 'babel',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-object-rest-spread'],
                    presets: ['react', 'es2015'],
                },
            },
            {
                loader: 'json',
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

const webpackProductionConfig = _.assign({}, _.cloneDeep(webpackConfig), {
    output: _.assign({}, webpackConfig.output, {
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

gulp.task('scripts:lint', () =>
     gulp.src([`${src.scripts}**/*.js`])
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
);

export default gulp.task('scripts', [
    'scripts:lint',
    'scripts:dev',
    'scripts:prod',
    'scripts:node',
]);
