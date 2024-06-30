var express = require('express');
var router = express.Router();
const registration = require('../controllers/registrationController');

//Middlewares
const { controllAccess } = require('../middleware/Auth');
const upload = require('../middleware/upload');
const validate = require('../middleware/validate');
const paymentSchema = require('../schemas/paymentSchema');



router.get("/", registration.findAll);

router.post("/", controllAccess, upload.single('file'), validate(paymentSchema), registration.create);

//Esse rota retorna todos os pagamentos de cada aluno
router.get("/myPayments/:idAthlet", registration.findMyPayments)

//Retorna todos os pagamentos daquela academia
router.get("/gym/:idGym", registration.findAllPaymentsOfGym);

//Retorna todos os pagamentos daquela academia de acordo com o evento escolhido
router.get("/gym/event/:idEvent", registration.findAllPaymentsOfEventAndGym);

// Rota para aprovar pagamento
router.post("/aprove/:idPayment", registration.aprovePayment);

//router.put("/reprove/:idPayment", payment.reprovePayment);

//Rota direcionada para colocar comentarios de pagamentos reprovados
router.put("/reprove/:idPayment", registration.reprovePayment);


//Delete payment
router.delete("/:idPayment", registration.delete)

router.put("/:idPayment", upload.single('file'), registration.update);

module.exports = router;
