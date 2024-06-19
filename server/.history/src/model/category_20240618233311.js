const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("Category", {

        idCategory: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true
        },
        classCategory: {
            type: DataTypes.STRING,
            allowNull: true
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {

        freezeTableName: true,
        createdAt: true,
        updatedAt: true,

    });

    return Category;

}



