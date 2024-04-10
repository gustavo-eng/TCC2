const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const moment = require('moment');



/*
    data
    Cod_Aluno
    CNPJ_Academia
    aproved
*/


const requerimentsModel = sequelize.define('Requirements', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    data: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    aproved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }

}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
}
);

requerimentsModel.sync({ alter: true });

module.exports = {
    // list funcao apenas utilizada para teste
    //todo criar rotina para buscar solicitacoes de acordo com o aluno ou academia
    list: async () => {
        const requeriments = await requerimentsModel.findAll();
        return requeriments;
    },
    save: async (data, aproved) => {
        const requirement = await requerimentsModel.create({
            data: data,
            aproved: aproved,
        });

        return requirement;
    },
    delete: async (id) => {
        return await requerimentsModel.destroy({ where: { id: id } });
    },
    findSpecific: async (id) => {
        return await requerimentsModel.findByPk(id);
    }


}


