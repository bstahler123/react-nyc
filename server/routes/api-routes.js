// TODO: Add comments here. What is the purpose of these api routes?
// These are HTTP methoods to create, update and delete post. 
var express = require('express');
var router = express.Router();

//This route will allow you to read from the api . 
router.get('/saved', function (req, res) {
	// TODO: Pseudocode functionality for this route.
	// Get all the entrys from the api
});

// This route will allow you to create an entry for the api.
router.post('/saved', function (req, res) {
    // TODO: Pseudocode functionality for this route.
    //Create an etry for the api 
    // Put allows to update/replace. 

});

// This route will allow you to delete from the api.
router.delete('/saved', function (req, res) {
    // TODO: Pseudocode functionality for this route.
    // delete an etry from the api
});

module.exports = router;
