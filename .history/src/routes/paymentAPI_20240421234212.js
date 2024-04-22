var express = require('express');
var router = express.Router();
const paymentDAO = require('../model/payment')

const { success, fail } = require('../helpers/response');

router.get("/", (req, res) => {
    paymentDAO.list().then(payment => {
        res.status(200).json(success(payment, "payload", "successo ao listar acadamia"))
    }).catch(err => {
        res.status(500).json(fail("Erro ao listar pagamentos"));
    })
});

module.exports = router;

