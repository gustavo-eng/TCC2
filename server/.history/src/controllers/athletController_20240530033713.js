const db = require('../config/db');
const Athlet = db.Athlet;
const Payment = db.Payment;

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
            return res.status(200).json(success(athlet, "payload", "Athlet created successfully"));
        }).catch(err => {
            return res.status(404).json(fail("Athlet not created. Error -> " + err));

        });

    } catch (err) {
        return res.status(500).json(fail("Error server"));
    }

};


exports.findMyPayments = async (req, res) => {

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





/*
 const Athlete = sequelize.define("Athlete", {
        idAthlete: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        birth: {
            type: DataTypes.DATEONLY,
            allowNull: true,

        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'athlet',
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });
*/









