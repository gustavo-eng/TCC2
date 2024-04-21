const express = require("express");
const router = express.Router();
const requirementsDAO = require('../model/requirements');

let { fail, success } = require('../helpers/response');
const { route } = require("./eventAPI");

router.get('/', (req, res) => {

    requirementsDAO.list().then(requirements => {
        res.status(200).json(success(requirements, "payload", "Solicitacoes"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao listar solicitacoes do banco. erro - " + err));
    });


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
    //res.send('<h1> Teste da rota  /gym/:gymId  </h1>')

    const { gymId } = req.params;
    requirementsDAO.listRequirmentsByGym(gymId).then(gym => {
        res.status(200).json(success(gym, "payload", "Listagem de solicitacoes por academia bem sucediadas"))
    }).catch(err => {
        res.status(500).json(fail("Nao foi possivel listar esta solicitacao por esse id de academia. erro" + err));
    });

});

//Create a
router.post('/', (req, res) => {
    const { data, aproved, idStudent, gymId } = req.body;
    requirementsDAO.save(data, aproved, idStudent, gymId).then(requirements => {
        res.status(200).json(success(requirements, "payload", "Solicitacoes salvas"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao listar solicitacoes do banco. erro - " + err));
    });
});

// esta esta serve para o desenvolvedor. Fazer rotina para deletar
// deletar a tabela especificada de acordo com o dado que chegou do update time

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    requirementsDAO.delete(id).then(requirement => {
        res.status(200).json(success(requirement, "payload", "Solicitacao deletada com successo"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao deletar  solicitacao do banco. erro - " + err));
    });

});
//todo rotina de deletar sob demanda
// fazer
module.exports = router;
