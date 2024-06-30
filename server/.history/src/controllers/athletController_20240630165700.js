const db = require('../config/db');
const Athlet = db.Athlet;
const Requests = db.Requests;
const statusCode = require('../utils/statusCode.json');
const bcrypt = require('bcrypt');

const { success, fail, message } = require('../helpers/response');
const { hasDuplicateAthlet } = require('../helpers/hasDuplicateData');
const { getRequestByGym } = require('./requestsController');

exports.findAll = async (req, res) => {

    try {
        await Athlet.findAll().then(athlet => {
            return res.status(statusCode.OK).json(success(athlet, "payload", "Athlet listed successfully"));
        }).catch(err => {
            return res.status(statusCode.NOT_FOUND).json(fail("Athlets not found"));
        })
    } catch (err) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Error server"));
    }

}

exports.create = async (req, res) => {
    try {
        const {
            cpf,
            rg,
            birth,
            phone,
            name,
            email,
            password,
            neighborhood,
            street,
            number,
            city,
            idGym,
        } = req.body;

        const newAthlet = {
            rg,
            cpf,
            birth,
            phone,
            name,
            email,
            password: bcrypt.hashSync(password, 10),
            neighborhood,
            street,
            number,
            city,
            idGym
        };

        // Correção: uso de await ao chamar hasDuplicateAthlet
        if (await hasDuplicateAthlet(name, email, cpf, rg)) {
            return res.status(statusCode.UNAUTHORIZED).json(fail("Athlet already exists"));
        } else {
            const athlet = await Athlet.create(newAthlet);
            const idAthlete = athlet.get({ plain: true }).idAthlete;
            const data = new Date().toLocaleDateString('pt-br');
            try {
                await Requests.create({ aproved: false, data, idAthlete: idAthlete });
                return res.status(statusCode.OK).json(message("Request sent successfully"));
            } catch (err) {
                await Athlet.destroy({ where: { idAthlete } });
                return res.status(statusCode.BAD_REQUEST).json(fail("Erro ao enviar solicitação. Erro -> " + err));
            }
        }
    } catch (err) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Error server"));
    }
};



exports.delete = async (req, res) => {

    try {

        const { idAthlete } = req.params;
        const athlet = await Athlet.findByPk(idAthlete);

        if (!athlet) return res.status(404).json(fail("Ahlet not found"));

        await athlet.destroy({ where: { idAthlete: idAthlete } });

        return res.status(statusCode.OK).json(message("Athlet deleted !"));


    } catch (err) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail(" Error server. Error -> " + err));
    }

}

exports.update = async (req, res) => {

    try {

        const { idAthlete } = req.params;

        const athlet = await Athlet.findByPk(idAthlete);
        if (!athlet) return res.status(statusCode.NOT_FOUND).json(fail("Ahlet not found"));

        const {
            cpf,
            rg,
            birth,
            phone,
            name,
            email,
            password,
            neighborhood,
            street,
            number,
            city,
        } = req.body;

        let obj = {};
        if (cpf) obj.cpf = cpf;
        if (rg) obj.rg = rg;
        if (birth) obj.birth = birth;
        if (phone) obj.phone = phone;
        if (name) obj.name = name;
        if (email) obj.email = email;
        if (password) obj.password = password;
        if (neighborhood) obj.neighborhood = neighborhood;
        if (street) obj.street = street;
        if (number) obj.number = number;
        if (city) obj.city = city;

        //Neste caso, mesmo se o usuario nao digitar nada, vai manter o objeto anterior
        if (Object.keys(obj).length != 0) Object.keys(obj).forEach(key => athlet[key] = obj[key]);

        await athlet.save().then(athlete => {

            return res.status(statusCode.OK).json(success(athlete, "payload", "Athlet registered ! "));

        }).catch(err => {

            return res.status(statusCode.BAD_REQUEST).json(fail("Fail update athlet. Erro => " + err));

        });

    } catch (err) {

        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Error server. Err -->" + err));

    }
}



