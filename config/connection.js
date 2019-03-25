require('dotenv').config();

//Set up MySQL connection.
const mysql = require('mysql');

//var keys = require('./keys.js');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // password: keys.secret,
    password: '93PennyDog!',
    database: 'burgers_db',
    port: 3306
});

//console.log(connection);

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