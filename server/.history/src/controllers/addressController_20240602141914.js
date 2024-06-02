
const db = require('../config/db');
const Address = db.Address;


const { success, fail } = require('../helpers/response');


exports.findAll = async (req, res) => {

    try {

        await Address.findAll().then(address => {
            res.status(200).json(success(address, "payload", "Address listed successully"));
        }).catch(err => {
            return res.status(404).json(fail("No address found. Error -> " + err))
        });

    } catch (err) {
        res.status(500).json(fail("Error server. Error: " + err));
    }

}


exports.create = async (req, res) => {

    try {

        const { state, neighborhood, street, number, city } = req.body;

        const newAddress = {
            state: state,
            neighborhood: neighborhood,
            street: street,
            number: number,
            city: city
        }

        await Address.create(newAddress).then(address => {
            res.status(200).json(success(address, "payload", "Address registered successfully"));
        }).catch(err => {
            res.status(500).json(fail("Failt to create category"));
        })

    } catch (err) {
        res.status(500).json(fail("Error server. Error --> " + err));
    }
}



exports.delete = async (req, res) => {

    const { id } = req.params;
    const address = await Address.findByPk(id);

    await address.destroy().then(() => {
        return res.status(200).json(success({}, "payload", "Address deleted successfully"));
    }).catch(err => {
        return res.status(500).json(fail("Server Error: " + err.message));
    });


}
