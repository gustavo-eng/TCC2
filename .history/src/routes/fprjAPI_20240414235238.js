/*

    CNPJ_FRPJ
    Nome_Presidente
    Rua
    Numero
    Telefone

*/

const express = require("express");
const router = express.Router();

const fprjDAO = require('../model/fprj');

let { fail, success } = require('../helpers/response');

router.get('/', (req, res) => {
    fprjDAO.list().then(fprj => {
        res.status(200).json(success(fprj, "payload", "Lista de federções"))ç
    }).catch(err => {
        res.status(404).json(fail("Nenhuma federacao encontrada"));
    });

});

module.exports = router;