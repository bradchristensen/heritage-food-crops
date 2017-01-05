import gulp from 'gulp';

import config from '../app/config/gulp.json';

export default gulp.task('watch', () => {
    gulp.watch(`${config.src.styles}**/*.less`, ['styles']);
    gulp.watch(`${config.src.scripts}**/*.js`, ['scripts:dev', 'scripts:node']);
    gulp.watch(`${config.src.app}**/*.js`, ['scripts:node']);
});
