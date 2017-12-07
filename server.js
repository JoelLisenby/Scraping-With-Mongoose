//Dependences
//================================================================
var express = require('express');
var exphbs = require('express-handlebars');
var hbs = require('handlebars');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

var logger = require('morgan'); //debugging
var request = require('request'); //web scraping
var cheerio = require('cheerio'); // web scraping

//Set Up Express
//================================================================
var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));

//Server Static Content
app.use(express.static(process.cwd() + '/public'));

//Express-Handlebars
//================================================================
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


//Routes
//================================================================
app.get('/', function(req,res) {

})

//Start listening on Port 3000
//================================================================
var port = process.env.PORT || 3000;
app.listen(port, function() {
   console.log("App listening on port: " + port);
});