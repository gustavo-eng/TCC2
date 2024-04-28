const { FprjModel } = require('../model/fprj')
const { GymModel } = require('../model/gym');
const { StudentModel } = require('../model/student');


returnUser = async (email, password) => {
    let student, gym, fprj;
    try {

        student = await StudentModel.findOne({ where: { email: email, password: password }, raw: true })
        gym = await GymModel.findOne({ where: { email: email, password: password }, raw: true });
        fprj = await FprjModel.findOne({ where: { email: email, password: password }, raw: true });

        if (fprj != null && fprj != "" && fprj != undefined) {
            return fprj;
        }


    } catch (err) {
        console.log("Erro ao descobirir usuario. Erro -> " + err)
        return null
    }

}

const verigyTypeOfUser = {
    returnUser: returnUser,
    console: () => console.log("ola")
}


module.exports = verigyTypeOfUser;