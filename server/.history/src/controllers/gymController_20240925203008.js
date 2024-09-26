const { where } = require('sequelize');
const db = require('../config/db');
const { hasDuplicateGym } = require('../helpers/hasDuplicateData');
const { success, fail } = require('../helpers/response');
const Gym = db.Gym;
const Athlet = db.Athlet;

const Payment = db.Payment;
const statusCode = require('../utils/statusCode.json');
const bcrypt = require('bcrypt');


exports.findAll = async (req, res) => {
    try {
        const gyms = await Gym.findAll();
        return res.status(200).json(success(gyms, "payload", "Gym listed successfully"));
    } catch (err) {
        return res.status(500).json(fail("No gym found. Error -> " + err.message));
    }
}


exports.findAllEthlets = async (req, res) => {
    try {
        const {idGym} = req.query;
        const athlets = await Athlet.findAll({where: {idGym: idGym}});
        return res.status(statusCode.OK).json(success(athlets, "payload", "Athlet listed"))
     } catch(err) {
        res.status(statusCode.BAD_REQUEST).json(fail("Error -> " + err));
    };
}

exports.create = async (req, res) => {

    try {

        const {
            cnpj,
            sensei,
            name,
            phone,
            password,
            email,
            neighborhood,
            street,
            number,
            city
        } = req.body;

        const newGym = {
            cnpj,
            sensei,
            name,
            phone,
            password: bcrypt.hashSync(password, 10),
            email,
            neighborhood,
            street,
            number,
            city,
            role: "gym",
        };
        //await hasDuplicateRegistration({ athletId: idAthlete, categoryId: idCategory, eventId: idEvent })
        if (await hasDuplicateGym({ cnpj, email, name })) return res.status(statusCode.CONFLICT).json(fail("Gym already exist"));

        const gym = await Gym.create(newGym);
        return res.status(statusCode.CREATED).json(success(gym, "payload", "Gym created successfully"));

    } catch (err) {
        if (err.name === 'SequelizeValidationError') {
            return res.status(statusCode.BAD_REQUEST).json(fail("Validation Error: " + err.message));
        };
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Server Error: " + err.message));
    }
}

exports.delete = async (req, res) => {

    const { id } = req.params;

    const gym = await Gym.findByPk(id);

    if (!gym) return res.status(statusCode.NOT_FOUND).json(fail("Gym doesn`t exist"));

    await gym.destroy().then(_ => {
        return res.status(200).json(success({}, "payload", "Gym deleted successfully"));
    }).catch(err => {
        return res.status(500).json(fail("Server Error: " + err.message));
    });

}

exports.findAllPayments = async (req, res) => {

    try {

        const { idGym } = req.params;

        const athlets = await Athlet.findAll({
            attributes: ["idAthlete"],
            where: {
                idGym: idGym,
            },
        });


        if (!athlets || athlets.length < 1) return res.status(404).json(fail("Payment not found"));

        // Mapeie os IDs dos atletas em uma lista
        const athletIds = athlets.map(athlet => athlet.idAthlete);

        // Encontre os pagamentos dos atletas com os IDs mapeados
        const payments = await Payment.findAll({
            where: {
                idAthlet: athletIds,
            },
        });

        if (!payments) return res.status(404).json(fail("Payment not found"));
        // Retorne os pagamentos
        return res.status(200).json(success(payments, "payload", "Listado com sucesso"));

    } catch (err) {
        // Se houver um erro, retorne uma resposta de erro
        return res.status(500).json(fail("Server error -> " + err));
    }

}

exports.update = async (req, res) => {

    try {
        const { idGym } = req.params;

        const gym = await Gym.findByPk(idGym);
        if (!gym) return res.status(statusCode.NOT_FOUND).json(fail("Gym not found"));

        const {
            cnpj,
            sensei,
            name,
            phone,
            password,
            email,
            neighborhood,
            street,
            number,
            city
        } = req.body;

        let obj = {};
        if (cnpj) obj.cnpj = cnpj;
        if (sensei) obj.sensei = sensei;
        if (name) obj.name = name;
        if (phone) obj.phone = phone;
        if (password) obj.password = password;
        if (email) obj.email = email;
        if (neighborhood) obj.neighborhood = neighborhood;
        if (street) obj.street = street;
        if (number) obj.number = Number(number);
        if (city) obj.city = city;
        // Atualize o pagamento

        //Neste caso, mesmo se o usuario nao digitar nada, vai manter o objeto anterior
        if (Object.keys(obj).length != 0) Object.keys(obj).forEach(key => gym[key] = obj[key]);


        await gym.save().then(gym => {
            return res.status(statusCode.CREATED).json(success(gym, "payload", "Gym updated"));
        }).catch(err => {
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Error updating gym"));
        });

    } catch (err) {
        res.status(statusCode.BAD_REQUEST).json(fail("Error server. Error -> " + err));
    }

}


exports.findPaymentsOfEvent = async (req, res) => {

    try {

        const { idEvent } = req.params;
        const { idGym } = req.body;

        // Obtém os IDs dos atletas daquela academia
        //Obtem todos os alunos daquela academia
        const athlets = await Athlet.findAll({
            attributes: ["idAthlete"],
            where: {
                idGym: idGym,
            },
        });

        // Mapeia os IDs dos atletas em uma lista
        const athletIds = athlets.map(athlet => athlet.idAthlete);

        // Consulta os pagamentos com os IDs dos atletas e ID do evento
        const payments = await Payment.findAll({
            where: { idEvent: idEvent, idAthlet: athletIds },
            include: ['Event', 'Athlet'],
        });

        if (!payments || payments.length === 0) {
            return res.status(404).json(fail("No payments found for the given event and gym."));
        }

        return res.status(200).json(success(payments, "payload", "Payments found successfully"));

    } catch (err) {
        return res.status(500).json(fail("Server error -> " + err));
    }

};


