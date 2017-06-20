// TODO: Add comment block here. What is the purpose of each dependency?
// express help us manage our routes. 
// Path helps normalize the paths. 
// Morgan generates logs of request that we make.
// Body parser will parse are data into json. 
// Mongoose is a webserver for mongo and allows us to connect to the database.
// serve-favicon is a package required to render favicons. 
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');

// This will initialze Express
var app = express();

// TODO: Add comment block here.
// TODO: Explain how is this working differently for local development and Heroku deployment?
var port = process.env.PORT || '3000';

// TODO: Add comment block here.
// TODO: Explain how is this working differently for local development and Heroku deployment?
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/react_nyt';

// This connects us to mongoDB.
mongoose.connect(MONGODB_URI);
var db = mongoose.connection;

// Return error on error.
db.on('error', function (err) {
    console.log('Mongoose Error: ', err);
});

// Success message when connected.
db.once('open', function () {
    console.log('Mongoose connection successful.');
});

// Using logger with the dev option.
app.use(logger('dev'));

// Body parser use to formate json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// This will normalize or pulic path. 
app.use(express.static(path.resolve('public')));

// Path to images to use favicon.
app.use(favicon(path.resolve('public/img', 'favicon.ico')));

// Requires our api routes.
var mainRoutes = require('./server/routes/main-routes');
var apiRoutes = require('./server/routes/api-routes');
app.use('/', mainRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${ port }`)
});
