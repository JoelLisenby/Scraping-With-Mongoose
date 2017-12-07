//Include momentJS
var moment = require('moment');

//Require Mongoose
var mongoose = require('mongoose');

//Creating schema class
var Schema = mongoose.Schema;

//Creating article class
var ArticleSchema = new Schema({

   //Article Title
   title: {
      type: String,
      required: true
   },

   //Article Link
   link: {
      type: String,
      required: true
   },

   //Article Summary
   summary: {
      type: String,
      required: true
   },

   //Date of article scrape (saved as a string for ease of use with MomentJS)
   update: {
      type: String,
      default: moment().format("MMMM Do YYYY, h:mm A")
   },

   //Create relation with the comment model
   comments: [{
      type: Schema.Types.ObjectId,
      ref: "Comment"
   }]
});

//Create the Article Model with Mongoose
var Article = mongoose.model('Articel', ArticleSchema);

//Expor the Article Model
module.exports = Article;