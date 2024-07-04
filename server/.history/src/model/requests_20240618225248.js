const { DataTypes } = require("sequelize");
const { SELECT } = require("sequelize/lib/query-types");

module.exports = (sequelize, Sequelize) => {

    const Requests = sequelize.define("Request", {
        idRequest: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: {
            type: DataTypes.STRING,
            defaultValue: new Date().toLocaleDateString('pt-br'), // pega a data atual de criacao
            allowNull: true,
        },
        aproved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },

    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });
    return Requests;

}