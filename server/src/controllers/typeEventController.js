const typeEvent = require('../config/db').typeEvent;
const { success, fail } = require('../helpers/response');

exports.findAll = async (req, res) => {
    try {
        const typeEvents = await typeEvent.findAll();

        if (!typeEvents || typeEvents.length === 0) {
            return res.status(404).json(fail("No event types found"));
        }

        return res.status(200).json(success(typeEvents, "payload", "Event types listed successfully"));
    } catch (err) {
        console.error("Server error --> ", err);
        return res.status(500).json(fail("Server error. Error --> " + err.message));
    }
};



exports.create = async (req, res) => {


    try {

        const { type } = req.body;

        const typeEventCreated = typeEvent.create({ type });

        return res.status(200).json(success(typeEventCreated, "payload", "Event type created !"));


    } catch (err) {

        return res.status(200).json(fail("Error server. Error -> " + err));

    }

}

exports.delete = async (req, res) => {

    try {
        const { idTypeEvent } = req.params;

        const typeEventToDelete = await typeEvent.findByPk(idEvent);
        if (!typeEventToDelete) return res.status(404).json(fail("Event type not "));
        await typeEvent.destroy({ where: { idTypeEvent } });

        return res.status(200).json(success({ msg: "Event type deleted successfully" }, "payload", null));

    } catch (err) {

        return res.status(500).json(fail("Error server. Error -> " + err));
    }

}

