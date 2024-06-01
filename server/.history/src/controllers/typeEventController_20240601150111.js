const typeEvent = require('../config/db').typeEvent;

const { success, fail } = require('../helpers/response');

exports.findAll = async (req, res) => {
    try {

        const typeEvents = typeEvent.findAll();

        if (!typeEvent || typeEvent.length == 0) return

    } catch (err) {
        return res.status(500).json(fail("Error server. Error --> " + err));
    }
}