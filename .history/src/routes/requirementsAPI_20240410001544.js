const express = require("express");
const router = express.Router();
const requirementsDAO = require('../model/requirements');

let { fail, success } = require('../helpers/response');

router.get('/', (req, res) => {
    res.send(`<h1>Ola mundo para solicitacoes</h1>`);
});



module.exports = router;