const express = require("express");
const router = express.Router();

const athlets = require("../controllers/athletController");

//Retrieve all athlets
router.get("/", athlets.findAll);

//POST
router.post("/", athlets.create);

//router.delete("/:idAthlete" )

module.exports = router;

/*
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
    //res.send('<h1>Post login</h1>')

    let { name, email, password, cpf, gymId } = req.body;

    studentDAO.save(name, email, password, cpf, gymId).then(student => {

        let idStudent = student.dataValues.cod_student;
        let dateFromDB = student.dataValues.createdAt;
        let month = (new Date(dateFromDB.toString()).getMonth() + 1).toString() < 10 ? '0' + (new Date(dateFromDB.toString()).getMonth() + 1).toString() : new Date(dateFromDB.toString().getMonth() + 1);
        let day = new Date(dateFromDB.toString()).getDate()
        let data = `${day}/${month}`

        requirementsDAO.save(data, false, idStudent, gymId).then(requirement => {
            res.status(200).json(message("Solicitacao enviada com sucesso"))
        }).catch(err => {
            console.error("Nao foi possivel enviar solicitacao. Erro " + err)
            res.status(500).json(fail("Nao foi possivel enviar solicitacao. Erro", err));
        });
        //res.status(201).json(success(student, 'payload', "Student salvo com sucesso"));
    }).catch(erro => {
        console.log('erro -> ' + erro)
        res.status(500).json(fail("Internal Server Error", erro));
    });


});

//todo sera excluido a solicitacao da tabela
router.post('/login', (req, res) => {


    const { email, password } = req.body;
    requirementsDAO.verifyAuthenticationStudent(email, password).then(requirement => {
        if (requirement.aproved) {
            res.status(200).json(success(requirement, "payload", "Usuario devidamente autenticado"));
        } else {
            res.status(500).json(fail("Usuario nao autenticado"));
        }
    }).catch(err => {
        res.status(500).json(fail(" verifyAuthenticationStudent " + err));
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
        });

});



*/
module.exports = router;