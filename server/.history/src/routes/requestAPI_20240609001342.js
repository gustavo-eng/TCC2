const express = require("express");
const router = express.Router();

const controllerRequest = require('../controllers/requestsController');

// Para professores... FPRJ
// Tudo que se refere a manipulacao de request

//Retrieve all requests
router.get('/', controllerRequest.findAll);

router.post('/', controllerRequest.create)

module.exports = router;