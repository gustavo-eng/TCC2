const express = require("express");
const router = express.Router();
const categories = require("../controllers/categoryController");
const { permissionFRPj, permissionGym, globalEntitiesPermission } = require("../middleware/permission")
// todo DAO ?
const categoryDAO = require('../model/category');

let { fail, success } = require("../helpers/response"); // utilizado para padronizar respostas




//Retrieve all Tutorials
router.get("/", categories.findAll);

//Create Category
router.post("/", categories.create);


//Update category
router.put("/:idCategory", categories.update);



//Delete category
router.delete("/:idCategory", categories.delete);


module.exports = router;