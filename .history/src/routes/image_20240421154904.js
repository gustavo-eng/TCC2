var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Acessou a rota de upload de arquios</h1>")
})

router.post("/", (req, res) => {
    res.send("<h1>Acessou a rota de upload de arquios</h1>")
})


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