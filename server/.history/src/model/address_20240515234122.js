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
        }
    })
}

/*
idAddress
state
neighborhood
street
number
city
*/