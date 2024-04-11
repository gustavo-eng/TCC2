const express = require("express");
const router = express.Router();
// todo DAO ?
const categoryDAO = require('../model/category');

let { fail, success } = require("../helpers/response");
const { errorMonitor } = require("nodemailer/lib/xoauth2");

//lista todas as categorias
router.get('/', (req, res) => {
    categoryDAO.list().then(category => {
        res.status(200).json(success(category, "payload", "Categoria lista com sucesso"));

    }).catch(err => {
        res.status(500).json(fail('Erro ao listar categoria. Erro -> ' + errorMonitor))
    });
});