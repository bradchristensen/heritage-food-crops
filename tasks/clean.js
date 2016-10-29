import gulp from 'gulp';
import del from 'del';

import config from '../app/config/gulp.json';

export default gulp.task('clean', () => {
    del.sync([
        `${config.dest.styles}**`,
        `${config.dest.scripts}**`,
    ], (err, deletedFiles) => {
        if (err) console.log(err);
        console.log('Files deleted:\r\n', deletedFiles.join('\r\n'));
    });
});
