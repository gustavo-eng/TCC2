const db = require('../config/db');
const Athlet = db.Athlet;


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

    const { cpf, birth, phone, name, email, password } = req.body;

    try {

        // Gustavo Alexandre Dias
        const newAthlet = {
            cpf,
            birth,
            phone,
            name,
            email,
            password
        };

        await Athlet.create(newAthlet).then(athlet => {
            return res.status(200).json(success(athlet, "payload", "Athlet created successfully"));
        }).catch(err => {
            return res.status(404).json(fail("Athlet not created. Error -> " + err));

        })


    } catch (err) {
        return res.status(500).json(fail("Error server"));
    }


};

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

/*
const multer = require('multer');
const path = require('path');

// Configurar armazenamento do multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Use __dirname para criar um caminho absoluto para a pasta 'uploads'
        cb(null, path.join(__dirname, '..', 'uploads'));
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