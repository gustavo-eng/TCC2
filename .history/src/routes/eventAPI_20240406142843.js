const express = require("express");
const router = express.Router();
const eventDAO = require('../model/event');

// DTO ?
// Lista todos os eventos
router.get('/', (req, res) => {
    /*
    eventDAO.list().then(events => {
        res.status(200).json({ msg: "Ok" });
    });
    */
});

// Salvar evento



module.exports = router;