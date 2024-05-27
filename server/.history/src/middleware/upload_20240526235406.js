const multer = require("multer");
const path = require('path')

const uploadDir = path.join(__dirname, '..', 'uploads');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {

        cb(null, "./uploads");

    },
    filename: (req, file, cb) => {

        //determina o nome do arquivo dentro da pasta de destino
        //+ path.extname(file.originalname)
        console.log('path.extname(file.originalname)');
        console.log(path.extname(file.originalname));
        cb(null, req.user + path.extname(file.originalname));
        //cb(null, `${Date.now()}-${req.body.description ? req.body.description : "naoExisteName"}-${file.originalname}`)

    }


});
//todo compreender este imageFilter
var uploadFile = multer({ storage: storage /*, fileFilter: imageFilter */ });
module.exports = uploadFile;

