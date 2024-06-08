const db = require('../config/db');
const Requests = db.Requests;

const { success, fail } = require('../helpers/response');

exports.findAll = async (req, res) => {

    try {

        await Requests.findAll().then(requests => {

            return res.status(200).json(success(requests, "payload", "Requests listed successfully "));

        }).catch(err => {
            return res.status(404).json(fail("Request not found"));
        });

    } catch (err) {
        res.status(500).json(fail("Server error. ERROR --> " + err));
    }
}


exports.create = async (req, res) => {
    try {

        Requests.create({ aproved: false }).then(request => {
            console.log("Requisicao criada com successo ")
            res.status(201).json(success(request, "payload", "Request created successfully"))
        }).catch(err => {
            res.status(400).json(fail("Error ao criar request. Error -> " + err));
        });

    } catch (err) {
        res.status(500).json(fail("Error server"));
    }
}


//Deletar pela chave estranjeira do aluno
exports.delete = async (req, res) => {
    try {

        const { idAthlete } = req.params;

        const request = await Requests.findAll({ where: { idAthlete: idAthlete } });
        if (!request) return res.status(404).json(fail("Request not found"));

        await Request.destroy({ where: { idAthlete: idAthlete } }).then(_ => {
            res.status(200).json(success("Request deleted successfully"));
        }).then(err => {
            res.status(400).json(fail("Error deleted request. ERROR -> ", err))
        });

    } catch (err) {
        res.status(500).json(fail("Error server"));
    }
}

//Aceitar pelo id do atleta
exports.accept = async (req, res) => {

    try {

        const { idAthlete } = req.params;

    } catch (err) {




    }
}


/*
      idRequest: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: true,
        },
        aproved: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });


*/

