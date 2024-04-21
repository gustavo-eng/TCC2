// models/image.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

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
