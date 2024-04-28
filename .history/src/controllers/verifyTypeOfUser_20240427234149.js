const { FprjModel } = require('../model/fprj')
const { GymModel } = require('../model/gym');
const { StudentModel } = require('../model/student');


returnUser = async (email, password) => {
    let student, gym, fprj;
    try {
        student = StudentModel.findOne({ where: { email: email, password: password } });

    } catch (err) {
        console.log("Erro ao descobirir usuario")
    }


}