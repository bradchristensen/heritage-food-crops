import gulp from 'gulp';
import plumber from 'gulp-plumber';
import uglify from 'gulp-uglify';
import eslint from 'gulp-eslint';
import rename from 'gulp-rename';
import path from 'path';
import webpack from 'webpack';

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
                    plugins: ['transform-class-properties', 'transform-runtime'],
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    resolve: {
        root: path.resolve(__dirname, '../' + src.scripts)
    },
    cache: webpackCache
};

gulp.task('scripts:build', callback => {
    webpack(webpackConfig, (err, stats) => {
        if (err) {
            throw new Error('webpack: ' + (err.message || err));
        }
        callback();
    });
});

gulp.task('scripts:uglify', ['scripts:build'], () => {
    return gulp.src([dest.scripts + 'main.js'])
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest(dest.scripts));
});

gulp.task('scripts:lint', () => {
    return gulp.src([src.scripts + '**/*.js'])
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format());
});

export default gulp.task('scripts', ['scripts:lint', 'scripts:build', 'scripts:uglify']);
