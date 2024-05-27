const e = require("express");
const multer = require("multer");
const path = require('path')

const uploadDir = path.join(__dirname, '..', 'uploads');
/*
var filterImage = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(allowedTypes)) {
        const error = new Error('Invalid file type');
        error.code = 'INVALID_FILE_TYPE';
        return cb(error, false);
    } else {
        cb(null, true);
    }
}
*/
var filterImage = (req, file, cb) => {
    const allowedExtensions = ['.jpeg', '.png'];

    // Obter a extensão do arquivo
    const fileExtension = file.originalname.toLowerCase().slice(-5);

    // Verificar se a extensão é permitida
    if (allowedExtensions.some(ext => fileExtension.endsWith(ext))) {
        cb(null, true);
    } else {
        const error = new Error('Invalid file type');
        console.log('4444444444 errorr 444444444')
        error.code = 'INVALID_FILE_TYPE';
        cb(error, false);
    }
}

var storage = multer.diskStorage({
    destination: (req, file, cb) => {

        //cb(null, "src/uploads");
        cb(null, uploadDir);

    }, // file name - Adicionar nome, evento e categoria (se necessario)
    filename: (req, file, cb) => { // caso nao tiver categoria mandar (prefix indicativo)
        cb(null, req.user + path.extname(file.originalname));
        //cb(null, `${Date.now()}-${req.body.description ? req.body.description : "naoExisteName"}-${file.originalname}`)
    }

});
//todo compreender este imageFilter
var uploadFile = multer({
    storage: storage,
    fileFilter: filterImage,
    limits: { fileSize: 1000000 } //1MB
});
module.exports = uploadFile;

