
const db = require('../config/db');
const Address = db.Address;


const { success, fail, message } = require('../helpers/response');


exports.findAll = async (req, res) => {
    await Address.findAll().then(address => {

    })
}


//create
//findAll
//update
//delete