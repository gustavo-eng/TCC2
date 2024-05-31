var path = require('path');

//Response
const { fail } = require('../helpers/response');

exports.getImage = (req, res) => {

    const { voucherPath } = req.params;

    const fullVoucherPath = path.join(__dirname, '..', 'uploads', voucherPath);

    //Caso nao der erro. Simplesmente envia a imagem
    res.sendFile(fullVoucherPath, err => {
        if (err) return res.status(404).json(fail(" Image not found. "));
    });

};
