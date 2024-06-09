const express = require("express");
const router = express.Router();

const controllerRequest = require('../controllers/requestsController');

// Para professores... FPRJ
// Tudo que se refere a manipulacao de request

//Retrieve all requests
router.get('/', controllerRequest.findAll);

//Make request
router.post('/', controllerRequest.create);

//Accpet request
router.put('/:idAthlete', controllerRequest.accept);


// Exclude athlete
//router.delete('/', controllerRequest.delete);


module.exports = router;