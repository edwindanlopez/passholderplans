var router = require("express").Router();
var waitTimesController = require("../controllers/waitTimes");

router.route("/").get(waitTimesController.findAll);
router.route("/magic-kingdom").get(waitTimesController.findMagicKingdom);
router.route("/epcot").get(waitTimesController.findEpcot);
router.route("/hollywood-studios").get(waitTimesController.findHollywoodStudios);
router.route("/animal-kingdom").get(waitTimesController.findAnimalKingdom);

module.exports = router;
