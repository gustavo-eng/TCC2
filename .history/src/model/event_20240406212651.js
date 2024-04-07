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
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    data: { // Analisar como ficou
        type: DataTypes.DATE, // mudar para date
        //field: 'data',
        //defaultValue: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
        allowNull: true
    }
    /*
        testDate: {
            type: DataTypes.DATE,
            defaultValue: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
            defaultValue: DataTypes.NOW,
            allowNull: true
            // This way, the current date/time will be used to populate this column (at the moment of insertion)
        },
    */
    // myDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, allowNull: true },

}, {
    freezeTableName: true,
    timestamps: true,
    createdAt: true,
    updatedAt: true,
}

);

console.log('Sync EventModel');
EventModel.sync({ force: true });


module.exports = {
    list: async function () {
        const events = await EventModel.findAll();
        return events;
    },
    save: async (nome, rua, numero, cidade, preco, data) => {
        //moment.utc().format('YYYY-MM-DD HH:mm:ss')
        const event = EventModel.create({
            nome: nome,
            rua: rua,
            numero: numero,
            cidade: cidade,
            preco: preco,
            //data: data || moment.utc().format('YYYY-MM-DD HH:mm:ss'), // TIRAR
            data: data, // TIRAR
        });
        return event
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
