
const db = require('../config/db');
const Address = db.Address;


const { success, fail } = require('../helpers/response');


exports.findAll = async (req, res) => {

    try {

        await Address.findAll().then(address => {
            res.status(200).json(success(address, "payload", "Address listed successully"));
        }).catch(err => {
            return res.status(404).json(fail("No address found. Error -> " + err))
        })

    } catch (err) {
        res.status(500).json(fail("Error server. Error: " + err));
    }

}




//create
//findAll
//update
//delete - tratar caso buscar e nao conter address correspondente