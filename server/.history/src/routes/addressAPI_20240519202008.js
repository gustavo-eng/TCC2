const express = require("express");
const router = express.Router();
const address = require('../controllers/addressController');

//Retrievel all Adress
router.get("/", address.findAll);




//Get specific address from gym
//router.get("/gym/:id")

//todo adicionar a rota para listar incluindo os responsaveis pelo relacionamento

//todo deixar essa rota por este modelo msmo. Ex address/gym/id



module.exports = router;













