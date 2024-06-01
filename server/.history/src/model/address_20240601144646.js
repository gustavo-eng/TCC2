const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define("Address", {

        idAddress: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        state: {
            type: DataTypes.STRING,
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

    return Address;

}
