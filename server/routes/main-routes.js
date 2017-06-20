// TODO: Add comments here. What is the purpose of the html routes file??
// So the router knows what to serve when the app is opened. 
var express = require('express');
var router = express.Router();
var path = require('path');

// TODO: Add comments here. What is the purpose of this route??
router.get('/', function (req, res) {
    // TODO: Explain what this route is serving and why.
    //This route gets the hombepage and serves the index.html found in public. 
    res.sendFile(path.resolve('public/index.html'));
});

module.exports = router;
