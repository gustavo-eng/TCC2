const express = require("express");
const router = express.Router();
const events = require("../controllers/eventController");
const validate = require('../middleware/validate');
const schemaEvent = require('../schemas/eventSchema');

//Retrieve all Events
router.get("/", events.findAll);

//Get Specific Event
router.get("/:idEvent", events.findOne);

//Create event
//router.post("/", validate(eventSchema), events.create);
router.post("/",  validate(schemaEvent), events.create);

//Delete event
router.delete("/:idEvent", events.delete);

//Update event
router.put("/:idEvent", validate(schemaEvent), events.update);


router.get("/typeEvent/:idTypeEvent", events.findByTypeEvent);


module.exports = router;
