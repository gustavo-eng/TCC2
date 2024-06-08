const db = require('../config/db');
const Requests = db.Requests;

const { success, fail } = require('../helpers/response');

exports.findAll = async (req, res) => {
    await Requests.findAll().then(requests => {

        return res.status(200).json(success(requests, "payload", "Requests listed successfully "));

    }).catch(err => {
        return res.status(404).json(fail("Request not found"));
    });
}

