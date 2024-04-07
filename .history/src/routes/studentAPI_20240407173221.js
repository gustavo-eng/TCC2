const express = require("express");
const router = express.Router();

const { fail, success } = require("../helpers/response");
const studentDAO = require('../model/student');


router.get('/', (req, res) => {
    studentDAO.list().then(student => {
        res.status(200).json(success(student, "payload"));
    }).catch(err => {
        res.status(404).json(fail("Not Found", err));
    })
    //res.send(`<h1>Ola mundo studentAPI </h1>`)
});


//name, email, password, cpf
router.post('/', (req, res) => {

    let { name, email, password, cpf } = req.body;

    studentDAO.save(name, email, password, cpf).then(student => {

    });

});



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