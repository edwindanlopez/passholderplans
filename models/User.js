
const	mongoose = require('mongoose'),
		Schema = mongoose.Schema, 
		passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	events: Array
	//you may replace this 'name' field with anything you like
});
//passport-local-mongoose creates a 'username' and some 'password' fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);