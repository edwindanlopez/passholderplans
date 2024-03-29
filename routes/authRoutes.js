const User = require("../models").User;

module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

	router.get("/isAuthenticated",function(req,res){
		if (req.isAuthenticated()){
			res.json({
				userId: req.user._id,
				username: req.user.username,
				events: [],
				isAuthenticated: true
			});
			//you can also pass up any other fields you with to expose
			//for example, 
			//nickname: req.user.nickname
		} else {
			res.json({
				userId: null,
				username: null,
				events: null,
				isAuthenticated: false
			});
		}
	});

	router.post("/signup",function(req,res){
		const newUser = req.body;

		console.log("This would be the: " + newUser);

		User.register(newUser,newUser.password,(err,user)=>{
			if (err){ 
				return res.json(err.message); 
			} else{
				res.json({
					userId: user._id,
					username: user.username,
					events: [],
					isAuthenticated: true
				});
			}
		});
	});

	router.post("/signin",passport.authenticate('local') ,function(req,res){
		console.log(req.user);
		res.json({
			userId: req.user._id,
			username: req.user.username,
			events: [],
			isAuthenticated: true
		});
	});

	router.get('/logout', function(req, res) {
		req.logout();
		res.json();
	});

	return router;
};