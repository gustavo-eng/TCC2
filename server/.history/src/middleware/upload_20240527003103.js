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
// Filtro de imagem para verificar extensões permitidas

var filterImage = (req, file, cb) => { // Melhorar
    const allowedExtensions = ['.jpeg', '.jpg', '.png'];

    // Obter a extensão do arquivo
    const fileExtension = path.extname(file.originalname).toLowerCase();

    // Verificar se a extensão é permitida
    if (allowedExtensions.includes(fileExtension)) {
        cb(null, true);
    } else {
        const error = new Error('Invalid file type');
        console.log('Error: Invalid file type');
        error.code = 'INVALID_FILE_TYPE';
        cb('Erro neee', false);
    }
};

/*
var filterImage = (req, res, file, cb) => {
    const allowedExtensions = ['.jpeg', '.jpg', '.png'];
    if (file.mimetype.startsWith("image") && allowedExtensions.some(str => file.originalname.endsWith(str))) {
        cb(null, true);
    } else {
        //  return res.status(580).json({ msg: 'Errou no tipo camarada' })
        //throw new Error('INVALID_TYPE_IMAGE');
        throw new Error('Image error type')
        //cb('Error', false);
    }

};
*/
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

/*
const strings = [
  'foo',
  'bar',
  'test'
];

const targetString = 'hi, this is a test';

if (strings.some(str => targetString.endsWith(str))) {
  console.log("String ends with one of the strings!");
} else {
  console.log('No, the string does not end with any of the specified strings.');
}

*/
