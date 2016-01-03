import database from 'app/helpers/database';
import sql from 'app/helpers/sql';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

var createMigrationsTable = db => db.query(
    'CREATE TABLE IF NOT EXISTS `_migrations` ' +
    '(`name` varchar(255) COLLATE utf8_unicode_ci NOT NULL, ' +
    'CONSTRAINT pk_name PRIMARY KEY (name)) ' +
    'ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci'
);

var getMigrations = db => db.execute(sql.select().from('_migrations'));

const migrationDir = path.resolve(__dirname + '/../migrations/');
var fileIsDirectory = file => fs.statSync(path.join(migrationDir, file)).isDirectory();

export var clean = function (db, verbose) {
    db = db || database;

    return createMigrationsTable(db)
    .then(() => getMigrations(db))
    .then(migrations => {
        var migrationDirs = _.chain(fs.readdirSync(migrationDir))
            .filter(fileIsDirectory)
            .intersection(migrations.map(row => row.name))
            .sortBy(name => name)
            .reverse()
            .value();

        if (!migrationDirs.length) {
            console.log('Your database is already clean as a whistle!');
        }

        // wait synchronously for each async downgrade migration to complete
        var promise = Promise.resolve();
        var discontinue = false;
        migrationDirs.forEach(dirName => {
            if (discontinue) return;

            console.log('Triggered database downgrade migration ' + dirName);
            var migrationScript = require('../migrations/' + dirName + '/index');
            var query = sql.delete().from('_migrations').where('name = :dirName');
            promise = promise
                .then(() => migrationScript.down(db, verbose))
                .then(() => verbose && console.log('Downgrade migration ' + dirName + ' completed successfully'))
                .catch(err => {
                    discontinue = true;
                    console.error('Downgrade migration ' + dirName + ' failed! Skipping any outstanding migrations');
                    return Promise.reject(err);
                })
                // remove this migration from the database
                .then(() => db.execute(query, { dirName }));
        });
        return promise.then(() => {
            if (migrationDirs.length) {
                console.log('' + migrationDirs.length + ' downgrade migrations completed successfully');
            }
        });
    });
};

export default function (db, verbose) {
    // database wrapper for mocking
    db = db || database;

    return createMigrationsTable(db)
    .then(() => getMigrations(db))
    .then(migrations => {
        var migrationDirs = _.chain(fs.readdirSync(migrationDir))
            .filter(fileIsDirectory)
            .difference(migrations.map(row => row.name))
            .sortBy(name => name)
            .value();

        if (!migrationDirs.length) {
            console.log('Your database is already up to date!');
            if (migrations.length) {
                migrations = _.chain(migrations).sortBy(name => name).reverse().value();
                console.log('Version: ' + migrations[0].name);
            } else {
                console.log('Version: 0 (no available migrations)');
            }
        }

        // wait synchronously for each async migration to complete
        var promise = Promise.resolve();
        var discontinue = false;
        migrationDirs.forEach(dirName => {
            if (discontinue) return;

            console.log('Triggered database migration ' + dirName);
            var migrationScript = require('../migrations/' + dirName + '/index');
            var fields = { name: dirName };
            var query = sql.insert().into('_migrations').setFields(db.placeholders(fields));
            promise = promise
                .then(() => migrationScript.up(db, verbose))
                .then(() => verbose && console.log('Migration ' + dirName + ' completed successfully'))
                .catch(err => {
                    discontinue = true;
                    console.error('Migration ' + dirName + ' failed! Skipping any outstanding migrations');
                    return Promise.reject(err);
                })
                // mark this migration as completed in the database
                .then(() => db.execute(query, db.values(fields)));
        });
        return promise.then(() => {
            if (migrationDirs.length) {
                console.log('' + migrationDirs.length + ' migrations completed successfully');
            }
        });
    });
}
