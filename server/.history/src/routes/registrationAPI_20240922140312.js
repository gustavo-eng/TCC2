var express = require('express');
var router = express.Router();
const registration = require('../controllers/registrationController');

//Middlewares
const { controllAccess } = require('../middleware/Auth');
const upload = require('../middleware/upload');
const validate = require('../middleware/validate');
const registrationSchema = require('../schemas/registrationSchema');



router.get("/", registration.findAll);

router.post("/", controllAccess, upload.single('file'), validate(registrationSchema), registration.create);

//Esse rota retorna todos os pagamentos de cada aluno
router.get("/myPayments/:idAthlete", registration.findMyPayments)

//Retorna todos os pagamentos daquela academia
router.get("/gym/:idGym", registration.findAllPaymentsOfGym);

//Retorna todos os pagamentos daquela academia de acordo com o evento escolhido
router.get("/gym/event/:idEvent/:idGym", registration.findAllPaymentsOfEventAndGym);

// Rota para aprovar pagamento
router.post("/aprove/:idPayment", registration.aprovePayment);

//router.put("/reprove/:idPayment", payment.reprovePayment);

//Rota direcionada para colocar comentarios de pagamentos reprovados
router.put("/reprove/:idPayment", validate(registrationSchema), registration.reprovePayment);

//Delete payment
router.delete("/:idPayment", controllAccess, registration.delete)

//Tela
router.put("/:idPayment", controllAccess, upload.single('file'), validate(registrationSchema), registration.update);

module.exports = router;