const db = require('../config/db');
const Payment = db.Payment;

const { success, message } = require('../helpers/response');


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