const express = require("express");
const router = express.Router();
// todo DAO ?
const categoryDAO = require('../model/category');

let { fail, success } = require("../helpers/response"); // utilizado para padronizar respostas

//lista todas as categorias
router.get('/', (req, res) => {
    categoryDAO.list().then(category => {
        res.status(200).json(success(category, "payload", "Categoria lista com sucesso"));

    }).catch(err => {
        res.status(500).json(fail('Erro ao listar categoria. Erro -> ' + errorMonitor))
    });
});

// postar categoria
//gender, classAge, weight
// middleware para FPRJ
router.post('/', (req, res) => {

    const { gender, classAge, weight } = req.body;

    categoryDAO.save(gender, classAge, weight).then(category => {
        res.status(200).json(success(category, "payload", "Categoria listada com sucesso"))
    }).catch(err => {
        res.status(200).json(fail("Erro ao criar solicitacao. Erro -> " + err));
    });

});



module.exports = router;

