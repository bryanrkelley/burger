//Set up MySQL connection.
const mysql = require('mysql');

var keys = require('../config/keys.js');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: keys.secret,
//     database: 'burgers_db',
//     port: 3306

var connection;

if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: keys.secret,
        database: 'burgers_db',
        port: 3306
    });
};

//Make connection
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    console.log('connected as id: ' + connection.threadId);
});

//Export connection for ORM to use.
module.exports = connection;