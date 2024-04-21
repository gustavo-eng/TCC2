const multer = require("multer");
//require('../uploads')
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
        cb(null, "../uploads");

    },
    filename: (req, res, cb) => {
        cb(null, `${Date.now()}-bezkoder-${file.originalname}`)
    }


});
//todo compreender este imageFilter
var uploadFile = multer({ storage: storage, fileFilter })

