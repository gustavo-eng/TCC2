const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

//allowNull: true
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
    newFiel: {
        type: DataTypes.STRING,
        allowNull: true

    },
    data: {
        type: DataTypes.BLOB("long"),
    },
}); // Colocar formato padrao


Image.sync({ alter: true });



module.exports = {
    findSpecific: async (id) => {
        return await Image.findByPk(id);
    },
    Image: Image

};
