// TODO: Add comment block here. What is the purpose of each dependency?
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');

// TODO: Add comment block here.
var app = express();

// TODO: Add comment block here.
// TODO: Explain how is this working differently for local development and Heroku deployment?
var port = process.env.PORT || '3000';

// TODO: Add comment block here.
// TODO: Explain how is this working differently for local development and Heroku deployment?
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/react_nyt';

// TODO: Add comment block here.
mongoose.connect(MONGODB_URI);
var db = mongoose.connection;

// TODO: Add comment block here.
db.on('error', function (err) {
    console.log('Mongoose Error: ', err);
});

// TODO: Add comment block here.
db.once('open', function () {
    console.log('Mongoose connection successful.');
});

// TODO: Add comment block here.
app.use(logger('dev'));

// TODO: Add comment block here.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// TODO: Add comment block here.
app.use(express.static(path.resolve('public')));

// TODO: Add comment block here.
app.use(favicon(path.resolve('public/img', 'favicon.ico')));

// TODO: Add comment block here.
var mainRoutes = require('./server/routes/main-routes');
var apiRoutes = require('./server/routes/api-routes');
app.use('/', mainRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${ port }`)
});
