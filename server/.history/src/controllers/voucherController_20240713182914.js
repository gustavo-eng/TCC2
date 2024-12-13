var path = require('path');
const statusCode = require('../utils/statusCode.json');
//Response
const { fail } = require('../helpers/response');

exports.getImage = (req, res) => {

    const { voucherPath, idAthlete } = req.params;

    const fullVoucherPath = path.join(__dirname, '..', `uploads/${idAthlete}`, voucherPath);
    if (!fullVoucherPath) return res.status(statusCode.NO_CONTENT).json(fail("No directory found"));

    res.sendFile(fullVoucherPath, err => {
        if (err) return res.status(404).json(fail("Image not found."));
    });

};

exports.deleteImage = (req, res) => {
    console.log('Rota para deletar imagem')
}


