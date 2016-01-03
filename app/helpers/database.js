import config from 'app/config';
import mysql from 'mysql2';
import _ from 'lodash';
import sql from 'app/helpers/sql';

export class DatabaseConnection {
    constructor (connection) {
        this.transactionScope = false;
        this.connection = connection;
    }

    query (query, params) {
        params = params || {};

        return new Promise((resolve, reject) => {
            this.connection.query(query.toString(), params, (err, rows) => {
                if (!this.transactionScope) {
                    this.connection.release();
                }

                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    execute (query, params) {
        params = params || {};

        return new Promise((resolve, reject) => {
            this.connection.execute(query.toString(), params, (err, rows) => {
                if (!this.transactionScope) {
                    this.connection.release();
                }

                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    beginTransaction () {
        this.transactionScope = true;
        return this.query('SET autocommit=0; START TRANSACTION;');
    }

    commit () {
        return this.query('COMMIT; UNLOCK TABLES; SET autocommit=1;').then(() => this.connection.release());
    }

    rollback () {
        return this.query('ROLLBACK; UNLOCK TABLES; SET autocommit=1;').then(() => this.connection.release());
    }
}

export class DatabaseWrapper {
    constructor (mysqlConfig) {
        var options = _.assign({}, {
            namedPlaceholders: true,
            multipleStatements: true
        }, mysqlConfig || config.mysql);

        this.pool = mysql.createPool(options);
    }

    getConnection () {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, con) => {
                if (err) {
                    if (con) {
                        con.release();
                    }

                    reject(err);
                } else {
                    resolve(new DatabaseConnection(con));
                }
            });
        });
    }

    beginTransaction () {
        return this.getConnection().then(conn => {
            return conn.beginTransaction().then(() => conn);
        });
    }

    query (query, params) {
        return this.getConnection().then(conn => {
            return conn.query(query, params);
        });
    }

    execute (query, params) {
        return this.getConnection().then(conn => {
            return conn.execute(query, params);
        });
    }

    // Only ever call this if you're absolutely sure the database singleton will no longer be used!
    // e.g. at the end of a gulp task which you want to release all handles in order to finish
    close () {
        return new Promise(resolve => this.pool.end(resolve));
    }

    placeholders (map) {
        var placeholders = {};
        _.forEach(map, (value, key) => {
            placeholders[key] = sql.fval(':placeholder' + key);
        });
        return placeholders;
    }

    values (map) {
        var values = {};
        _.forEach(map, (value, key) => {
            values['placeholder' + key] = value;
        });
        return values;
    }
}

export default new DatabaseWrapper();
