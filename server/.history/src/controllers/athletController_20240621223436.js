const db = require('../config/db');
const Athlet = db.Athlet;
const Requests = db.Requests;
const statusCode = require('../utils/statusCode.json');
const { success, fail, message } = require('../helpers/response');
const { where } = require('sequelize');

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
            password,
            neighborhood,
            street,
            number,
            city,
            idGym
        };

        await Athlet.create(newAthlet).then(athlet => {

            let idAthlete = athlet.get({ plain: true }).idAthlete;
            let data = new Date().toLocaleDateString('pt-br')
            Requests.create({ aproved: false, data, idAthlete: idAthlete }).then(_ => {
                return res.status(statusCode.OK).json(success(athlet, "payload", "Solicitacao enviada com successo"));
            }).catch(async (err) => {
                await athlet.destroy({ where: { idAthlete } })
                res.status(statusCode.BAD_REQUEST).json(fail("Error ao enviar solicitacao . Error -> " + err));
            });

        }).catch(err => {
            return res.status(statusCode.BAD_REQUEST).json(fail("Athlet not created. Error -> " + err));
        });

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

        const athlet = Athlet.findByPk(idAthlete);
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

        await athlet.save().then(athlet => {

            return res.status(statusCode.OK).json(success(athlet, "payload", "Athlet registered ! "));

        }).catch(err => {

            return res.status(statusCode.BAD_REQUEST).json(fail("Fail update athlet. Erro => " + err));

        });

    } catch (err) {

        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Error server. Err -->" + err));

    }
}



