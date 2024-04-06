const express = require("express");
const router = express.Router();
const eventDAO = require('../model/event');

// DTO ?
// Lista todos os eventos
router.get('/', (req, res) => {
    //res.send(`<h2>Rota evento aqui contera a api para lidar com banco evento </h2>`)
    eventDAO.list().then(events => {
        res.status(200).json({ status: 200, events: events });
    });
});

router.post('/', (req, res) => {
    const { nome, rua, numero, cidade, preco, data } = req.body;

});

// Salvar evento

// Qaundo usar query ou params


module.exports = router;

/*
save: async (nome, rua, numero, cidade, preco, data) => {
        //moment.utc().format('YYYY-MM-DD HH:mm:ss')
    return await EventModel.create({
        nome: nome,
        rua: rua,
        numero: numero,
        cidade: cidade,
        preco: preco,
        data: moment.utc().format('YYYY-MM-DD HH:mm:ss'), // TIRAR
    });

}

*/