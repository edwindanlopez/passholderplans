// Controller for our waitTimes
// ============================
const db = require("../models");

// include the Themeparks library
const Themeparks = require("themeparks");

// access a specific park
const MagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
const Epcot = new Themeparks.Parks.WaltDisneyWorldEpcot();
const HollywoodStudios = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();
const AnimalKingdom = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom();

module.exports = {
  // Find all waitTimes, display name, wait time, and status, send them back to the user
  findAll: function (req, res) {
    MagicKingdom.GetWaitTimes().then(function (rides) {
      // print each wait time
      for (var i = 0, ride; ride = rides[i++];) {
//         console.log(`${ride.name}: ${ride.waitTime} minutes wait
// status: ${ride.status}
// ********************************************`);
      }
      res.json(rides);
    }, console.error);
//     Epcot.GetWaitTimes().then(function (rides) {
//       // print each wait time
//       for (var i = 0, ride; ride = rides[i++];) {
// //         console.log(`${ride.name}: ${ride.waitTime} minutes wait
// // status: ${ride.status}
// // ********************************************`);
//       }
//     }, console.error);
//     HollywoodStudios.GetWaitTimes().then(function (rides) {
//       // print each wait time
//       for (var i = 0, ride; ride = rides[i++];) {
// //         console.log(`${ride.name}: ${ride.waitTime} minutes wait
// // status: ${ride.status}
// // ********************************************`);
//       }
//     }, console.error);
//     AnimalKingdom.GetWaitTimes().then(function (rides) {
//       // print each wait time
//       for (var i = 0, ride; ride = rides[i++];) {
// //         console.log(`${ride.name}: ${ride.waitTime} minutes wait
// // status: ${ride.status}
// // ********************************************`);
//       }
//     }, console.error);
//   },
//   // Find waitTimes for Magic Kingdom, display name, wait time, and status, send them back to the user
//   findMagicKingdom: function (req, res) {
//     MagicKingdom.GetWaitTimes().then(function (rides) {
//       // print each wait time
//       for (var i = 0, ride; ride = rides[i++];) {
// //         console.log(`${ride.name}: ${ride.waitTime} minutes wait
// // status: ${ride.status}
// // ********************************************`);
//       }
//     }, console.error);
//   },
//   // Find waitTimes for Epcot, display name, wait time, and status, send them back to the user
//   findEpcot: function (req, res) {
//     Epcot.GetWaitTimes().then(function (rides) {
//       // print each wait time
//       for (var i = 0, ride; ride = rides[i++];) {
// //         console.log(`${ride.name}: ${ride.waitTime} minutes wait
// // status: ${ride.status}
// // ********************************************`);
//       }
//     }, console.error);
//   },
//   // Find waitTimes for Hollywood Studios, display name, wait time, and status, send them back to the user
//   findHollywoodStudios: function (req, res) {
//     Epcot.GetWaitTimes().then(function (rides) {
//       // print each wait time
//       for (var i = 0, ride; ride = rides[i++];) {
// //         console.log(`${ride.name}: ${ride.waitTime} minutes wait
// // status: ${ride.status}
// // ********************************************`);
//       }
//     }, console.error);
//   },
//   // Find waitTimes for Animal Kingdom, display name, wait time, and status, send them back to the user
//   findAnimalKingdom: function (req, res) {
//     Epcot.GetWaitTimes().then(function (rides) {
//       // print each wait time
//       for (var i = 0, ride; ride = rides[i++];) {
// //         console.log(`${ride.name}: ${ride.waitTime} minutes wait
// // status: ${ride.status}
// // ********************************************`);
//       }
//     }, console.error);
  }
};
