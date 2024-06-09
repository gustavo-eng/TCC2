var express = require('express');
var router = express.Router();
const payment = require('../controllers/paymentController');

//Middlewares
const { controllAccess } = require('../middleware/Auth');
const upload = require('../middleware/upload');
const validate = require('../middleware/validate');
const paymentSchema = require('../schemas/paymentSchema');



router.get("/", payment.findAll);

router.post("/", controllAccess, upload.single('file'), validate(paymentSchema), payment.create);

//Esse rota retorna todos os pagamentos de cada aluno
router.get("/myPayments/:idAthlet", payment.findMyPayments)

//Retorna todos os pagamentos daquela academia
router.get("/gym/:idGym", payment.findAllPaymentsOfGym);

//Retorna todos os pagamentos daquela academia de acordo com o evento escolhido
router.get("/gym/event/:idEvent", payment.findAllPaymentsOfEventAndGym);

// Rota para aprovar pagamento
router.post("/aprove/:idPayment", validate(paymentSchema), payment.aprovePayment);

//router.put("/reprove/:idPayment", payment.reprovePayment);

//Rota direcionada para colocar comentarios de pagamentos reprovados
router.put("/reprove/:idPayment", validate(paymentSchema), payment.reprovePayment);


module.exports = router;
