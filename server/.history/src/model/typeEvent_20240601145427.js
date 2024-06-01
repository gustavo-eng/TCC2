const { allow } = require('joi');
const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    return sequelize.define("typeEvent", {
        idTypeEvent: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });


}