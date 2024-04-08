const express = require("express");
const router = express.Router();

const { fail, success } = require("../helpers/response");
const studentDAO = require('../model/student');


router.get('/', (req, res) => {
    studentDAO.list().then(student => {
        res.status(200).json(success(student, "payload"));
    }).catch(err => {
        res.status(404).json(fail("Not Found", err));
    })
    //res.send(`<h1>Ola mundo studentAPI </h1>`)
});


//name, email, password, cpf
router.post('/', (req, res) => {

    let { name, email, password, cpf } = req.body;

    studentDAO.save(name, email, password, cpf).then(student => {
        res.status(201).json(success(student, 'payload'));
    }).catch(erro => {
        console.log(erro);
        res.status(500).json(fail("Internal Server Error", erro));
    });

});





router.put('/:id', (req, res) => {
    const { id } = req.params;

    //req.destroy
    //name, email, password, cpf
    console.log(' ****** Rota Student para atualizar ****** ')
    const { name, email, password, cpf } = req.body;
    console.log('Apos req.body')

    let obj = {}
    if (nome) obj.name = name;
    if (email) obj.email = email;
    if (password) obj.password = password; // Avaliar
    if (cpf) obj.cpf = cpf;

    if (obj == {}) {
        return res.status(500).json(fail("Não foi possível alterar o documento"));
    }

    console.log('objeto a ser enviado para .put Student');
    console.log(obj);

    studentDAO.update(id, obj)
        .then((student) => {
            if (student) {
                res.status(201).json(success(obj, 'Evento atualizado com sucesso!'));
            } else {
                res.status(404).json(fail("Aluno não encontrado"));
            }
        }).catch((error) => {
            console.log('Erro no catch do put');
            res.status(400).json(fail("Erro ao atualizar o Evento -> ", error))
        })

});










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

/*
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, rua, numero, cidade, preco, data } = req.body;

    let obj = {};

    if (nome) obj.nome = nome;
    if (rua) obj.rua = rua;
    if (numero) obj.numero = numero;
    if (cidade) obj.cidade = cidade;
    if (preco) obj.preco = preco;
    if (data) obj.data = data;

    if (obj == {}) {
        return res.status(500).json(fail("Não foi possível alterar o documento"));
    }

    eventDAO.update(id, obj)
        .then(() => {
            res.status(201).json(success(obj, 'Evento atualizado com sucesso!'));
        })
        .catch((error) => {
            console.log('Erro no catch do put');
            res.status(400).json(fail("Erro ao atualizar o Evento -> ", error))
        });

});


*/