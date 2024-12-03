var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send("Hello, this is my first Express application");
});

app.listen(5000, function () {
    console.log("Server is running on port 5000");
});
