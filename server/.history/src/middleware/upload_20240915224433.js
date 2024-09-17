const multer = require("multer");
const path = require('path');
const fs = require('fs');

//const uploadDir = path.join(__dirname, '..', 'uploads');

// Função para filtrar arquivos com extensão jpeg, jpg ou png
const filterImage = (req, file, cb) => {

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

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const userUploadDir = `./src/uploads/${req.userId}`;
        console.log('req.userId ', req.userId)
        cb(null, userUploadDir);
        //cb(null, uploadDir);

        if (!fs.existsSync(userUploadDir)) {
            fs.mkdirSync(userUploadDir, { recursive: true });
        }

        cb(null, userUploadDir);

    },
    filename: (req, file, cb) => {
        cb(null, `${req.body.idEvent}${req.body.idCategory ? `_${req.body.idCategory}` : ''}` + path.extname(file.originalname));
    }
});

// Configuração do multer com filtro e limitação de tamanho
var uploadFile = multer({
    storage: storage,
    fileFilter: filterImage,
    limits: { fileSize: 1 * 1024 * 1024 } //1MB
});

module.exports = uploadFile;