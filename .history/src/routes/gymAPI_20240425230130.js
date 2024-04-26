const express = require('express');
const router = express.Router();
const gymDAO = require('../model/gym');
const requerimentDAO = require("../model/requirements");

let { fail, success } = require('../helpers/response');

router.get('/', (req, res) => {
    gymDAO.list().then(gym => {
        res.status(200).json(success(gym, "payload", "Academia Listada com sucesso"));

    }).catch(err => {
        res.status(500).json(fail("Erro ao listar academia. Erro ->  " + err));
    });
})


//todo adicionar middleware
//save: async (email, senha, telefone, rua, bairro, numero, cnpj_Academia, nomeProfessor, nomeAcademia) => {
// 1. relacionamentos
// 2. middlewares
// 3. Validacao front
router.post("/", (req, res) => {
    const {
        email,
        senha,
        telefone,
        rua,
        bairro,
        numero,
        cnpj_Academia,
        nomeProfessor,
        nomeAcademia
    } = req.body;

    gymDAO.save(email, senha, telefone, rua, bairro, numero, cnpj_Academia, nomeProfessor, nomeAcademia)
        .then(gym => {
            res.status(200).json(success(gym, "payload", "Academia salva com successo"));
        }).catch(err => {
            res.status(500).json(fail("Erro ao salvar academia. Erro -> " + err));
        });
});


router.put('/:Cnpj_Academia', (req, res) => {
    const { Cnpj_Academia } = req.params;
    const {
        email,
        senha,
        telefone,
        rua,
        bairro,
        numero,
        cnpj_Academia,
        nomeProfessor,
        nomeAcademia
    } = req.body;

    let obj = {};

    if (email) obj.email = email;
    if (senha) obj.senha = senha;
    if (telefone) obj.telefone = telefone;
    if (rua) obj.rua = rua;
    if (bairro) obj.bairro = bairro;
    if (numero !== undefined) obj.numero = numero;
    if (cnpj_Academia) obj.cnpj_Academia = cnpj_Academia;
    if (nomeProfessor) obj.nomeProfessor = nomeProfessor;
    if (nomeAcademia) obj.nomeAcademia = nomeAcademia;


    //Verificar se o
    if (obj == {}) {
        return res.status(500).json(fail("Não foi possível alterar o documento"));
    }

    gymDAO.update(Cnpj_Academia, obj).then((obj) => {
        res.status(200).json(success(obj, "payload", "Academia atualizada com sucesso"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao atualizar academia. Erro ->  " + err))
    });

});


router.get('/students/:idStudent/:gymId', (req, res) => {
    const { idStudent, gymId } = req.params;
    gymDAO.listRequerimentByStudentsAndGym(idStudent, gymId).then(students => {
        res.status(200).json(success(students, "payload", "Alunos listados com sucesso"));
    }).catch(err => {
        res.status(500).json(fail("Nao foi possivel listar os alunos. Erro => " + err));
    })
});

//listRequerimentByStudentsAndGym
router.get('/:cnpj_Academia', (req, res) => {
    const { cnpj_Academia } = req.params;
    gymDAO.findSpecific(cnpj_Academia).then(gym => {
        res.status(200).json(success(gym, "payload", "Academia listada com sucesso"))
    }).catch(err => {
        res.status(404).json(fail("Academia não encontrada"));
    });

});


router.delete('/:cnpj_Academia', (req, res) => {
    const { cnpj_Academia } = req.params;

    gymDAO.delete(cnpj_Academia).then((gym) => {
        res.status(200).json(success(gym, "payload", "Academia deletada com successo"));
    }).catch(err => {
        res.status(500).json(fail("Não foi possível deletar academia. Erro --> " + err));
    })
})



module.exports = router;

//router.get() -> buscar academia especifica
/*

*/




