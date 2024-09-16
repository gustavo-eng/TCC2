const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

    const Event = sequelize.define("Event", {

        idEvent: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        startDate: { // Obligate Field
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: true,
        },
        endDate: { //Optional Field
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
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
        }


    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });

    return Event;
}



