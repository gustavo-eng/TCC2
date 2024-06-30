const express = require("express");
const router = express.Router();
const { diffIsBiggherThanXDays } = require('../utils/calculateDaysBetweenDates');
const { controllAccess } = require('../middleware/Auth');


const db = require('../config/db');
const { success } = require("../helpers/response");
let event = db.Event
let registration = db.Registration

router.get('/', controllAccess, async (req, res) => {
    db.Event.destroy({ where: { idEvent: 20 } })
    /*
    let registrationsAndEvent = await db.Registration.findAll({
        include: ['Event'],
        raw: true
    });
    //console.log(Array(...registrationsAndEvent))

    Array(...registrationsAndEvent).forEach(data => {
        //console.log('Data -> ' + data['Event.description'])
        let dateEvent = String(data['Event.endDate'] ? data['Event.endDate'] : data['Event.startDate']);
        let datePayment = String(data.createdAt);

        if (diffIsBiggherThanXDays({ paymentDate: datePayment, endEventDate: dateEvent, X: 5 })) {

        };

    });
    */

    //res.status(200).json(success(registrationsAndEvent, "payload"))
    res.send(`<h1>Nome do usuario: ${req.user} e user id ${req.userId} </h1>`)
});

/*
 const { idAthlet } = req.params;
        const payments = await Payment.findAll({
            where: { idAthlet: idAthlet },
            include: ['Event', 'Athlet'],
        });
*/


module.exports = router;