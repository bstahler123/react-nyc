// TODO: Add comments here. What is the purpose of the html routes file??
var express = require('express');
var router = express.Router();
var path = require('path');

// TODO: Add comments here. What is the purpose of this route??
router.get('/', function (req, res) {
    // TODO: Explain what this route is serving and why.
    res.sendFile(path.resolve('public/index.html'));
});

module.exports = router;
