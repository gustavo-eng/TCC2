
const express = require("express");
const router = express.Router();




/*


// lista todas as federacoes cadastradas
router.get('/', (req, res) => {

    fprjDAO.list().then(fprj => {
        res.status(200).json(success(fprj, "payload", "Lista de federções HAH1"));
    }).catch(err => {
        res.status(404).json(fail("Nenhuma federacao encontrada HAH2"));
    });

});


router.post('/test', (req, res) => {

    const { email, password } = req.body;

    fprjDAO.verifyFPRJ(email, password).then(fprj => {
        res.status(200).json(success(fprj, "payload", "fprj encontrada"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao verificar fprj. Erro -> " + err));
    });

});

// Adicionar middleware para salvar apenas se tiver menos de duas federacoes
// A segunda federacao eh para o desenvolvedor

router.post('/', (req, res) => {

    const { nomePresidente, cnpj, rua, numero, telefone, email, password } = req.body;

    fprjDAO.save(nomePresidente, cnpj, rua, numero, telefone, email, password).then(fprj => {
        res.status(200).json(success(fprj, "payload", "Federacao cadastrada com sucesso"));
    }).catch(err => {
        res.status(500).json(fail("Erro ao cadastrar federacao. Erro" + err));
    });


});

*/



module.exports = router;