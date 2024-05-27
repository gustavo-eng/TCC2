const db = require('../config/db');
const Payment = db.Payment;

const { success, message, fail } = require('../helpers/response');

exports.findAll = async (req, res) => {

    try {
        const payments = await Payment.findAll();
        return res.status(200).json(success(payments, "payload", "Payment list successfully"));
    } catch (err) {
        if (err instanceof SomeSpecificError) { // Especifique o tipo de erro relevante, se aplicável
            return res.status(404).json(fail("No Payment found. Error -> " + err.message));
        }
        return res.status(500).json(fail("Server error. Error: " + err.message));
    }

};



exports.create = async (req, res) => {
    try {

        const {
            //voucherPath,
            idAthlet,
            idEvent,
            idCategory,
        } = req.body;

        const newPayment = {
            voucherPath: req.user, // temporario
            idAthlet,
            idEvent,
            idCategory,
            aproved: false, //Apenas FPRJ pode alterar
            description: '' //Apenas FPRJ pode alterar
        };

        await Payment.create(newPayment).then(payment => {
            return res.status(200).json(success(payment, "payload", "Address registered successfully"));
        }).catch(err => {
            return res.status(500).json(fail("Failt to create payment"));
        });

    } catch (err) {
        return res.status(200).json(fail("Error server. Error --> " + err))
    }
}
//todo create precisa especificar  o evento, o aluno e a categoria como chave estrangeira


/*
const multer = require('multer');
const path = require('path');

// Configurar armazenamento do multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Use __dirname para criar um ', 'uploacaminho absoluto para a pasta 'uploads'
        cb(null, path.join(__dirname, '..ds'));
    },
    filename: function (req, file, cb) {
        const userName = req.user.name; // Presumindo que o nome do usuário está disponível em req.user
        const ext = path.extname(file.originalname);
        cb(null, `${userName}-${Date.now()}${ext}`);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;

*/