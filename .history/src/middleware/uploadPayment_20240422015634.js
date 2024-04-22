const multer = require("multer");
const path = require('path');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Configurando o body-parser para analisar corpos de requisição codificados em URL
app.use(bodyParser.urlencoded({ extended: true }));

const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);

    } else {
        cb('Please upload only images ', false);
    }
}

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('req')
        console.log(req.body)
        const uploadDir = path.join(__dirname, '..', 'uploads');
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        //req.id, req.username
        console.log("[][]][][][][] req")
        console.log(req.userPermission)
        console.log('req.body')
        console.log(req.body)

        console.log(req.ip)
        cb(null, `${req.body.description ? req.body.description : "naoExisteName"}-${file.originalname}`)
        cb(null, `${Date.now()}-${file.originalname}`)
    }

});

var uploadFilePayment = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFilePayment;