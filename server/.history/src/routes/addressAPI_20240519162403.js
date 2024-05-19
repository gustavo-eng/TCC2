const express = require("express");
const router = express.Router();
const address = require('../controllers/addressController');

//Retrievel all Adress
router.get("/", address.findAll);


//todo adicionar a rota create. Mas com relacionamentos


module.exports = router;










