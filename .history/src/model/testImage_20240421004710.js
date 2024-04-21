// models/image.js
const { Sequelize, DataTypes, where } = require('sequelize');
const sequelize = require('../config/db')

const Image = sequelize.define('Image', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    data: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    },
},
    {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    }
);


Image.sync({ alter: true });

module.exports = Image;
