var express = require("express");

var PORT = process.env.PORT  || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

//Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Import Burger controllers and give the server access
var routes = require("./controllers/burgers_controller");

app.use("/",routes);

//Start server so that it can begin listening to the client
app.listen(PORT);
//Log when server has started
console.log("Listinging on port: " + PORT);