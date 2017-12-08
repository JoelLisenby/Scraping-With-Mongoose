//Dependences
//================================================================
var express = require('express');
var exphbs = require('express-handlebars');
var hbs = require('handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

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

//Connection MongoDB
//================================================================
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/redditScrape", {
  useMongoClient: true
});

//Get Schemas
//===============================================================
var Article = require('./models/Article.js');
var Comment = require('./models/Comment.js');

//Start Scraping reddit/r/learnjavascript
//================================================================
var Scraper = require('./scraper.js');

//Routes
//================================================================
app.get('/', function(req,res) {

   Article.find().populate("comment").exec()
   .then(function(articles, err) {
      if(err) {
         throw err;
      }
      console.log("worked");
      res.render("index", {layout: "main", data: articles});

   });

});



//Start listening on Port 3000
//================================================================
var port = process.env.PORT || 3000;
app.listen(port, function() {
   console.log("App listening on port: " + port);
});


