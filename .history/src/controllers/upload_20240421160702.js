const fs = require("fs");

const { Image } = require('../model/Image');
//require(`../uploads`)
console.log("no controlador")

// funcao que pode estar dentro do modelo
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
                "../uploads/" + req.file.filename
            ),
        }).then((image) => {
            console.log('deu certo dentro de imageCreate')
            fs.writeFileSync(
                "../uploads/" + image.name,
                image.data
            );
            return res.send(`File has been uploaded.`);
        })
    } catch (err) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }

}


module.exports = {
    uploadFiles,
};