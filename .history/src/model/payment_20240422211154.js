const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const paymentModel = sequelize.define('Payment', {
    Cod_Payment: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    aproved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    pathVoucher: {
        type: DataTypes.STRING,
        allowNull: true
    },
    /*
    blobVoucher: {
        type: DataTypes.BLOB("long"),
        allowNull: true
    },
    */
    yearCategory: {
        type: DataTypes.STRING,
        allowNull: true
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
});


paymentModel.sync({ alter: true });

module.exports = {

    list: async () => {
        return await paymentModel.findAll();
    },
    findSpecific: async (id) => {
        return await paymentModel.findByPk(cnpj_Academia)
    },
    //todo vai alterar este save ai
    //    save: async (aproved, pathVoucher, blobVoucher = "", yearCategory, weight, description) => {
    save: async (aproved, pathVoucher, yearCategory, weight, description) => {
        const payment = paymentModel.create({
            aproved: aproved || false,
            pathVoucher: pathVoucher || "/errorImg",
            //blobVoucher: blobVoucher,
            yearCategory: yearCategory || "senior",
            weight: weight || 78,
            description: description || "Observation error"
        })
        return payment;
    },
    delete: async (id) => {
        await paymentModel.destroy({ where: { Cod_Payment: id } });
    },
    paymentModel: paymentModel
}

/*
 1.No pagamento eu posso passar o id da academia e listar todas as academias atreladas
 a este pagamento
 isso deve ser feito depois (primeiro testar o upload de arquivos do tipo imagem
 depois inserir logica de relacionamento)

*/




/*
Comprovante
Aproved
CategoriaIdade
Peso
Description

*/