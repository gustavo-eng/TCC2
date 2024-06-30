const express = require("express");
const router = express.Router();
const { controllAccess } = require('../middleware/Auth');
const diffIsBiggherThanXDays = require('../utils/diffIsBiggherThanXDays');
const db = require('../config/db');

let event = db.Event
let registration = db.Registration

router.get('/', controllAccess, async (req, res) => {

    let registrationsAndEvent = await db.Registration.findAll({
        include: ['Event'],
        raw: true
    });
    //console.log(Array(...registrationsAndEvent))


    Array(...registrationsAndEvent).forEach(async data => {
        console.log('Data -> ' + data)
        let dateEvent = String(data['Event.endDate'] ? data['Event.endDate'] : data['Event.startDate']);
        let datePayment = String(data.createdAt);

        if (diffIsBiggherThanXDays({ paymentDate: datePayment, endEventDate: dateEvent, X: 5 })) {
            await db.Event.destroy({ where: { idEvent: data['Event.idEvent'] } });
            console.log('registrationsAndEvent _______')
            console.log(registrationsAndEvent)
        };

    });


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