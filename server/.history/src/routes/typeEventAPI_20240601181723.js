const express = require('express');
const router = express.Router();
const typeEventController = require('../controllers/typeEventController');

//Validators
const validate = require('../middleware/validate');

//Retorna todos os tipos de eventos
router.get("/", typeEventController.findAll);
//Cria um novo evento
router.post("/", typeEventController.create);

router.delete("/:idTypeEvent", typeEventController.delete);

module.exports = router;