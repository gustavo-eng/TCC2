var path = require('path');

//Response
const { fail } = require('../helpers/response');

exports.getImage = (req, res) => {

    console.log('-------- getImage --------')
    console.log(req.params)

    const { voucherPath, idAthlete } = req.params;


    const fullVoucherPath = path.join(__dirname, '..', `uploads/${idAthlete}`, voucherPath);
    console.log('fullVoucherPath')
    console.log(fullVoucherPath)
    //Caso nao der erro. Simplesmente envia a imagem
    res.sendFile(fullVoucherPath, err => {
        if (err) return res.status(404).json(fail(" Image not found. "));
    });

};


