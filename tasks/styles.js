/* eslint-disable no-console */

const gulp = require('gulp');
const less = require('gulp-less');
const nano = require('gulp-cssnano');
const del = require('del');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const config = require('../app/config/gulp.json');

const src = config.src;
const dest = config.dest;

gulp.task('clean:less', () => {
    del.sync(`${dest.styles}**`, (err, deletedFiles) => {
        if (err) console.error(err);
        console.log('Files deleted:\r\n', deletedFiles.join('\r\n'));
    });
});

module.exports = gulp.task('styles', () =>
    gulp.src([
        `${src.styles}_fonts.less`,
        `${src.styles}_reset.less`,
        `${src.styles}_global.less`,
    ])
        .pipe(less())
        .pipe(postcss([
            autoprefixer({ browsers: ['last 3 versions'] }),
        ]))
        .pipe(concat('global.css'))
        .pipe(nano())
        .pipe(gulp.dest(dest.styles)),
);
