const db = require('../config/db');
const { success, fail } = require('../helpers/response');
const Gym = db.Gym;
const Athlet = db.Athlet;
const Address = db.Address;

exports.findAll = async (req, res) => {
    try {
        const gyms = await Gym.findAll();
        return res.status(200).json(success(gyms, "payload", "Gym listed successfully"));
    } catch (err) {
        return res.status(500).json(fail("No gym found. Error -> " + err.message));
    }
}


exports.create = async (req, res) => {

    console.log("create gymmmm ")

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

        let athlets = Athlet.findAll({
            where: {
                idGym: idGym,
            },
        }) *


            //athlets = JSON.stringify(athlets)
            let athletsIds = [];
        console.log('athlett')
        console.log('plain true')
        console.log(athlets)



        athlets.then(el => {
            console.log('Athlets:', JSON.parse(JSON.stringify(el))[0]); // Formata os dados em uma string legível
            athletsIds = el.filter(el => el['idGym'] === idGym).map(athlet => athlet.idAthlete);
        }).catch(err => {
            console.error('Error fetching athlets:', err);
        });

        console.log('athletsIds ---- ')
        console.log(athletsIds)


        //Retorna uma lista dos ids dos alunos daquela academia especifica
        //const array1 = obj.payload.filter(el => el['idAtleta']  === 1).map(atlhetId => atlhetId.idAtleta)

        return res.status(200).json({ message: 'Lista dos ids dos atleas', list: athlets });
        //let athletsIds =

        //retornar todos os alunos que possuem o  mesmo id que o id da
        //academia que estou loggado.


    } catch (err) {
        return res.status(500).json({ msg: "Erro no JSON. Error --> " + err });
    }

}

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
