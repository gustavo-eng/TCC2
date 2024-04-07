const express = require("express");
const router = express.Router();
const eventDAO = require('../model/event');

// DTO ?
// Lista todos os eventos
let { fail, success } = require("../helpers/response");

//List all objects
router.get('/', (req, res) => {
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
        res.status(200).json({ status: 200, event: event });
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
        .catch((e) => {
            console.log('Erro no catch do put');
            res.status(400).json(fail("Erro ao atualizar o Evento", e))
        });

});



module.exports = router;


/*
 cod_Event: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        defaultValue: "John Doe",
        allowNull: true
    },
    rua: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: true
    },
    preco: {
        type: DataTypes.FLOAT,
        //field: 'itemPrice',
        allowNull: true
    },
    data: { // Analisar como ficou
        type: DataTypes.STRING, // mudar para date
        //field: 'data',
        //defaultValue: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
        allowNull: true
    }

*/
