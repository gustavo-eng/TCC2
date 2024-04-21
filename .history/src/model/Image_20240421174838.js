const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Image = sequelize.define("image", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
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






module.exports = {
    findSpecific: async (id) => {
        return await Image.findByPk(id);
    },
    Image: Image

};
