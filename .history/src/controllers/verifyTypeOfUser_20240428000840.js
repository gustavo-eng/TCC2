const { verifyFPRJ } = require('../model/fprj')
const { GymModel } = require('../model/gym');
const { StudentModel } = require('../model/student');


returnUser = (email, password) => {
    let student, gym, fprj;
    try {

        //student = await StudentModel.findOne({ where: { email: email, password: password } })
        // gym = await GymModel.findOne({ where: { email: email, password: password } })
        // fprj = await FprjModel.findOne({ where: { email: email, password: password } })
        fprj = verifyFPRJ(email, password);
        //if (student != null && student != "" && student != undefined) student;
        //if (gym != null && gym != "" && gym != undefined) gym;
        if (fprj != null && fprj != "" && fprj != undefined) {
            return fprj.get({ plain: true });;
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