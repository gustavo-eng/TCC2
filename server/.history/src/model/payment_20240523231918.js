const { DataTypes } = require('sequelize');

//const { StudentModel } = require("./student");
//const { StudentModel } = require("../model/student");



/*

idAthlet
idEvent
voucher
aproved
description

*/


module.exports = (sequelize, Sequelize) => {
    const Payment = sequelize.define("Payment", {
        idPayment: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        voucher: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        aproved: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }

    })
}




/*
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
    },

}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
});

// Sincronism esta na tabela payment

module.exports = {

    list: async () => {
        return await paymentModel.findAll();
    },
    findSpecific: async (id) => {
        return await paymentModel.findByPk(cnpj_Academia)
    },
    save: async (aproved, pathVoucher, yearCategory, weight, description) => {
        const payment = paymentModel.create({
            aproved: aproved || false,
            pathVoucher: pathVoucher || "/errorImg",
            yearCategory: yearCategory || "error category",
            weight: weight || 0,
            description: description || "Observation error"
        })

        return payment;
    },
    delete: async (id) => {
        await paymentModel.destroy({ where: { Cod_Payment: id } });
    },
    update: async (id, obj) => {
        let payment = await paymentModel.findByPk(id);
        if (!payment) return false;
        Object.keys(obj).forEach(key => payment[key] = obj[key]);
        await payment.save();
        return payment;
    },

    paymentModel,

}

*/
/*
 1.No pagamento eu posso passar o id da academia e listar todas as academias atreladas
 a este pagamento
 isso deve ser feito depois (primeiro testar o upload de arquivos do tipo imagem
 depois inserir logica de relacionamento)

*/
