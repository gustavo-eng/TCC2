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
router.get('/:idStudent', (req, res) => {
    console.log('entrou na rota')
    const { idStudent } = req.params;
    requirementsDAO.listRequirementsByStudent(idStudent).then(student => {
        res.status(200).json(success(student, "payload", "aleluia"));
    }).catch(err => {
        res.status(500).json(fail("Nao foi possivel listar esta solicitacao por esse id de aluno"));
    })
});

router.get('/gym/:gymId', (req, res) => {
    const { gymId } = req.params;
    requirementsDAO.listRequirmentsByGym(gymId).then(gym => {
        res.status(200).json(success(gym, "payload", "Listagem de solicitacoes por academia bem sucediadas"))
    }).catch(err => {
        res.status(500).json(fail("Nao foi possivel listar esta solicitacao por esse id de academia"));
    });
})




//Create a
router.post('/', (req, res) => {
    // todo neste caso vai a chave strangeira da academia
    //todo e vai a chave estrangeira do aluno tbm
    //todo excluir coluna data
    const { data, aproved, idStudent, gymId } = req.body;
    requirementsDAO.save(data, aproved, idStudent, gymId).then(requirements => {
        res.status(200).json(success(requirements, "payload", "Solicitacoes salvas"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao listar solicitacoes do banco. erro - " + err));
    });

});
//todo rotina de deletar sob demanda

module.exports = router;
