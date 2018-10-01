var router = require("express").Router();
var waitTimesController = require("../controllers/waitTimes");

// include the Themeparks library
var Themeparks = require("themeparks");
// list all the parks supported by the library
for (var park in Themeparks.Parks) {
    console.log("* " + new Themeparks.Parks[park]().Name + " (DisneyAPI." + park + ")");
}
// access a specific park
var disneyMagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();

// access wait times by Promise
disneyMagicKingdom.GetWaitTimes().then(function(rides) {
    console.log(rides);
    // print each wait time
    for(var i=0, ride; ride=rides[i++];) {
        console.log(ride.name + ": " + ride.waitTime + " minutes wait");
    }
}, console.error);

router.route("/").get(waitTimesController.findAll);

module.exports = router;
