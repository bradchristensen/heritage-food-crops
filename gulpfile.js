/* eslint-disable no-console */

const gulp = require('gulp');
const del = require('del');

const config = require('./app/config/gulp.json');

require('require-all')(`${__dirname}/tasks`);

gulp.task('clean', () => {
    del.sync([
        `${config.dest.styles}**`,
        `${config.dest.scripts}**`,
    ], (err, deletedFiles) => {
        if (err) console.log(err);
        console.log('Files deleted:\r\n', deletedFiles.join('\r\n'));
    });
});

gulp.task('watch', () => {
    gulp.watch(`${config.src.styles}**/*.less`, ['styles']);
    gulp.watch(`${config.src.scripts}**/*.js`, ['scripts:dev', 'scripts:node']);
    gulp.watch(`${config.src.app}**/*.js`, ['scripts:node']);
});

gulp.task('default', ['styles', 'scripts']);
