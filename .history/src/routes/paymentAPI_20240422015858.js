var express = require('express');
var router = express.Router();
const path = require('path');
const paymentDAO = require('../model/payment');
const uploadPayment = require('../middleware/uploadPayment');
const { success, fail } = require('../helpers/response');


router.get("/", (req, res) => {
    console.log('req.userPermission')
    console.log(req.userPermission)
    paymentDAO.list().then(payment => {
        res.status(200).json(success(payment, "payload", "successo ao listar acadamia"))
    }).catch(err => {
        res.status(500).json(fail("Erro ao listar pagamentos"));
    })
});


router.post("/", uploadPayment.single("file"), (req, res) => {
    const { aproved, pathVoucher, yearCategory, weight, description } = req.body;
    console.log(req.userPermission); // Dados do formulário
    console.log(req.file); // Informações sobre o arquivo enviado
    paymentDAO.save(aproved, pathVoucher, yearCategory, weight, description).then(payment => {
        res.status(200).json(success(payment, "payload", ""))
    }).catch(err => {
        res.status(500).json(fail("erro ao salvar pagamento"))
    })
});



module.exports = router;


