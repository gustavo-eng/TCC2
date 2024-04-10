const express = require("express");
const router = express.Router();
const requirementsDAO = require('../model/requirements');

let { fail, success } = require('../helpers/response');
const { route } = require("./eventAPI");

router.get('/', (req, res) => {

    requirementsDAO.list().then(requirements => {
        res.status(200).json(success(requirements, "payload", "Solicitacoes"));
    }).catch(err => {
        //console.log('dasf');
        res.status(500).json(fail("Erro ao listar solicitacoes do banco. erro - " + err));
    })

});

//Create a

router.post('/', (req, res) => {
    // todo neste caso vai a chave strangeira da academia
    //todo e vai a chave estrangeira do aluno tbm
    //todo excluir coluna data
    const { data, aproved } = req.body;

});


module.exports = router;

/*

save: async (data, aproved) => {
        const requirement = await requerimentsModel.create({
            data: data,
            aproved: aproved,
        });

        return requirement;
},

*/