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


    if (obj == {}) {
        return res.status(500).json(fail("Não foi possível alterar o documento"));
    }

    gymDAO.update(Cnpj_Academia,)

});

//router.get() -> buscar academia especifica
/*

*/



