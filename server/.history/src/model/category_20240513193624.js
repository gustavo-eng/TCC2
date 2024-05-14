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
            defaultValue: "Masculino",
            allowNull: true
        },
        classCategory: {
            type: DataTypes.STRING,
            defaultValue: "Senior",
            allowNull: true
        },
        weight: {
            type: DataTypes.INTEGER,
            //defaultValue: 60,
            allowNull: true
        }
    });

    return Category;
}

