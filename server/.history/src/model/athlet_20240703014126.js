const { DataTypes } = require('sequelize');



module.exports = (sequelize, Sequelize) => {

    const Athlet = sequelize.define("Athlet", {
        //Teste
        idAthlete: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rg: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        birth: { //2021-07-06
            type: DataTypes.DATEONLY,
            //defaultValue: Date.now(),
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
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
        role: {
            type: DataTypes.STRING,
            defaultValue: 'athlet',
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        neighborhood: {
            type: DataTypes.STRING,
            allowNull: true
        },
        street: {
            type: DataTypes.STRING,
            allowNull: true
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        resetPasswordToken: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        resetPasswordExpires: {
            type: DataTypes.DATE,
            allowNull: true,
        },

    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    }

    );


    return Athlet;
}



