const db = require('../config/db');
const Athlet = db.Athlet;
const Payment = db.Payment;
const Requests = db.Requests;

//Response
const { success, fail, message } = require('../helpers/response');

exports.findAll = async (req, res) => {

    try {
        await Athlet.findAll().then(athlet => {
            return res.status(200).json(success(athlet, "payload", "Athlet listed successfully"));
        }).catch(err => {
            return res.status(404).json(fail("Athlets not found"));
        })
    } catch (err) {
        return res.status(500).json(fail("Error server"));
    }

}

exports.create = async (req, res) => {

    const { cpf, birth, phone, name, email, password, rg, idGym } = req.body;

    try {

        // Gustavo Alexandre Dias
        const newAthlet = {
            rg,
            cpf,
            birth,
            phone,
            name,
            email,
            password,
            idGym
        };

        await Athlet.create(newAthlet).then(athlet => {

            let idAthlete = athlet.get({ plain: true }).idAthlete;

            Requests.create({ aproved: false, idAthlete: idAthlete, idGym: idGym }).then(request => {
                return res.status(200).json(success(athlet, "payload", "Solicitacao enviada com successo"));
            }).catch(err => {
                res.status(400).json(fail("Error ao enviar solicitacao . Error -> " + err));
            });


        }).catch(err => {
            return res.status(404).json(fail("Athlet not created. Error -> " + err));

        });

    } catch (err) {
        return res.status(500).json(fail("Error server"));
    }

};


exports.delete = async (req, res) => {

    try {

        const { idAthlete } = req.params;

        const athlet = await Athlet.findByPk(idAthlete);

        if (!athlet) return res.status(404).json(fail("Ahlet not found"));

        await athlet.destroy({ where: { idAthlete: idAthlete } });

        return res.status(200).json(message("Athlet deleted !"));

    } catch (err) {
        return res.status(500).json(fail(" Error server. Error -> " + err));
    }

}











