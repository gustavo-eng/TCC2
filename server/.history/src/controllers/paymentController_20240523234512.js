const db = require('../config/db');
const Payment = db.Payment;

const { success, message } = require('../helpers/response');

exports.findAll = async (req, res) => {
    try {

        await Payment.findAll().then(payment => {
            return res.status(200).json(success(payment, "payload", "Payment list successfully"));
        }).catch(err => {
            return res.status(404).json(fail("No Payment found. Error -> " + err));
        })

    } catch (err) {
        return status(500).json(fail("Error server. Error: " + err));

    }
}

/*
const multer = require('multer');
const path = require('path');

// Configurar armazenamento do multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Use __dirname para criar um caminho absoluto para a pasta 'uploads'
        cb(null, path.join(__dirname, '..', 'uploads'));
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