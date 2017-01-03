import gulp from 'gulp';
import less from 'gulp-less';
import nano from 'gulp-cssnano';
import del from 'del';
import concat from 'gulp-concat';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

import config from '../app/config/gulp.json';

const src = config.src;
const dest = config.dest;

gulp.task('clean:less', () => {
    del.sync(`${dest.styles}**`, (err, deletedFiles) => {
        if (err) console.error(err);
        console.log('Files deleted:\r\n', deletedFiles.join('\r\n'));
    });
});

export default gulp.task('styles', () =>
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
