const { FprjModel } = require('../model/fprj')
const { GymModel } = require('../model/gym');
const { StudentModel } = require('../model/student');


returnUser = async (email, password) => {
    let student, gym, fprj;
    try {

        student = await StudentModel.findOne({ where: { email: email, password: password } }).then(user => user);
        gym = await GymModel.findOne({ where: { email: email, password: password } }).then(user => user);
        fprj = await FprjModel.findOne({ where: { email: email, password: password } }).then(user => user);

        if (student != null && student != "" && student != undefined) student;
        if (gym != null && gym != "" && gym != undefined) gym;
        if (fprj != null && fprj != "" && fprj != undefined) fprj;


    } catch (err) {
        console.log("Erro ao descobirir usuario")
        return null
    }

}

const verigyTypeOfUser = {
    returnUser: returnUser,
    console: () => console.log("ola")
}


module.exports = verigyTypeOfUser;