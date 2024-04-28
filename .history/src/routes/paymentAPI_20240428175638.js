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




router.post("/", uploadPayment.single("file"), (req, res) => {
    console.log('req.userId dentro da rota post de pagamento')
    console.log(req.userId)
    let nameFile = `${req.user}_${req.userId}_${req.file.originalname}`;

    const { aproved, yearCategory, weight, description } = req.body;
    paymentDAO.save(aproved, nameFile, yearCategory, weight, description).then(payment => {
        res.status(200).json(success(payment, "payload", ""));
    }).catch(err => {
        res.status(500).json(fail("erro ao salvar pagamento"));
    });

});


router.delete("/:id", Auth.controllAccess, (req, res) => {

    const { id } = req.params;
    paymentDAO.delete(id).then((payment) => {
        res.status(200).json(success(payment, "payload", "pagamento deletado com successo"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao deletar  pagamento. Erro ", err));
    });

});


router.put('/:id', Auth.controllAccess, (req, res) => {
    const { id } = req.params;
    const { aproved, yearCategory, weight, description } = req.body;

    let obj = {};
    if (aproved) obj.aproved = aproved;
    if (yearCategory) obj.yearCategory = yearCategory;
    if (weight) obj.weight = weight;
    if (description) obj.description = description;

    paymentDAO.update(id, obj).then(payment => {
        res.status(201).json(success(payment, "payload", "successo ao atualizar pagamento"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao deletar pagamento. ERRO = " + err));
    });

});

//todo fazer rota para listagem de pagamento
//todo voltado apenas para usuarios gym

module.exports = router;
