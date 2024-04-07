const express = require("express");
const router = express.Router();

const { fail, success } = require("../helpers/response");
const studentDAO = require('../model/student');

router.get('/', (req, res) => {
    studentDAO.list().then(student => {
        res.status(200).json(success(student, "payload"));

    })
    //res.send(`<h1>Ola mundo studentAPI </h1>`)
}),

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