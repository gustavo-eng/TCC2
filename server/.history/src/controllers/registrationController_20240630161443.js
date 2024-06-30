const db = require('../config/db');
const statusCode = require('../utils/statusCode.json');
const { hasDuplicateRegistration } = require('../helpers/hasDuplicateData');

//Models
const Registration = db.Registration;
const Athlet = db.Athlet;

const { success, message, fail } = require('../helpers/response');

exports.findAll = async (req, res) => {

    try {
        const registrations = await Registration.findAll();
        return res.status(statusCode.OK).json(success(registrations, "payload", "Payment list successfully"));
    } catch (err) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Server error. Error: " + err.message));
    }

};


exports.create = async (req, res) => {

    try {

        // Verify duplicate information.

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
            idAthlete,
            idEvent,
            idCategory,

        } = req.body;


        if (await hasDuplicateRegistration({ athletId: idAthlete, categoryId: idCategory, eventId: idEvent })) {
            return res.status(statusCode.BAD_REQUEST).json(fail("Payment already registered"));
        }

        const newPayment = {
            voucherPath: file.path, // temporario
            idAthlete,
            idEvent,
            idCategory,
            aproved: false, //Apenas FPRJ pode alterar
            description: req.body.description ? req.body.description : "" //Apenas FPRJ pode alterar
        };

        await Registration.create(newPayment).then(payment => {
            return res.status(statusCode.OK).json(success(payment, "payload", "Address registered successfully"));
        }).catch(err => {
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Failt to create payment. ERROR -->" + err));
        });

    } catch (err) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Error server. Error --> " + err))
    };

};

exports.update = async (req, res) => {

    try {
        const { idPayment } = req.params;
        const { idAthlete, idEvent, idCategory } = req.body;
        const file = req.file;

        const registration = await Registration.findByPk(idPayment);
        if (!registration) {
            return res.status(statusCode.NOT_FOUND).json(fail("Registration not found"));
        }


        const newRegistration = { idAthlete, idEvent, voucherPath: file.path, };
        if (idCategory) {
            newRegistration.idCategory = idCategory;
        };


        await registration.update(newRegistration);

        // Retornar a resposta de sucesso
        return res.status(statusCode.OK).json(success(registration, "payload", "Payment updated successfully"));

    } catch (err) {
        // Retornar a resposta de erro
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Server error. " + err.message));
    }
};





// === Rota para o atleta
exports.findMyPayments = async (req, res) => {

    try {

        const { idAthlete } = req.params;

        const registrations = await Registration.findAll({
            where: { idAthlete },
            include: ['Event'],
        });

        if (!registrations) return res.status(statusCode.NOT_FOUND).fail("Payment not found")

        return res.status(statusCode.OK).json(success(registrations, "payload"))

    } catch (err) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Server error --> " + err));
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

        const athletIds = athlets.map(athlet => athlet.idAthlete);

        const registrations = await Registration.findAll({
            where: { idAthlete: athletIds },
            include: ['Event', 'Athlet'],
        });

        if (!registrations || registrations.length === 0) {
            return res.status(404).json(fail("No payments found for the given event and gym."));
        }

        return res.status(statusCode.OK).json(success(registrations, "payload", "Payments listed successfully"));

    } catch (err) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Server error -> " + err));
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

        //console.log(athlets)
        const athletIds = athlets.map(athlet => athlet.idAthlete);
        const payments = await Registration.findAll({
            where: { idEvent: idEvent, idAthlete: athletIds },
            include: ['Event', 'Athlet'],
        });


        if (!payments || payments.length === 0) {
            return res.status(404).json(fail("No payments found for the given event and gym."));
        };

        return res.status(statusCode.OK).json(success(payments, "payload", "Payment listed successfully"));

    } catch (err) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Server error -> " + err));
    }

}

exports.aprovePayment = async (req, res) => {

    try {

        const { idPayment } = req.params;

        const registration = await Registration.findOne({ where: { idPayment: idPayment } });

        if (!registration) return res.status(404).json(fail("Payment not found"));

        registration.update({ aproved: true });

        return res.status(statusCode.OK).json(success(registration, "payload", "Payment aproved successfully"));

    } catch (err) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Error server. Error -> " + err));
    }

}

//
exports.reprovePayment = async (req, res) => {

    try {

        const { idPayment } = req.params;

        const { description } = req.body;

        const registration = await Registration.findOne({ where: { idPayment: idPayment } });

        if (!registration) return res.status(404).json(fail("Payment not found"));

        registration.update({ aproved: false, description: description || "" });

        return res.status(statusCode.OK).json(success(registration, "payload", "Payment reproved successfully"));


    } catch (err) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Error server. Error -> " + err));
    }
}

//Funcao temporaria
exports.setDescription = async (req, res) => {

    try {
        const { idPayment } = req.params;

        const { description } = req.body;

        const registration = await Registration.findOne({ where: { idPayment: idPayment } });

        if (!registration) return res.status(404).json(fail("Payment not found"));

        await registration.update({ description: description });

        return res.status(statusCode.OK).json(success(registration, "payload", "Payment aproved successfully"));

    } catch (err) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Error server. Error -> " + err));
    }

}



exports.delete = async (req, res) => {
    try {
        const { idPayment } = req.params;
        const registration = await Registration.findByPk(idPayment);
        if (!registration) {
            return res.status(statusCode.NOT_FOUND).json(fail("Registration not found"));
        };
        await registration.destroy();
        return res.status(statusCode.OK).json(message("Registration destroyed successfully"));
    } catch (err) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Server error. " + err.message));
    }
};






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