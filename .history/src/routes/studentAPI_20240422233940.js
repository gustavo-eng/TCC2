const express = require("express");
const router = express.Router();
const { fail, success } = require("../helpers/response");
const studentDAO = require('../model/student');
const requirementsDAO = require('../model/requirements');

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
        console.log("student.dataValues.id ", student.dataValues.id)
        requirementsDAO.save()

        //res.status(201).json(success(student, 'payload', "haha"));
    }).catch(erro => {
        console.log(erro);
        res.status(500).json(fail("Internal Server Error", erro));
    });

});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    studentDAO.delete(id).then((event) => {
        res.status(200).json(success(event, "payload"));
    }).catch((err) => {
        res.status(500).json(fail("Erro ao deletar evento. ERRO = " + err));
    });

});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, password, cpf } = req.body;

    let obj = {}
    if (name) obj.name = name;
    if (email) obj.email = email;
    if (password) obj.password = password; // Avaliar
    if (cpf) obj.cpf = cpf;

    if (obj == {}) {
        return res.status(500).json(fail("Não foi possível alterar o documento"));
    }

    studentDAO.update(id, obj)
        .then((student) => {
            if (student) {
                res.status(201).json(success(obj, 'payload', "Aluno atualizado com succeso"));
            } else {
                res.status(404).json(fail("Aluno não encontrado"));
            }
        }).catch((error) => {

            res.status(400).json(fail("Erro ao atualizar o Evento -> ", error))
        })

});




module.exports = router;

