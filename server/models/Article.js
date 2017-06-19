// TODO: Add comments here. What is the purpose of these dependencies?
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO: Add comment here. What is the purpose of this model??
// TODO: Explain what this model would generate in our Mongo database.
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
