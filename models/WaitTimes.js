// WaitTimes model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the waitTimesSchema with our schema class
var waitTimesSchema = new Schema({
  // RideData, a string, must be entered
    name: String,
    waitTime: Number,
    active: Boolean,
    fastPass: Boolean,
    fastPassReturnTime: {
        startTime: String,
        endTime: String,
        lastUpdate: Date,
    },
    status: String,
    lastUpdate: Date,
    // schedule: {
    //     openingTime: TimeRanges,
    //     closingTime: TimeRanges,
    //     type: String,
    //     special: [
    //         {openingTime: TimeRanges},
    //         {closingTime: TimeRanges},
    //         {type: String}
    //     ]
    // }
})

// Create the WaitTimes model using the waitTimesSchema
var WaitTimes = mongoose.model("WaitTimes", waitTimesSchema);

// Export the WaitTimes model
module.exports = WaitTimes;
