const express = require("express");
const router = express.Router();
const { fail, success, message } = require("../helpers/response");
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

    let { name, email, password, cpf, gymId } = req.body;

    studentDAO.save(name, email, password, cpf, gymId).then(student => {

        let idStudent = student.dataValues.id;
        let data = student.dataValues.createdAt;
        console.log('data ', data)
        // requirementsDAO.save(data, false, idStudent, gymId).then(requirement => {
        //     res.status(200).json(message("Solicitacao enviada com sucesso"))
        // });

        //res.status(201).json(success(student, 'payload', "haha"));
    }).catch(erro => {
        res.status(500).json(fail("Internal Server Error", erro));
    });

});

//todo rota para login
router.post('/login', (req, res) => {
    res.send("<h1>Solicitacao enviada</h1>")
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

