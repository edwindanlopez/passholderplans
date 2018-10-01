// Controller for our waitTimes
// ============================
var db = require("../models");

module.exports = {
  // Find all waitTimes, sort them by ?, send them back to the user
  findAll: function(req, res) {
    db.WaitTimes
      .find(req.query)
      // .sort({ date: -1 })
      .then(function(dbWaitTimes) {
        res.json(dbWaitTimes);
      });
  },
  // Delete the specified waitTimes
  delete: function(req, res) {
    db.WaitTimes.remove({ _id: req.params.id }).then(function(dbWaitTimes) {
      res.json(dbWaitTimes);
    });
  },
  // Update the specified headline
  update: function(req, res) {
    db.WaitTimes.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbWaitTimes) {
      res.json(dbWaitTimes);
    });
  }
};
