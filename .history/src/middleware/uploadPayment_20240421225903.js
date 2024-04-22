const multer = require("multer");


const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        console.log("Nome do arquivo comeca com Image (startsWith)");
        cb(null, true);

    } else {
        console.log("NOT startsWith");
        cb('Please upload only images ', false);
    }
}


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //todo trocar esse uploads utilizando o dirname
        //todo trocar no final
        console.log("destination chegou aqui")
        cb(null, "src/uploads");

    },
    filename: (req, file, cb) => {
        //req.id, req.username
        cb(null, `${Date.now()}-${file.originalname}`)
    }

});
//todo compreender este imageFilter
var uploadFilePayment = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFilePayment;