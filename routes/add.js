var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
 	console.log("addFriend called");
	
	var name = req.query.name;
	var description = req.query.description;

	console.log(name);
	console.log(description);

	// Take you back to index route
	res.redirect('/');

	newFriend = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/400/400/people"
		};

	data.friends.push(newFriend);
}