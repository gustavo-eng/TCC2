const multer = require("multer");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //todo trocar esse uploads utilizando o dirname
        //todo trocar no final
        console.log("destination chegou aqui")
        cb(null, __basedir + "src/uploads");

    },
    filename: (req, file, cb) => {
        //determina o nome do arquivo dentro da pasta de destino
        console.log("filename chegou aqui")
        //cb(null, `${Date.now()}-${file.originalname}`)
        cb(null, `${Date.now()}-${file.originalname}`)

        //cb(null, `${Date.now()}-bezkoder-${file.originalname}`)
    }

});
//todo compreender este imageFilter
var uploadFile = multer({ storage: storage /*, fileFilter: imageFilter */ });
module.exports = uploadFile;