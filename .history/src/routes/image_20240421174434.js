var express = require('express');
var router = express.Router();
const upload = require("../middleware/upload");
const uploadController = require("../controllers/upload");
const imageDAO = require('../model/Image');
const { success, fail } = require('../helpers/response');

router.get("/:id", (req, res) => {
    const { id } = req.params;
    //res.render('index.html')
    console.log('rota de BUSCAAA ESPECIFICA')
    //res.send("<h1>Acessou a rota de upload de arquios</h1>");
    imageDAO.findSpecific(id).then(img => {
        res.status(200).json(success(img, "payload", "Sucesso ao listar imagem"))
    }).catch(err => {
        res.status(500).json(fail("Erro ao listar image. Erro ->  " + err))
    })
})

router.post("/", upload.single("file"), uploadController.uploadFiles, (req, res) => {
    //res.send("<h1>Acessou a rota de upload de arquios</h1>")
    res.json({ msg: "upload feito com suceeso" })
    //res.json(req.file);
})

module.exports = router;

/*
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");

let routes = (app) => {
  router.get("/", homeController.getHome);

  router.post("/upload", upload.single("file"), uploadController.uploadFiles);

  return app.use("/", router);
};

module.exports = routes;

*/