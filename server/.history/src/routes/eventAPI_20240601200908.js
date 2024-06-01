const express = require("express");
const router = express.Router();
const events = require("../controllers/eventController");


//Validations middlewares
const validate = require('../middleware/validate');
const eventSchema = require('../schemas/eventSchema');


//todo fazer rota para buscar por data

//Retrieve all Events
router.get("/", events.findAll);

//Get Specific Event
router.get("/:idEvent", events.findOne);

//Create event
router.post("/", events.create);

//Delete event
router.delete("/:idEvent", events.delete);

//Update event
router.put("/:idEvent", events.update);








/*

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
        res.status(200).json(success(event, "payload"));
    }).catch((err) => {
        res.status(500).json(fail("Erro ao listar . ERRO = " + err));
    });
});

// CREATE one object
router.post('/', (req, res) => {
    const { nome, rua, numero, cidade, preco, data } = req.body;
    eventDAO.save(nome, rua, numero, cidade, preco, data).then(event => {
        res.status(200).json(success(event, "payload"));
    }).catch(err => {
        res.status(500).json({ status: 500, msg: "Falha ao salvar event" })
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    eventDAO.delete(id).then((event) => {
        res.status(200).json(success(event, "payload"));
    }).catch((err) => {
        res.status(500).json(fail("Erro ao deletar evento. ERRO = " + err));
    });
});

// update
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
            res.status(201).json(success(obj, 'payload', 'Evento atualizado com sucesso!'));
        })
        .catch((error) => {
            console.log('Erro no catch do put');
            res.status(400).json(fail("Erro ao atualizar o Evento -> ", error));
        });

});
*/
module.exports = router;


