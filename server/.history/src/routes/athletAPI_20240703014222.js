const express = require("express");
const router = express.Router();

const athlets = require("../controllers/athletController");


//Retrieve all athlets
//router.get("/", controllAccess, permissionFRPj, athlets.findAll);
router.get("/", athlets.findAll);

router.post("/", athlets.create);

router.delete("/:idAthlete", athlets.delete);

router.put("/:idAthlete", athlets.update);

module.exports = router;