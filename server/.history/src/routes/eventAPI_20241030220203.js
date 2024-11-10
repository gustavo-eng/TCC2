const express = require("express");
const router = express.Router();
const events = require("../controllers/eventController");


const validate = require('../middleware/validate');
const schemaEvent = require('../schemas/eventSchema');
const controllAcessFPRJ = require('../middleware/permission')

//Retrieve all Events
router.get("/", events.findAll);

//Get Specific Event
router.get("/:idEvent", events.findOne);

//Create event
//router.post("/", validate(eventSchema), events.create);
router.post("/",  controllAcessFPRJ.permissionFRPj ,validate(schemaEvent), events.create);

//Delete event
router.delete("/:idEvent", controllAcessFPRJ.permissionFRPj ,events.delete);

//Update event
router.put("/:idEvent", controllAcessFPRJ.permissionFRPj ,validate(schemaEvent), events.update);


router.get("/typeEvent/:idTypeEvent", controllAcessFPRJ.permissionFRPj ,events.findByTypeEvent);


module.exports = router;
