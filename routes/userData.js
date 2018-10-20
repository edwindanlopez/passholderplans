const db = require("../models");

module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

	router.post("/userdata",function(req,res){
		// console.log("This is coming from verifyKey post request: " + JSON.stringify(req.body));

		console.log("Trying req.body.events" + req.body.events);
		// let databaselocation = passholder.replace(/['"]+/g, '')
		db.User.update({
			$push: {
				events: req.body.events
			}
		},
		function(err, updated) {
			if (err) {
			console.log(err);
			} else {
			console.log(updated);
			// sendConfirmation();
			}
		});
		
	});


	return router;
};