
const express = require("express");
const router = express.Router();
const fprj = require('../controllers/fprjController');
const { message } = require("../helpers/response");

//Validators
const validate = require('../middleware/validate');
const fprjSchema = require('../schemas/fprjSchema');

router.get("/", fprj.findAll);

router.post("/", validate(fprjSchema), fprj.create);

router.delete("/:idFprj", fprj.delete);





module.exports = router;