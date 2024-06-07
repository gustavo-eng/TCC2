const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Requests = sequelize.define('Requests', {

        idRequest: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: true,
        },
        aproved: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });

    return Requests;

}