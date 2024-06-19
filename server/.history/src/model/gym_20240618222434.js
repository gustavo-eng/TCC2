const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

    const Gym = sequelize.define("Gym", {
        idGym: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cnpj: {
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "gym",
            allowNull: true
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
        }

    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });

    return Gym;
}



