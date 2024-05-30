const db = require('../config/db');
const { success, fail } = require('../helpers/response');
const payment = require('../model/payment');
const Gym = db.Gym;
const Athlet = db.Athlet;
const Address = db.Address;
const Payment = db.Payment;


exports.findAll = async (req, res) => {
    try {
        const gyms = await Gym.findAll();
        return res.status(200).json(success(gyms, "payload", "Gym listed successfully"));
    } catch (err) {
        return res.status(500).json(fail("No gym found. Error -> " + err.message));
    }
}


exports.create = async (req, res) => {

    const {
        cnpj,
        sensei,
        name,
        phone,
        password,
        state,
        neighborhood,
        street,
        number,
        city
    } = req.body;

    const newAddress = {
        state,
        neighborhood,
        street,
        number,
        city
    }

    try {

        const address = await Address.create(newAddress);

        const newGym = {
            cnpj,
            sensei,
            name,
            phone,
            password,
            role: "gym",
            idAddress: address.idAddress
        };


        const gym = await Gym.create(newGym);
        return res.status(200).json(success(gym, "payload", "Gym created successfully"));

    } catch (err) {
        if (err.name === 'SequelizeValidationError') {
            return res.status(400).json(fail("Validation Error: " + err.message));
        }
        return res.status(500).json(fail("Server Error: " + err.message));
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
        // Encontre os IDs dos atletas na academia especificada
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


exports.findPaymentsOfEvent = async (req, res) => {

    try {

        //idEvent
        const { idEvent } = req.params;
        // De acordo com o ID do evento e os IDs do alunos daquela academia
        const payment = Payment.findAll(
            {
                where: { idEvent: idEvent, },
                include: ['Event']
            }
        )
        console.log('&& Pagameno listado && ');
        payment.then(el => console.log('el payment ->' + el)).catch(err => {
            console.log('err Payment --> ' + err)
        })
        return res.status(200).json({ msg: "  OKKKK Teste de aplicacao " });


    } catch (err) {

        return res.status(200).json({ msg: " Error . -- > " + err });

    };

}




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
