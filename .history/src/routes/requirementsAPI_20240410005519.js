const express = require("express");
const router = express.Router();
const requirementsDAO = require('../model/requirements');

let { fail, success } = require('../helpers/response');

router.get('/', (req, res) => {
    requirementsDAO.list().then(requirements => {

    });
});





module.exports = router;

