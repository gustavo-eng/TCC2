
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


