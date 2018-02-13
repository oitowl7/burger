var mysql = require("mysql");
var bodyParser = require("body-parser");
var express = require("express");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send("<h1>LOADED!!!!!!CRUNK!!!!</h1>")
})

console.log("server.js");

app.listen(PORT, () => console.log("App is listening on port: " + PORT));
