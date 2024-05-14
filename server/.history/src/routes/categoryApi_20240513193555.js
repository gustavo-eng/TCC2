const express = require("express");
const router = express.Router();
const categories = require("../controllers/categoryController");
const { permissionFRPj, permissionGym, globalEntitiesPermission } = require("../middleware/permission")
// todo DAO ?
const categoryDAO = require('../model/category');

let { fail, success } = require("../helpers/response"); // utilizado para padronizar respostas

//lista todas as categorias


//Retrieve all Tutorials
router.get("/", categories.findAll);

//Create Category
router.post("/", categories.create);


//Update category
router.put("/:idCategory", categories.update);



//Delete category
router.delete("/:idCategory", categories.delete);


/*
router.get('/', (req, res) => {
    categoryDAO.list().then(category => {
        res.status(200).json(success(category, "payload", "Categoria lista com sucesso"));

    }).catch(err => {
        res.status(500).json(fail('Erro ao listar categoria. Erro -> ' + errorMonitor))
    });
});

router.post('/', (req, res) => {
    const { gender, classAge, weight } = req.body;
    categoryDAO.save(gender, classAge, weight).then(category => {
        res.status(200).json(success(category, "payload", "Categoria listada com sucesso"))
    }).catch(err => {
        res.status(200).json(fail("Erro ao criar solicitacao. Erro -> " + err));
    });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    categoryDAO.delete(id).then(category => {
        res.status(200).json(success(category, "payload", "Successo ao deletar categoria"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao deletar categoria . ERRO = " + err));
    });
});
*/


module.exports = router;