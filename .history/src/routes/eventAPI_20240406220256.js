const express = require("express");
const router = express.Router();
const eventDAO = require('../model/event');

// DTO ?
// Lista todos os eventos
let { fail, success } = require("../helpers/response")
r
//todo padronizar retornos
router.get('/', (req, res) => {
    //res.send(`<h2>Rota evento aqui contera a api para lidar com banco evento </h2>`)
    eventDAO.list().then(events => {
        console.log('-------- dentro de list api event -------------')
        res.status(200).json(success(events, "list"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao listar eventos do banco. erro " + err));
    });
});

//todo - Validar campos
router.post('/', (req, res) => {
    const { nome, rua, numero, cidade, preco, data } = req.body;
    //console.log('dados do body')
    //console.log(cod, nome, rua, numero, cidade, preco, data)
    eventDAO.save(nome, rua, numero, cidade, preco, data).then(event => {
        res.status(200).json({ status: 200, event: event });
    }).catch(err => {
        res.status(500).json({ status: 500, msg: "Falha ao salvar event" })
    })
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