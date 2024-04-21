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
        cb(null, "./uploads")
    }
})

