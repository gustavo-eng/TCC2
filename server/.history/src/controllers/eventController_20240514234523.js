const db = require('../config/db');
const Event = db.Event;


const { success, fail, message } = require('../helpers/response');
const Op = db.Sequelize.Op;

exports.findAll = async (req, res) => {
    await Event.findAll().then(event => {
        return res.status(200).json(success(event, "payload", "Event listed successfully"));
    }).catch(err => {
        return res.status(404).json(fail("Events not found"));
    })
}


//TODO adicionar imagem para upload de imagem de fundo
exports.create = async (req, res) => {

    const { description, price, startDate, endDate, type } = req.body;

    const newEvent = {
        description: description,
        price: price,
        startDate: startDate || new Date(),
        endDate: endDate || new Date(),
        type: type
    }
    try {
        await Event.create(newEvent).then(event => {
            console.log('Evento salvo com successo')
            res.status(200).json(success(event, "payload", "Event created successfully"));
        }).catch(err => {
            res.status(500).json(fail("Fail to create category. Erro -> ", err));
        });
    } catch (err) {
        res.status(500).json(fail("Error server. Error: " + err));
    }

}


exports.delete = async (req, res) => {

    const { idEvent } = req.params;

    try {

        const event = await Event.findByPk(idEvent);
        if (!event) res.status(404).json(fail("Event not found"));

        await Event.destroy({ where: { idEvent: idEvent } }).then(() => {
            res.status(200).json(success("Event deleted successfully"));
        }).catch(err => {
            res.status(500).json(fail("Fail to delete event. Erro -> ", err));
        });

    } catch (err) {
        res.status(500).json(fail("Error server. Error: " + err));
    }

}

//TODO adicionar funcao para verificar que os dados sao diferentes de undefined, null, ""...
exports.update = async (req, res) => {
    const { idEvent } = req.params;
    const { description, price, startDate, endDate, type } = req.body;

    try {

        const event = await Event.findByPk(idEvent);
        if (!event) res.status(404).json(fail("Event not found"));

        let obj = {};
        if (description) obj.description = description;
        if (price) obj.price = price;
        if (startDate) obj.startDate = startDate;
        if (endDate) obj.endDate = endDate;
        if (type) obj.type = type;

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





/*
 description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        startDate: { // Obligate Field
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: true,
        },
        endDate: { //Optional Field
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        }
*/




