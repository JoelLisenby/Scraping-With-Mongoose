var Article = require('./models/Article.js');
var Comment = require('./models/Comment.js');

var cheerio = require("cheerio");
var request = require("request");
// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from reddit's learnjavascript board:" +
            "\n***********************************\n");
// Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
request("https://www.reddit.com/r/learnjavascript", function(error, response, html) {
  var $ = cheerio.load(html);

  var results = [];

  $("p.title > a").each(function(i, element) {

    var title = $(element).text();
    var link = $(element).attr("href");

    Article.create({
      title: title,
      link: link
    });
    
    results.push({
      title: title,
      link: link
    });
  });
  console.log(results);
  console.log("END!!!!!!!!!!!!!!");
});
