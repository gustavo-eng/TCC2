const db = require('../config/db');
const Gym = db.Gym;
const Address = db.Address;
const { success, fail } = require('../helpers/response');

exports.findAll = async (req, res) => {
    try {
        const gyms = await Gym.findAll();
        return res.status(200).json(success(gyms, "payload", "Gym listed successfully"));
    } catch (err) {
        return res.status(500).json(fail("No gym found. Error -> " + err.message));
    }
}


exports.create = async (req, res) => {

    console.log("create gymmmm ")

    const {
        cnpj,
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

    const newAddress = {
        state,
        neighborhood,
        street,
        number,
        city
    }

    try {

        const address = await Address.create(newAddress);


        const newGym = {
            cnpj,
            sensei,
            name,
            phone,
            password,
            role: "gym",
            idAddress: address.idAddress
        };

        const gym = await Gym.create(newGym);
        return res.status(200).json(success(gym, "payload", "Gym created successfully"));

    } catch (err) {
        if (err.name === 'SequelizeValidationError') {
            return res.status(400).json(fail("Validation Error: " + err.message));
        }
        return res.status(500).json(fail("Server Error: " + err.message));
    }
}

exports.getAdrress = async (req, res) => {
    const { id } = req.params;
    const address = await Address.findByPk(id, { include: ['Gym'] });

    if (!address) return res.status(404).json(fail("Address not found"));

    return res.status(200).json(success(address, "payload", "Address found"));
}


exports.delete = async (req, res) => {

    const { id } = req.params;

    const gym = await Gym.findByPk(id);

    await gym.destroy().then(() => {
        return res.status(200).json(success({}, "payload", "Gym deleted successfully"));
    }).catch(err => {
        return res.status(500).json(fail("Server Error: " + err.message));
    });


}

/*

const book = await BookModel.findByPk(id)
        return book.destroy()
 delete: async (cnpj_Academia) => {
        await GymModel.destroy({ where: { cnpj_Academia: cnpj_Academia } });
    },
*/
