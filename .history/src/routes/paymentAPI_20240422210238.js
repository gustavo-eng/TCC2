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
    //console.log("path --> ")
    //let name = `${req.user}_${req.userId}_${file.originalname}`
    //let pathImage = uploadDir + name;
    //console.log('pathImage ')
    //console.log(pathImage)
    //console.log(uploadDir)
    //console.log(path.join(__dirname, '..', 'uploads'))
    //console.log("req.file em post")
    //console.warn(req.file)

    let name = `${req.user}_${req.userId}_${req.file.originalname}`;

    // Combine o diretório de upload com o nome do arquivo usando path.join()
    let filePath = path.join(uploadDir, name);
    console.log("Caminho completo do arquivo: ", filePath)

    const { aproved, pathVoucher, yearCategory, weight, description } = req.body;
    paymentDAO.save(aproved, pathVoucher, yearCategory, weight, description).then(payment => {
        res.status(200).json(success(payment, "payload", ""));
    }).catch(err => {
        res.status(500).json(fail("erro ao salvar pagamento"));
    })
});



module.exports = router;
