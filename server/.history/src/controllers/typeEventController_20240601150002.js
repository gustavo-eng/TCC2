const typeEvent = require('../config/db').typeEvent;

const { success, fail } = require('../helpers/response');

exports.findAll = async (req, res) => {
    try {

        const typeEvents = typeEvent.findAll();

        if (!typeEvent || typeEvent.length == 0) return

    } catch (err) {

    }
}