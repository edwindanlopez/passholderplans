const express = require("express");
const mongoose = require("mongoose");
var mongojs = require('mongojs')
const app = express();
const PORT = process.env.PORT || 3001;
const models = require("./models");

const passport = require("passport");
const session = require('express-session');

// Configure body parser for AJAX requests
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

 // For Passport
app.use(session({ secret: 'superSecretpassholder',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./config/passport.js')(passport,models.User);

// Add routes, both API and view
const routes = require("./routes")(passport);
app.use('/',routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
//add mongo heroku uri
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/passholder-development", { useNewUrlParser: true }
);


// Start the API server
app.listen(PORT, function() {
  console.log("🌎  ==> API Server now listening");
});