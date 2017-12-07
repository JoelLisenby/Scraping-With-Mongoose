//Node Dependencies
var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request'); //web scraping
var cheerio = require('cheerio'); //web scraping

//Import Coment and Article Models
var Comment = require('../models/Comment.js');
var Article = require('../modesl/Article.js');

//Render Index Page
router.get("/", function(req, res) {
   
   //Scraping Data
   res.redirect('/scrape');
})