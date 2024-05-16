
const db = require('../config/db');
const Address = db.Address;


const { success, fail, message } = require('../helpers/response');


exports.findAll = async (req, res) => {
    try {

        await Address.findAll().then(address => {
            res.status(200).json(success(address, "payload", "Address listed successully"));
        }).catch(err => {
            return res.status(404).json(fail("No address found. Error -> " + err))
        })

    } catch (err) {

    }
}




//create
//findAll
//update
//delete - tratar caso buscar e nao conter address correspondente