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

        Requests.create({})

    } catch (error) {

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

