const express = require("express");
const router = express.Router();

const controllerRequest = require('../controllers/requestsController');

//Retrieve all requests
router.get('/', controllerRequest.findAll);

module.exports = router;