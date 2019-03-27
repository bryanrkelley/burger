//Import the MySQL connection.
var connection = require('./connection');


var orm = {
    //Read All()
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM '+ tableInput + ';', function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    //End Read
    
    //Update updateOne()
    update: function(tableInput, condition, cb) {
        console.log("This is working.")
        connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err, result) {
            if(err) throw err;
            cb(result);
        })
    },
    //End Update

    //Create insertOne()
    create: function(tableInput, val, cb) {
        connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err, result) {
            if(err) throw err;
            cb(result);
        })
    }
    //End Create
    
}

//Export the orm object for the model
module.exports = orm;