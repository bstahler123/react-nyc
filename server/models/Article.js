// Mongoose gives us access to mongoDB and works like an ORM 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// This will create new schemas for each article we scrape. 

var ArticleSchema = new Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    url: {
        type: String
    }
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
