const db = require('../config/db');
const { success, fail } = require('../helpers/response');
const payment = require('../model/registration');
const Gym = db.Gym;
const Athlet = db.Athlet;
const Address = db.Address;
const Payment = db.Payment;
const statusCode = require('../utils/statusCode.json');


exports.findAll = async (req, res) => {
    try {
        const gyms = await Gym.findAll();
        return res.status(200).json(success(gyms, "payload", "Gym listed successfully"));
    } catch (err) {
        return res.status(500).json(fail("No gym found. Error -> " + err.message));
    }
}


exports.create = async (req, res) => {

    try {

        const {
            cnpj,
            sensei,
            name,
            phone,
            password,
            email,
            neighborhood,
            street,
            number,
            city
        } = req.body;

        const newGym = {
            cnpj,
            sensei,
            name,
            phone,
            password,
            email,
            neighborhood,
            street,
            number,
            city,
            role: "gym",
        };

        const gym = await Gym.create(newGym);
        return res.status(statusCode.CREATED).json(success(gym, "payload", "Gym created successfully"));

    } catch (err) {
        if (err.name === 'SequelizeValidationError') {
            return res.status(statusCode.BAD_REQUEST).json(fail("Validation Error: " + err.message));
        }
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Server Error: " + err.message));
    }
}

exports.getAdrress = async (req, res) => {

    const { id } = req.params;
    const address = await Address.findByPk(id, { include: ['Gym'] });

    if (!address) return res.status(404).json(fail("Address not found"));

    return res.status(200).json(success(address, "payload", "Address found"));
}


exports.delete = async (req, res) => {

    const { id } = req.params;

    const gym = await Gym.findByPk(id);

    await gym.destroy().then(() => {
        return res.status(200).json(success({}, "payload", "Gym deleted successfully"));
    }).catch(err => {
        return res.status(500).json(fail("Server Error: " + err.message));
    });

}

exports.findAllPayments = async (req, res) => {

    try {

        const { idGym } = req.params;

        const athlets = await Athlet.findAll({
            attributes: ["idAthlete"],
            where: {
                idGym: idGym,
            },
        });

        // Mapeie os IDs dos atletas em uma lista
        const athletIds = athlets.map(athlet => athlet.idAthlete);

        // Encontre os pagamentos dos atletas com os IDs mapeados
        const payments = await Payment.findAll({
            where: {
                idAthlet: athletIds,
            },
        });

        if (!athlets || !payments) return res.status(404).json(fail("Payment not found"));

        // Retorne os pagamentos
        return res.status(200).json(success(payments, "payload", "Listado com sucesso"));

    } catch (err) {
        // Se houver um erro, retorne uma resposta de erro
        return res.status(500).json(fail("Server error -> " + err));
    }

}

exports.update = async (req, res) => {

    try {
        const { idGym } = req.params;

        const gym = await Gym.findByPk(idGym);
        if (!gym) return res.status(statusCode.NOT_FOUND).json(fail("Gym not found"));


        const {
            cnpj,
            sensei,
            name,
            phone,
            password,
            email,
            neighborhood,
            street,
            number,
            city
        } = req.body;

        let obj = {};
        if (cnpj) obj.cnpj = cnpj;
        if (sensei) obj.sensei = sensei;
        if (name) obj.name = name;
        if (phone) obj.phone = phone;
        if (password) obj.password = password;
        if (email) obj.email = email;
        if (neighborhood) obj.neighborhood = neighborhood;
        if (street) obj.street = street;
        if (number) obj.number = number;
        if (city) obj.city = city;
        // Atualize o pagamento

        //Neste caso, mesmo se o usuario nao digitar nada, vai manter o objeto anterior
        if (Object.keys(obj).length != 0) Object.keys(obj).forEach(key => gym[key] = obj[key]);


    } catch (err) {
        res.status(statusCode.BAD_REQUEST).json(fail("Error server. Error -> " + err));
    }




}


// Esse middleware retorna todos os pagamentos dos alunos daquela academia
//de um deterterminado evento
exports.findPaymentsOfEvent = async (req, res) => {
    try {

        const { idEvent } = req.params;
        const { idGym } = req.body;

        // Obtém os IDs dos atletas daquela academia
        //Obtem todos os alunos daquela academia
        const athlets = await Athlet.findAll({
            attributes: ["idAthlete"],
            where: {
                idGym: idGym,
            },
        });

        // Mapeia os IDs dos atletas em uma lista
        const athletIds = athlets.map(athlet => athlet.idAthlete);

        // Consulta os pagamentos com os IDs dos atletas e ID do evento
        const payments = await Payment.findAll({
            where: { idEvent: idEvent, idAthlet: athletIds },
            include: ['Event', 'Athlet'],
        });

        if (!payments || payments.length === 0) {
            return res.status(404).json(fail("No payments found for the given event and gym."));
        }


        return res.status(200).json(success(payments, "payload", "Payments found successfully"));

    } catch (err) {
        return res.status(500).json(fail("Server error -> " + err));
    }
};




//Proximo passo estabelecer uma lista para busca
//https://stackoverflow.com/questions/24920427/sequelize-error-when-using-where-and-in-on-a-subarray

//const athletsIds = athlets["payload"].filter(el => el['idGym'] === idGym).map(athlet => athlet.idAthlete);
/*
Post.findAll({
  where: {
    authorId: 2,
  },
});
// SELECT * FROM post WHERE authorId = 2;

*/



/*

const book = await BookModel.findByPk(id)
        return book.destroy()
 delete: async (cnpj_Academia) => {
        await GymModel.destroy({ where: { cnpj_Academia: cnpj_Academia } });
    },
*/
