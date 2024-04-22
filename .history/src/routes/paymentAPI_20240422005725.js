var express = require('express');
var router = express.Router();
const path = require('path');
const paymentDAO = require('../model/payment');

const { success, fail } = require('../helpers/response');

router.get("/", (req, res) => {
    const uploadDir = path.join(__dirname, '..', 'uploads');
    const testDir = path.join(uploadDir, 'test');
    console.log(' uploadDir  -> ' + uploadDir);
    console.log('testDir ', testDir)
    paymentDAO.list().then(payment => {
        res.status(200).json(success(payment, "payload", "successo ao listar acadamia"))
    }).catch(err => {
        res.status(500).json(fail("Erro ao listar pagamentos"));
    })
});


router.post("/", (req, res) => {

});



module.exports = router;



