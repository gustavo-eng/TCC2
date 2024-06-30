const express = require("express");
const router = express.Router();
const { calculateDaysBetweenDates } = require('../utils/calculateDaysBetweenDates');
const { controllAccess } = require('../middleware/Auth');


const db = require('../config/db');
const { success } = require("../helpers/response");
let event = db.Event
let registration = db.Registration

router.get('/', controllAccess, async (req, res) => {

    let registrationsAndEvent = await db.Registration.findAll({
        include: ['Event'],
        raw: true
    });
    //console.log(Array(...registrationsAndEvent))

    Array(...registrationsAndEvent).forEach(data => {
        //console.log('Data -> ' + data['Event.description'])
        let dateEvent = data['Event.endDate'] ? data['Event.endDate'] : data['Event.startDate'];


        if (calculateDaysBetweenDates({ paymentDate?: sd, endEventDate?: dateEvent }))
    });

    res.status(200).json(success(registrationsAndEvent, "payload"))
    //res.send(`<h1>Nome do usuario: ${req.user} e user id ${req.userId} </h1>`)
});

/*
 const { idAthlet } = req.params;
        const payments = await Payment.findAll({
            where: { idAthlet: idAthlet },
            include: ['Event', 'Athlet'],
        });
*/


module.exports = router;