const express = require("express");
const router = express.Router();


// DTO ?
// Lista todos os eventos
let { fail, success } = require("../helpers/response");



//Exporta o modulo router
module.exports = router;

/*

router.get('/', (req, res) => {
    console.log('olaaaa')
    eventDAO.list().then(events => {
        res.status(200).json(success(events, "payload"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao listar eventos do banco. erro " + err));
    });
});


*/