const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Fprj = sequelize.define("Fprj", {
        idFprj: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        president: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "fprj",
            allowNull: true
        }


    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });
}

/*
const FprjModel = sequelize.define('fprj', {

    cod_fprj: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_Presidente: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rua: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
});


FprjModel.sync();


module.exports = {
    list: async () => {
        const fprj = await FprjModel.findAll();
        console.log('lista de federacao')
        console.log(fprj)
        return fprj;
    },
    save: async (nomePresidente, cnpj, rua, numero, telefone, email, password) => {

        const fprj = FprjModel.create({
            nome_Presidente: nomePresidente,
            cnpj: cnpj,
            rua: rua,
            numero: numero,
            telefone: telefone,
            email: email,
            password: password,
            role: 'fprj',
        });

        return fprj;
        //
    },

    update: async (cnpj_Fprj, obj) => {
        let fprj = await FprjModel.findByPk(cnpj_Fprj);
        if (!fprj) throw new Error('A Federação não foi encontrada');

        Object.keys(obj).forEach(key => fprj[key] = obj[key]);
        await fprj.save();
        return fprj;

    },
    verifyFPRJ: async (email, password) => {
        let fprj = await FprjModel.findOne({ where: { email: email, password: password } });
        return fprj
    },
    FprjModel,


}

*/

