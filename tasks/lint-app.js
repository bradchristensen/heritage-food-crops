import gulp from 'gulp';
import plumber from 'gulp-plumber';
import eslint from 'gulp-eslint';

import config from '../app/config/gulp.json';

const src = config.src;

export default gulp.task('app:lint', () =>
     gulp.src([`${src.app}**/*.js`])
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
);
