const express = require("express");
const router = express.Router();
const { controllAccess } = require('../middleware/Auth');
//const  = require('../utils/cleanForgetAndCrashData');
const db = require('../config/db');
const { cleanObsoletAthlets } = require('../utils/cleanForgetAndCrashData');
router.get('/', controllAccess, async (req, res) => {

    let registrationsAndEvent = await db.Registration.findAll({
        include: ['Event'],
        raw: true
    });

    cleanObsoletAthlets({ XDays: 10 });

    //console.log(Array(...registrationsAndEvent))

    /*
    Array(...registrationsAndEvent).forEach(async data => {

        let dateEvent = String(data['Event.endDate'] ? data['Event.endDate'] : data['Event.startDate']);
        let datePayment = String(data.createdAt);



        if (diffIsBiggherThanXDays({ paymentDate: datePayment, endEventDate: dateEvent, X: 6 })) {
            //Destroy the registration
            await db.Event.destroy({ where: { idEvent: data['Event.idEvent'] } });
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