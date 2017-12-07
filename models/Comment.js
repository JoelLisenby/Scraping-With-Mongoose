//Require Mongoose
var mongoose = require('mongoose');

//Create Schema Class
var Schema = mongoose.Schema;

//Create Comment Schema
var CommentSchema = new Schema({

   //Author's Name
   author: {
      type: String
   },

   //Comment Content
   content: {
      type: String
   }
});

//Create the Comment model with Mongoose
var Comment = mongoose.model('Comment', CommentSchema);

//Export Comment Model
module.exports = Comment;