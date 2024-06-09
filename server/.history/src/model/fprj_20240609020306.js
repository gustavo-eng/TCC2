const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

    const Fprj = sequelize.define("Fprj", {

        idFprj: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        president: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "fprj",
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });

    return Fprj;
}
