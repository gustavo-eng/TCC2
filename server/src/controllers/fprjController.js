const db = require('../config/db');
const Fprj = db.Fprj;
const { success, fail, message } = require('../helpers/response');
const statusCode = require('../utils/statusCode.json');
const bcrypt = require('bcrypt');

exports.findAll = async (req, res) => {

    try {
        const fprj = await Fprj.findAll();

        if (fprj.length === 0) {
            return res.status(404).json(fail("Nenhuma Fprj encontrada"));
        }

        return res.status(200).json(success(fprj, "payload", "Fprj listadas com sucesso!"));

    } catch (err) {
        console.error("Erro ao listar Fprj:", err);
        return res.status(500).json(fail("Erro no servidor: " + err.message));
    }
};


exports.create = async (req, res) => {
    try {

        console.log('body create fprj => ');
        console.log(req.body);

        const {
            president,
            phone,
            email,
            password
        } = req.body;

        let setFPRJ = {
            president,
            phone,
            email,
            password: bcrypt.hashSync(password, 10),
            role: "fprj"
        }
        // Verificar se já existe uma federação cadastrada
        if (await Fprj.findOne()) return res.status(statusCode.BAD_GATEWAY).json(fail("There is already a registered FPRJ"));

        // Criar nova federação
        const fprj = await Fprj.create(setFPRJ);
        return res.status(201).json(success(fprj, "payload", "Federação cadastrada com sucesso."));

    } catch (err) {
        return res.status(500).json(fail("Erro no servidor: " + err.message));
    }
};


exports.delete = async (req, res) => {2


    try {

        const fprj = await Fprj.findOne(); // Use await to properly get the Fprj object

        if (!fprj) return res.status(statusCode.BAD_REQUEST).json(fail("Not exist fprj"))
        await fprj.destroy();

        return res.status(200).json(success({}, "payload", "Fprj deleted successfully"));
    } catch (err) {
        return res.status(500).json(fail("Server Error: " + err.message));
    }
};


exports.update = async (req, res) => {
    try {

        const { president, phone, email, password } = req.body;
        console.log('atualizando fprj')
        console.log(req.body)

        const fprj = await Fprj.findOne();

        let obj = {};
        if (president) obj.president = president;
        if (phone) obj.phone = phone;
        if (email) obj.email = email;
        if (password) obj.password = bcrypt.hashSync(password, 10); //password

        if (Object.keys(obj).length != 0) Object.keys(obj).forEach(key => fprj[key] = obj[key]);


        await fprj.save().then(event => {
            res.status(statusCode.OK).json(success(event, "payload", "Event updated successfully"));
        }).catch(err => {
            res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Error updating event: " + err));
        })

    } catch (err) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Server Error: " + err));
    }
}



