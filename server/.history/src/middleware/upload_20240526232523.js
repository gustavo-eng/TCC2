const multer = require("multer");
const path = require('path')
//require('../uploads')
/*
const imageFilter = (req, file, cb) => {
    // filtro para permitir apenas a passagem de imagem
    if (file.mimetype.startsWith("image")) {
        console.log("Nome do arquivo comeca com Image (startsWith)");
        // cb(null, true);

    } else {
        console.log("NOT startsWith");
        cb('Please upload only images ', false);
    }
}

*/

//C:\Users\diasg\Desktop\TCC2\app\src\uploads
//src\uploads

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //todo trocar esse uploads utilizando o dirname
        //todo trocar no final
        console.log("destination chegou aqui")
        cb(null, "src/uploads/");

    },
    filename: (req, file, cb) => {

        //determina o nome do arquivo dentro da pasta de destino
        //+ path.extname(file.originalname)
        console.log('path.extname(file.originalname)')
        console.log(path.extname(file.originalname))
        cb(null, req.user + path.extname(file.originalname) + 'teste');
        //cb(null, `${Date.now()}-${req.body.description ? req.body.description : "naoExisteName"}-${file.originalname}`)

    }


});
//todo compreender este imageFilter
var uploadFile = multer({ storage: storage /*, fileFilter: imageFilter */ });
module.exports = uploadFile;

