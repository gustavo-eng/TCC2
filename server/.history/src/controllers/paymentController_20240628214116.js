const db = require('../config/db');

//Models
const Registration = db.Registration;
const Athlet = db.Athlet;

const { success, message, fail } = require('../helpers/response');


exports.findAll = async (req, res) => {

    try {
        const Registration = await Registration.findAll();
        return res.status(200).json(success(payments, "payload", "Payment list successfully"));
    } catch (err) {
        return res.status(500).json(fail("Server error. Error: " + err.message));
    }

};


exports.create = async (req, res) => {

    try {

        if (!req.file) {
            console.log("No file received or invalid file type");
            return res.status(400).send({
                message: "No file received or invalid file type",
                success: false
            });
        }


        const file = req.file;

        const {
            //voucherPath,
            idAthlet,
            idEvent,
            idCategory,

        } = req.body;

        const newRegistration = {
            //voucherPath: req.user, // temporario
            voucherPath: file.path, // temporario
            idAthlet,
            idEvent,
            idCategory,
            aproved: false, //Apenas FPRJ pode alterar
            description: '' //Apenas FPRJ pode alterar
        };

        await Registration.create(newRegistration).then(payment => {
            return res.status(200).json(success(payment, "payload", "Address registered successfully"));
        }).catch(err => {
            return res.status(500).json(fail("Failt to create payment. ERROR -->" + err));
        });

    } catch (err) {
        return res.status(200).json(fail("Error server. Error --> " + err))
    }
};


//todo create precisa especificar  o evento, o aluno e a categoria como chave estrangeira


// === Rota para o atleta
exports.findMyPayments = async (req, res) => {

    console.log('entrou na rota myPaymentss')

    try {

        const { idAthlet } = req.params;

        const payments = await Payment.findAll({
            where: { idAthlet: idAthlet },
            include: ['Event'],
        });

        if (!payments) return res.status(404).fail("Payment not found")

        return res.status(200).json(success(payments, "payload"))

    } catch (err) {
        return res.status(500).json(fail("Server error --> " + err));
    }
}

//Funcao que retorna todos os pagamentos daquela academia
exports.findAllPaymentsOfGym = async (req, res) => {
    try {

        const { idGym } = req.params;

        const athlets = await Athlet.findAll({
            attributes: ["idAthlete"],
            where: {
                idGym: idGym,
            },
        });

        // Mapeia os IDs dos atletas em uma lista
        const athletIds = athlets.map(athlet => athlet.idAthlete);

        const payments = await Payment.findAll({
            where: { idAthlet: athletIds },
            include: ['Event', 'Athlet'],
        });

        if (!payments || payments.length === 0) {
            return res.status(404).json(fail("No payments found for the given event and gym."));
        }

        return res.status(200).json(success(payments, "payload", "Payments listed successfully"));

        //  (async () => {})();

    } catch (err) {
        return res.status(500).json(fail("Server error -> " + err));
    }
}

exports.findAllPaymentsOfEventAndGym = async (req, res) => {

    try {

        const { idGym } = req.body;
        const { idEvent } = req.params;

        const athlets = await Athlet.findAll({
            attributes: ["idAthlete"],
            where: {
                idGym: idGym,
            },
        });

        const athletIds = athlets.map(athlet => athlet.idAthlete);

        const payments = await Payment.findAll({
            where: { idEvent: idEvent, idAthlet: athletIds },
            include: ['Event', 'Athlet'],
        });


        if (!payments || payments.length === 0) {
            return res.status(404).json(fail("No payments found for the given event and gym."));
        };


        return res.status(200).json(success(payments, "payload", "Payment listed successfully"));

    } catch (err) {
        return res.status(500).json(fail("Server error -> " + err));
    }

}

exports.aprovePayment = async (req, res) => {

    try {

        const { idPayment } = req.params;

        const payment = await Payment.findOne({ where: { idPayment: idPayment } });

        if (!payment) return res.status(404).json(fail("Payment not found"));

        payment.update({ aproved: true });

        return res.status(200).json(success(payment, "payload", "Payment aproved successfully"));

    } catch (err) {
        return res.status(500).json(fail("Error server. Error -> " + err));
    }

}

//
exports.reprovePayment = async (req, res) => {

    try {

        const { idPayment } = req.params;

        const { description } = req.body;

        const payment = await Payment.findOne({ where: { idPayment: idPayment } });

        if (!payment) return res.status(404).json(fail("Payment not found"));

        payment.update({ aproved: false, description: description || "" });

        return res.status(200).json(success(payment, "payload", "Payment reproved successfully"));


    } catch (err) {
        return res.status(500).json(fail("Error server. Error -> " + err));
    }
}


//Funcao temporaria
exports.setDescription = async (req, res) => {

    try {

        const { idPayment } = req.params;
        const { description } = req.body;

        const payment = await Payment.findOne({ where: { idPayment: idPayment } });

        if (!payment) return res.status(404).json(fail("Payment not found"));

        payment.update({ description: description });

        return res.status(200).json(success(payment, "payload", "Payment aproved successfully"));


    } catch (err) {
        return res.status(500).json(fail("Error server. Error -> " + err));
    }

}




/*
const jane = await User.create({ name: 'Jane' });
jane.favoriteColor = 'blue';
await jane.update({ name: 'Ada' });
// The database now has "Ada" for name, but still has the default "green" for favorite color
await jane.save();
// Now the database has "Ada" for name and "blue" for favorite color

*/

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