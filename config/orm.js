//Import the MySQL connection.
var connection = require('./connection');

//Create insertOne()

//End Create


//Read selectAll()
var orm = {
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM '+ tableInput + ';', function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

//End Read


//Update updateOne()

//End Update


//Delete

//End Delete


//Export the orm object for the model
module.exports = orm;