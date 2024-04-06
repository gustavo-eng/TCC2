const express = require("express");
const router = express.Router();
const eventDAO = require('../model/event');

// DTO ?
// Lista todos os eventos
router.get('/', (req, res) => {
    res.send(`<h2>Rota evento aqui contera a api para lidar com banco evento </h2>`)
    eventDAO.list().then(events => {
        res.status(200).json({ status: 200, events: events });
    });

});

// Salvar evento



module.exports = router;