const express = require('express');
const router = express.Router();
const gymDAO = require('../model/gym');

let { fail, success } = require('../helpers/response');


router.get('/', (req, res) => {
    gymDAO.list().then(gym => {
        res.status(200).json(success(gym, "payload", "Academia Listada com sucesso"));

    }).catch(err => {
        res.status(500).json(fail("Erro ao listar academia. Erro ->  " + err));
    });
})


//TODO adicionar middleware
router.post("/", (req, res) => {

});
