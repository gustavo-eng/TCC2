const express = require("express");
const router = express.Router();

const athlets = require("../controllers/athletController");

const { controllAccess } = require('../middleware/Auth');

//Retrieve all athlets
router.get("/", controllAccess, athlets.findAll);

router.post("/", athlets.create);

router.delete("/:idAthlete", athlets.delete);

module.exports = router;
