var express = require('express');
var router = express.Router();

const voucherController = require("../controllers/voucherController");

router.get("/:idAthlete/:voucherPath", voucherController.getImage);


module.exports = router;
