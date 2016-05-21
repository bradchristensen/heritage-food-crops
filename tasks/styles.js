import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import less from 'gulp-less';
import nano from 'gulp-cssnano';
import del from 'del';
import cache from 'gulp-cache-stream';
import concat from 'gulp-concat';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

import config from 'app/config/gulp.json';

var src = config.src;
var dest = config.dest;

gulp.task('clean:less', () => {
    del.sync(dest.styles + '**', (err, deletedFiles) => {
        if (err) console.error(err);
        console.log('Files deleted:\r\n', deletedFiles.join('\r\n'));
    });
});

export default gulp.task('styles', () => {
    return gulp.src([
        src.styles + '_fonts.less',
        src.styles + '_reset.less',
        src.styles + '_global.less'
    ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(cache(stream => {
        return stream
        .pipe(less())
        .pipe(postcss([
            autoprefixer({ browsers: ['last 3 versions'] })
        ]));
    }, 'less'))
    .pipe(sourcemaps.write())
    .pipe(concat('global.css'))
    .pipe(nano())
    .pipe(gulp.dest(dest.styles));
});
