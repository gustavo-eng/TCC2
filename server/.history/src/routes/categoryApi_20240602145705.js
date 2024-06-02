const express = require("express");
const router = express.Router();
const categories = require("../controllers/categoryController");

//Middlewares
const validate = require('../middleware/validate');
const categorySchema = require('');

//Retrieve all Categories
router.get("/", categories.findAll);

//Create Category
router.post("/", categories.create);

//Update category
router.put("/:idCategory", categories.update);

//Delete category
router.delete("/:idCategory", categories.delete);


module.exports = router;