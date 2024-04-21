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
});

module.exports = Image;
