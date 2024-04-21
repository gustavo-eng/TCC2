const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Image = sequelize.define("image", {
    type: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    data: {
        type: DataTypes.BLOB("long"),
    },
}); // Colocar formato padrao




module.exports = { Image: Image };
