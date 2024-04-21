// models/image.js
const { Sequelize, DataTypes, where } = require('sequelize');
const sequelize = require('../config/db')

const Image = sequelize.define('Image', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.BLOB('long'),
        allowNull: false,
    },
},
    {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    }
);


module.exports = Image;
