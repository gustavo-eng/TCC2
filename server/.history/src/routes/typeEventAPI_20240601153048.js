const express = require('express');
const router = express.Router();
const typeEventController = require('../controllers/typeEventController');

//Retorna todos os tipos de eventos
router.get("/", typeEventController.findAll);



module.exports = router;