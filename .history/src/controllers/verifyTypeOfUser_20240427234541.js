const { FprjModel } = require('../model/fprj')
const { GymModel } = require('../model/gym');
const { StudentModel } = require('../model/student');


returnUser = async (email, password) => {
    let student, gym, fprj;
    try {

        student = StudentModel.findOne({ where: { email: email, password: password } });
        gym = GymModel.findOne({ where: { email: email, password: password } });
        fprj = await FprjModel.findOne({ where: { email: email, password: password } });

        if (student != null && student != "" && student != undefined) student;
        if (gym != null && gym != "" && gym != undefined) gym;
        if (fprj != null && fprj != "" && fprj != undefined)


    } catch (err) {
        console.log("Erro ao descobirir usuario")
    }


}