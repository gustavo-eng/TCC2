const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const FprjModel = sequelize.define('fprj', {



}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
});
