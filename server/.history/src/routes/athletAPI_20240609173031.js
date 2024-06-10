const express = require("express");
const router = express.Router();

const athlets = require("../controllers/athletController");

//RBAC
const { controllAccess } = require('../middleware/Auth');
const { bothEntitiesPermission, permissionFRPj, permissionGym } = require('../middleware/permission');

//Retrieve all athlets
router.get("/", controllAccess, athlets.findAll);

router.post("/", athlets.create);

router.delete("/:idAthlete", athlets.delete);

module.exports = router;
