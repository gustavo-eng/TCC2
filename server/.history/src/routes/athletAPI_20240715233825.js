const express = require("express");
const router = express.Router();

const athlets = require("../controllers/athletController");
const { controllAccess } = require("../middleware/Auth");
const permission = require("../middleware/permission");


router.get("/", controllAccess, permission.permissionFRPj, athlets.findAll);

router.post("/", athlets.create);

router.delete("/:idAthlete", athlets.delete);

router.put("/:idAthlete", athlets.update);

module.exports = router;
