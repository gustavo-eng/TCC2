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

exports.create = async (req, res) => {


}