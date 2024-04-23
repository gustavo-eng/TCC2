var express = require('express');
var router = express.Router();
const path = require('path');
const paymentDAO = require('../model/payment');
const uploadPayment = require('../middleware/uploadPayment');

const Auth = require('../middleware/Auth');
const permission = require('../middleware/permission');

const { success, fail } = require('../helpers/response');

const uploadDir = path.join(__dirname, '..', 'uploads');

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

    let name = `${req.user}_${req.userId}_${req.file.originalname}`;
    let filePath = path.join(uploadDir, name);


    const { aproved, yearCategory, weight, description } = req.body;
    paymentDAO.save(aproved, filePath, yearCategory, weight, description).then(payment => {
        res.status(200).json(success(payment, "payload", ""));
    }).catch(err => {
        res.status(500).json(fail("erro ao salvar pagamento"));
    })
});



module.exports = router;
