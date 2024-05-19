const db = require('../config/db');
const Gym = db.Gym;

const { success, fail } = require('../helpers/response');


exports.findAll = async (req, res) => {

    try {
        await Gym.findAll().then(gym => {
            return res.status(200).json(success(gym, "payload", "Gym listed successfully"));
        }).catch(err => {
            return res.status(500).json(fail("No gym found. Error -> " + err));
        })

    } catch (err) {
        return res.status(500).json(fail("Error server. Error: " + err));
    }

}


//todo apenas federacao cria...
exports.create = async (req, res) => {

    const { cnpj,
        sensei,
        name,
        phone,
        password,
        state,
        neighborhood,
        street,
        number,
        city
    } = req.body;

    const newGym = {
        cnpj: cnpj,
        sensei: sensei,
        name: name,
        phone: phone,
        password: password,
    }

    try {
        await Gym.create(newGym).then(gym => {
            console.log("Academia criada com sucesso");
            console.log("Gym --> " + gym)
            //todo adicionar um include nesse processo
            return res.status(200).json(success(gym, "payload", "Gym created successfully"));
        })
    } catch (err) {
        res.status(500).json(fail("Error server. Error " + err));

    }

}

/*
 const Gym = sequelize.define("Gym", {
        idGym: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cnpj: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sensei: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true

        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        role: {
            type: DataTypes.STRING,
            //defaultValue: "gym",
            allowNull: true
        }

*/