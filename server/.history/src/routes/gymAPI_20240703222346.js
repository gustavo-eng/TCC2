const express = require('express');
const router = express.Router();
const gym = require("../controllers/gymController");

//Middlewares
const validate = require('../middleware/validate');
const gymSchema = require('../schemas/gymSchema');

router.get("/", gym.findAll);

router.post("/", validate(gymSchema), gym.create);

router.delete("/:id", gym.delete);

router.put("/:idGym", gym.update);


module.exports = router;









