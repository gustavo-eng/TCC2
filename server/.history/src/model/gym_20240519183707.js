const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

    const Gym = sequelize.define("Gym", {
        idGym: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: tru,
        },
        cnpj: {
            type: DataTypes.NUMBER,
            allowNull: true
        },
        sensei: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true

        },
        phone: {
            type: DataTypes.NUMBER,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "gym",
            allowNull: true
        }
    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });

    return Gym;

}





//const { requerimentsModel } = require('./requirements');



/*

    idAcademia
    sensei
    role
    name
    cnpj
    phone
    password

*/

/*
const GymModel = sequelize.define('Gym', {
    cod_gym: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cnpj_Academia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nomeProfessor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nomeAcademia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
    }


}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
}
);
*/




/*
GymModel.sync();

module.exports = {

    list: async () => {
        const gyms = GymModel.findAll();
        return gyms;
    },

    save: async (email, senha, telefone, rua, bairro, numero, cnpj_Academia, nomeProfessor, nomeAcademia) => {
        const gym = GymModel.create({
            email: email,
            password: senha,
            telefone: telefone,
            rua: rua,
            bairro: bairro,
            numero: numero,
            cnpj_Academia: cnpj_Academia,
            nomeProfessor: nomeProfessor,
            nomeAcademia: nomeAcademia,
            role: 'gym'
        });

        return gym;

    },

    findSpecific: async (cnpj_Academia) => {
        return await GymModel.findByPk(cnpj_Academia);
    },
    update: async (cnpj_Academia, obj) => {
        let gym = await GymModel.findByPk(cnpj_Academia);
        if (!gym) return false
        Object.keys(obj).forEach(key => gym[key] = obj[key]);
        await gym.save();
        return gym;
    },
    delete: async (cnpj_Academia) => {
        await GymModel.destroy({ where: { cnpj_Academia: cnpj_Academia } });
    },
    authenticateGym: async (email, senha) => {
        try {
            const gym = await GymModel.findOne({ where: { email: email, senha: senha } });
            return gym;
        } catch (err) {
            throw new Error('Nao existe aluno cadastrado para essa academia. Erro -> ' + err);
        }
    },
    GymModel,
}

*/