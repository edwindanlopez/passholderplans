module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const waitTimesRoutes = require("./waitTimes-api");

	router.use("/auth",require("./authRoutes.js")(passport));
	router.use("/api",require("./apiRoutes.js")(passport));
	router.use("/waitTimes-api", waitTimesRoutes);
	//add more routes here
	

	// If no API routes are hit, send the React app
	router.use(function(req, res) {
	  res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});

	return router;
};