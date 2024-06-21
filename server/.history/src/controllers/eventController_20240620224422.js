const db = require('../config/db');
const Event = db.Event;
const { success, fail } = require('../helpers/response');
const statusCode = require('../utils/statusCode.json');

exports.findAll = async (req, res) => {
    await Event.findAll({ include: ["typeEvent"] }).then(event => {
        return res.status(200).json(success(event, "payload", "Event listed successfully"));
    }).catch(err => {
        return res.status(404).json(fail("Events not found"));
    })
};


exports.create = async (req, res) => {

    try {

        const {
            description,
            price,
            startDate,
            endDate,
            neighborhood,
            street,
            number,
            city,
            idTypeEvent
        } = req.body;

        const newEvent = {
            description,
            price,
            startDate: startDate || new Date(),
            endDate: endDate || new Date(),
            neighborhood,
            street,
            number,
            city,
            idTypeEvent,
        };

        await Event.create(newEvent).then(event => {

            res.status(statusCode.OK).json(success(event, "payload", "Event created successfully"));

        }).catch(err => {

            res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Fail to create category. Erro -> ", err));

        });

    } catch (err) {

        res.status(statusCode.BAD_REQUEST).json(fail("Error server. Error: " + err));

    };

};



exports.delete = async (req, res) => {

    const { idEvent } = req.params;

    try {

        const event = await Event.findByPk(idEvent);
        if (!event) res.status(404).json(fail("Event not found"));

        await Event.destroy({ where: { idEvent: idEvent } }).then(_ => {
            res.status(200).json(success("Event deleted successfully"));
        }).catch(err => {
            res.status(500).json(fail("Fail to delete event. Erro -> ", err));
        });

    } catch (err) {
        res.status(500).json(fail("Error server. Error: " + err));
    }

}

exports.update = async (req, res) => {

    try {

        const { idEvent } = req.params;
        const {
            description,
            price,
            startDate,
            endDate,
            neighborhood,
            street,
            number,
            city,
            idTypeEvent
        } = req.body;

        const event = await Event.findByPk(idEvent);
        if (!event) res.status(404).json(fail("Event not found"));

        let obj = {};
        if (description) obj.description = description;
        if (price) obj.price = price;
        if (startDate) obj.startDate = startDate;
        if (endDate) obj.endDate = endDate;
        if (neighborhood) obj.neighborhood = neighborhood;
        if (street) obj.street = street;
        if (number) obj.number = number;
        if (city) obj.city = city;
        if (idTypeEvent) obj.idTypeEvent = idTypeEvent;

        //Neste caso, mesmo se o usuario nao digitar nada, vai manter o objeto anterior
        if (Object.keys(obj).length != 0) Object.keys(obj).forEach(key => event[key] = obj[key]);


        await event.save().then(data => {
            console.log("Atualizacao do evento realizada com sucesso ");
            return res.status(200).json(success(data, "payload", "Event updated successfully"));
        }).catch(err => {
            return res.status(500).json(fail("Fail to update event. Error =>  " + err.message));
        });


    } catch (err) {
        res.status(500).json(fail("Error server. Error: " + err));
    }

}



exports.findOne = async (req, res) => {
    const { idEvent } = req.params;
    try {
        const event = await Event.findByPk(idEvent);
        if (!event) {
            return res.status(404).json(fail("Event not found")); // Adicionado 'return' para interromper a execução
        }
        return res.status(200).json(success(event, "payload", "Event found successfully"));
    } catch (err) {
        return res.status(500).json(fail("Server error. Error: " + err));
    }
};







