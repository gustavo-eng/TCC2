const fs = require("fs");

const { Image } = require('../model/Image');
//require(`../uploads`)
console.log("no controlador")
//require('../uploads')
// funcao que pode estar dentro do modelo
console.log("DIIIIIIIIIIIIIIIIIIIIIRNAMEEEEEE")
console.warn(__dirname)
//src\uploads
//C:\Users\diasg\Desktop\TCC2\app\src\uploads
const uploadFiles = async (req, res) => {
    console.log("************************** uploadFiles")
    try {
        console.log("req.file controllers")
        console.log(req.file)
        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }

        Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,

            data: fs.readFileSync(
                "C:/Users/diasg/Desktop/TCC2/app/src/uploads/" + req.file.filename
                //"C:/Users/diasg/Desktop/TCC2/app/src/uploads/" + `${Date.now()}-bezkoder-${req.file.filename}`
                //"../uploads/" + req.file.filename
            ),
        }).then((image) => {
            console.log('deu certo dentro de imageCreate')

            fs.writeFileSync(
                "C:/Users/diasg/Desktop/TCC2/app/src/uploads/" + image.name,
                //"../uploads/" + image.name,
                image.data
            );

            return res.send(`File has been uploaded.`);
        })
    } catch (err) {
        console.log(err);
        return res.send(`Error when trying upload images: ${err}`);
    }

}
console.log('sai controler')

module.exports = {
    uploadFiles,
};