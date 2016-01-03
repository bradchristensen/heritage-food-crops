import gulp from 'gulp';
import db from 'app/helpers/database';
import migrate from 'app/helpers/migrate';

export default gulp.task('migrate', () =>
    migrate(db, true)
    .then(() => db.close())
    .catch(err => {
        console.error(err);
        db.close();
    })
);
