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

// rota para o professor buscar apenas os alunos referentes a sua academia
//todo essa rota nao esta pronta pois so sera feito apos finalizar os relacioanmentos
router.get('/:cnpj_Acacademia', (req, res) => {
    const { cnpj_Acacademia } = req.params;
    res.json(fail("Essa rota esta em desevolvimento"));
});

//Create a
router.post('/', (req, res) => {
    // todo neste caso vai a chave strangeira da academia
    //todo e vai a chave estrangeira do aluno tbm
    //todo excluir coluna data
    const { data, aproved } = req.body;
    requirementsDAO.save(data, aproved).then(requirements => {
        res.status(200).json(success(requirements, "payload", "Solicitacoes salvas"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao listar solicitacoes do banco. erro - " + err));
    });

});
//todo rotina de deletar sob demanda

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