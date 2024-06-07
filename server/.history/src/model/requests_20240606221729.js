const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Requests = sequelize.define('Requests', {
        idRequest: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: {

        }

    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });
}