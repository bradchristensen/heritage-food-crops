import gulp from 'gulp';
import plumber from 'gulp-plumber';
import eslint from 'gulp-eslint';
import path from 'path';
import webpack from 'webpack';
import _ from 'lodash';

import config from 'app/config/gulp.json';

var src = config.src;
var dest = config.dest;

var webpackCache = {};

var webpackConfig = {
    context: path.resolve(__dirname, '../' + src.scripts),
    entry: [
        'babel-polyfill',
        './main'
    ],
    output: {
        path: path.resolve(__dirname, '../' + dest.scripts),
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, '../' + src.scripts)
                ],
                query: {
                    plugins: ['transform-class-properties', 'lodash'],
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    resolve: {
        root: path.resolve(__dirname, '../' + src.scripts)
    },
    devtool: 'source-map',
    cache: webpackCache
};

var webpackProductionConfig = _.assign({}, webpackConfig, {
    output: _.assign({}, webpackConfig.output, {
        filename: 'main.min.js'
    }),
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    devtool: undefined,
    cache: {}
});

gulp.task('scripts:dev', callback => {
    webpack(webpackConfig, (err, stats) => {
        if (err) {
            throw new Error('webpack: ' + (err.message || err));
        }
        callback();
    });
});

gulp.task('scripts:prod', callback => {
    webpack(webpackProductionConfig, (err, stats) => {
        if (err) {
            throw new Error('webpack: ' + (err.message || err));
        }
        callback();
    });
});

gulp.task('scripts:lint', () => {
    return gulp.src([src.scripts + '**/*.js'])
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format());
});

export default gulp.task('scripts', ['scripts:lint', 'scripts:dev', 'scripts:prod']);
