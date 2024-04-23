var express = require('express');
var router = express.Router();
const path = require('path');
const paymentDAO = require('../model/payment');
const uploadPayment = require('../middleware/uploadPayment');

const Auth = require('../middleware/Auth');
const permission = require('../middleware/permission');

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
//cb(null, `${req.user}_${req.userId}_${file.originalname}`);
router.post("/", Auth.controllAccess, permission.permissionFRPj, uploadPayment.single("file"), (req, res) => {
    console.log("path --> ")
    console.log(path.join(__dirname, '..', 'uploads'))
    console.log("req.file em post")
    console.warn(req.file)
    const { aproved, pathVoucher, yearCategory, weight, description } = req.body;
    paymentDAO.save(aproved, pathVoucher, yearCategory, weight, description).then(payment => {
        res.status(200).json(success(payment, "payload", ""));
    }).catch(err => {
        res.status(500).json(fail("erro ao salvar pagamento"));
    })
});



module.exports = router;
