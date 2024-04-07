const express = require("express");
const router = express.Router();
const eventDAO = require('../model/event');

// DTO ?
// Lista todos os eventos
let { fail, success } = require("../helpers/response");

//List all objects
router.get('/', (req, res) => {
    console.log('olaaaa')
    eventDAO.list().then(events => {
        res.status(200).json(success(events, "payload"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao listar eventos do banco. erro " + err));
    });
});

//Get specific  object by id
router.get('/:id', (req, res) => {
    let id = req.params.id;
    eventDAO.findSpecific(id).then(event => {
        res.status(200).json(success(event, "payload"))
    }).catch((err) => {
        res.status(500).json(fail("Erro ao listar . ERRO = " + err));
    })
});


// CREATE one object
router.post('/', (req, res) => {
    const { nome, rua, numero, cidade, preco, data } = req.body;
    eventDAO.save(nome, rua, numero, cidade, preco, data).then(event => {
        res.status(200).json(success(event, "payload"));
    }).catch(err => {
        res.status(500).json({ status: 500, msg: "Falha ao salvar event" })
    })
});

router.delete('/:id', (req, res) => {
    eventDAO.delete(id).then((event) => {
        res.status(200).json(success(objDeletado, "data"));
    }).catch((err) => {
        res.status(500).json(fail("Erro ao deletar evento. ERRO = " + err));
    });
});

// update
router.put('/:id', (req, res) => {
    console.log('763536533 update')
    //let id = req.params.id;
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



module.exports = router;



