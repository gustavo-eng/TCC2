var path = require('path');
const statusCode = require('../utils/statusCode.json');
const fs = require('fs');
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

exports.deleteImage = ({ idAthlete }) => {
    const directoryPath = path.join(__dirname, '..', 'uploads', `${idAthlete}`);
    if (fs.existsSync(directoryPath)) {
        try {
            fs.rmSync(directoryPath, { recursive: true, force: true });
        } catch (error) {
            throw new Error(' Error to delete image!');
        }
    }
    //console.log('Rota para deletar imagem')
}


