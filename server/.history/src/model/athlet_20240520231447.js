const { DataTypes } = require('sequelize');



/*
cpf
birth
idAthlete
idGym
phone
name
email
password

*/

console.log("modelo athlet")

module.exports = (sequelize, Sequelize) => {
    //todo unique ?
    const Athlete = sequelize.define("Athlete", {
        idAthlete: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        birth: {
            type: DataTypes.DATEONLY,
            allowNull: true,

        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });


    return Athlete;
}



/*


const StudentModel = sequelize.define('Student',
    {

        cod_student: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cpf: {

            type: DataTypes.STRING,
            //unique: true,
            allowNull: true
        },
        role: {
            type: DataTypes.STRING,
            allowNull: true,
            //defaultValue: "student"
        }, // admin é o responsável por cadastrar os usuários e realiz
    }, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
}
);


StudentModel.belongsTo(GymModel, {
    constraint: true,
    foreignKey: 'gymId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});



GymModel.hasMany(StudentModel, {
    constraint: true,
    foreignKey: 'gymId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});


StudentModel.hasMany(paymentModel, {
    foreignKey: 'studentId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

paymentModel.belongsTo(StudentModel, {
    foreignKey: 'studentId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});


StudentModel.sync();
paymentModel.sync();



module.exports = {

    list: async () => {
        const students = await StudentModel.findAll();
        return students;
    },
    save: async (name, email, password, cpf, gymId) => {
        const student = await StudentModel.create({
            name: name,
            email: email,
            password: password,
            cpf: cpf,
            role: "student",
            gymId: gymId,
        });
        return student;
    },
    update: async (id, obj) => {
        let student = await StudentModel.findByPk(id);
        if (!student) return false;
        Object.keys(obj).forEach(key => student[key] = obj[key]);
        await student.save();
        return student;
    },
    delete: async (id) => {
        return await StudentModel.destroy({ where: { cod_student: id } });
    },
    findSpecific: async (id) => { // para teste
        return await StudentModel.findByPk(id);
    },
    getStudentByEmailAndPassword: async (email, password) => {
        const student = await StudentModel.findOne({ where: { email: email, password: password } });
        //todo adicionar verificacao para analisar tabela de solicitacao
        if (student == null || student == undefined || student == "") {
            throw new Error('Não existe aluno cadastrado');
        } else {
            return student
        }
    },
    StudentModel,
}
*/


