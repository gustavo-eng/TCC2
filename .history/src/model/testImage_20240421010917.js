const { Sequelize, DataTypes, where } = require('sequelize');
const sequelize = require('../config/db');

const Image = sequelize.define('Image', {
    type: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    data: {
        type: DataTypes.BLOB("long"),
    },
},
    {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    }
);


Image.sync();

module.exports = Image;
