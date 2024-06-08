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

        const { idAthlet } = req.params;

        const request = Requests.findAll({ where: {} })

    } catch (err) {
        res.status(500).json(fail("Error server"));
    }
}

//Aceitar pelo id do atleta
exports.accept = async (req, res) => {

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

