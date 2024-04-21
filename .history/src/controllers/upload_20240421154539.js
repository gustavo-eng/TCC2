const fs = require("fs");

const { Image } = require('../model/Image');
//require(`../uploads`)

// funcao que pode estar dentro do modelo
const uploadFiles = async (req, res) => {
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
        })
    } catch (err) {

    }

}