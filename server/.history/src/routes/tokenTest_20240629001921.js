const express = require("express");
const router = express.Router();
const { controllAccess } = require('../middleware/Auth');

const db = require('../config/db');
const { success } = require("../helpers/response");
let event = db.Event
let registration = db.Registration

router.get('/', controllAccess, async (req, res) => {
    let registrationsAndEvent = await db.Registration.findAll({
        include: ['Event'],
    }).get({ plain: true });
    console.log(registrationsAndEvent)
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