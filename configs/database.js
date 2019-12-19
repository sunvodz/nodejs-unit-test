const mysql = require('mysql');

class MySqlDatabase {

    constructor() {
        this.connection = mysql.createPool({
            host: '127.0.0.1',
            user: 'admin',
            password: '123456',
            database: 'db_unit',
            charset: 'utf8'
        });
    }
    query(sql, params = null) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, params, (errors, result) => {
                if (errors) return reject({ errors });
                resolve(result);
            });
        });
    }

}

module.exports = { MySqlDatabase };