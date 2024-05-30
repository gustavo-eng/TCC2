const multer = require("multer");
const path = require('path');


const uploadDir = path.join(__dirname, '..', 'uploads');


//name image - userId_EventId.extname

// Função para filtrar arquivos com extensão jpeg, jpg ou png
const filterImage = (req, file, cb) => {

    console.log('filterImage  - req.body - ');
    console.log(req.body)

    /*
    idAthlet: '14',
    idCategory: '1',
    idEvent: '1'
    */

    const allowedExtensions = ['.jpeg', '.jpg', '.png'];

    const fileExtension = path.extname(file.originalname).toLowerCase();

    if (file.mimetype.startsWith("image") && allowedExtensions.includes(fileExtension)) {
        cb(null, true);
    } else {
        const error = new Error('Invalid file type');
        error.code = 'INVALID_FILE_TYPE';
        cb(error, false);
    }
};

// Configuração do armazenamento com destino usando __dirname
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        //temporario nameId no login
        //req.user_idEvent
        //cb(null, req.user + path.extname(file.originalname));
        cb(null, `${req.user}_${req.body.idEvent}` + path.extname(file.originalname));
    }
});

// Configuração do multer com filtro e limitação de tamanho
var uploadFile = multer({
    storage: storage,
    fileFilter: filterImage,
    limits: { fileSize: 1 * 1024 * 1024 } // Limite de tamanho de 1MB
}); // Defina o campo que você espera que o arquivo seja enviado

module.exports = uploadFile;


/*
const multer = require("multer");
const path = require('path')

const uploadDir = path.join(__dirname, '..', 'uploads');



var filterImage = (req, file, cb) => { // Melhorar

    const allowedExtensions = ['.jpeg', '.jpg', '.png'];

    const fileExtension = path.extname(file.originalname).toLowerCase();

    if (allowedExtensions.includes(fileExtension)) {
        cb(null, true);
    } else {
        const error = new Error('Invalid file type');
        error.code = 'INVALID_FILE_TYPE';
        cb('Erro neee', false);
    }


};


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
//https://stackoverflow.com/questions/47673533/how-to-catch-the-error-when-i-am-using-file-filter-in-multer

*/
