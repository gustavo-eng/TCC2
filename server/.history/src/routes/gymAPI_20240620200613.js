const express = require('express');
const router = express.Router();
const gym = require("../controllers/gymController");

router.get("/", gym.findAll);


router.post("/", gym.create);


router.get("/address/:id", gym.getAdrress);


router.delete("/:id", gym.delete);


router.put("/:idGym", gym.update);


module.exports = router;









