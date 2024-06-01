const express = require('express');
const router = express.Router();
const typeEventController = require('../controllers/typeEventController');


router.get("/", typeEventController.findAll);



module.exports = router;