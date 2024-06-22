const db = require('../config/db');
const Athlet = db.Athlet;
const Requests = db.Requests;
const statusCode = require('../utils/statusCode.json');
const { success, fail, message } = require('../helpers/response');

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

            Requests.create({ aproved: false, data: new Date(), idAthlete: idAthlete }).then(_ => {
                return res.status(statusCode.OK).json(success(athlet, "payload", "Solicitacao enviada com successo"));
            }).catch(err => {
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











