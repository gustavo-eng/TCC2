const { FprjModel } = require('../model/fprj');
const { GymModel } = require('../model/gym');
const { StudentModel } = require('../model/student');

const returnUser = async (email, password) => {
    // fprj = await FprjModel.findOne({ where: { email: email, password: password }, raw: true });
    try {
        const student = await StudentModel.findOne({ where: { email, password } });
        if (student) return student.get({ plain: true });
        console.log(' -- partNer -- StudentModel.primaryKeyAttribute() ');
        console.log(StudentModel.primaryKeyAttribute())
        //User.primaryKeyAttribute()
        const gym = await GymModel.findOne({ where: { email, password } });
        if (gym) return gym.get({ plain: true });

        const fprj = await FprjModel.findOne({ where: { email, password } });
        if (fprj) return fprj.get({ plain: true });

        return null;
        // Retorna null se nenhum usuário for encontrado
    } catch (err) {
        console.error("Erro ao descobrir usuário:", err);
        return null;
    }
};

const verigyTypeOfUser = {
    returnUser,
    consoleLog: () => console.log("Olá")
};

module.exports = verigyTypeOfUser;
