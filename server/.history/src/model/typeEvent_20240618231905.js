const { allow } = require('joi');
const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const typeEvent = sequelize.define("typeEvent", {
        idTypeEvent: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });

    return typeEvent;

}