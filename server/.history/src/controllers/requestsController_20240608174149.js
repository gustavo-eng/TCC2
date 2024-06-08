const db = require('../config/db');
const Requests = db.Requests;

const { success } = require('../helpers/response');

exports.findAll = async (req, res) => {
    await Requests.findAll().then(requests => {
        return res.status(200).json(success(requests, "payload", "Requests listed successfully "));
    });
}