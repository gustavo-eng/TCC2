const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const moment = require('moment');

//todo Mudar o nome da tabela la na modelagem para Event
//todo Caso for necessario eh possivel inserir novos campos



const EventModel = sequelize.define('Event', {

    cod_Event: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        defaultValue: "John Doe",
        allowNull: true
    },
    rua: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: true
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    data: { // Analisar como ficou
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false
    },

    testDate: {
        type: DataTypes.DATE,
        defaultValue: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
        defaultValue: DataTypes.NOW,
        allowNull: true
        // This way, the current date/time will be used to populate this column (at the moment of insertion)
    },

    myDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, allowNull: false },

}, {
    freezeTableName: true,
    timestamps: true
}

);
console.log('Sync EventModel');
EventModel.sync();


module.exports = {
    list: async function () {
        const events = await EventModel.findAll();
        return events;
    }
}




// Aqui vai ter o sync e o CRUD


/*
  createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
      field: 'created_at'
    },
*/