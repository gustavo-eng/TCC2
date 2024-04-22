const multer = require("multer");
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

console.log('dirname')
console.log(__dirname)
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //todo trocar esse uploads utilizando o dirname
        //todo trocar no final
        console.log("destination chegou aqui")
        cb(null, "src/uploads");

    },
    filename: (req, file, cb) => {
        //determina o nome do arquivo dentro da pasta de destino
        console.log("filename chegou aqui")
        cb(null, `${Date.now()}-bezkoder-${file.originalname}`)
        console.log("passou de filename")
        console.log('NOME DO ARQUIVO')
        console.log(`${Date.now()}-bezkoder-${file.originalname} \n \n `)
        //cb(null, `${Date.now()}-bezkoder-${file.originalname}`)
    }


});
//todo compreender este imageFilter
var uploadFile = multer({ storage: storage /*, fileFilter: imageFilter */ });
module.exports = uploadFile;

