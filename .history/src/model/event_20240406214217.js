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
        field: 'itemPrice',
        allowNull: true
    },
    data: { // Analisar como ficou
        type: DataTypes.STRING, // mudar para date
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
}, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
}

);

/*

User.sync()- Isso cria a tabela se ela não existir (e não faz nada se já existir)
User.sync({ force: true })- Isso cria a tabela, descartando-a primeiro se ela já existir
User.sync({ alter: true })- Verifica qual é o estado atual da tabela no banco de dados
 (quais colunas ela possui, quais são seus tipos de dados, etc), e então realiza
  as alterações necessárias na tabela para que ela corresponda ao modelo.

*/
EventModel.sync({ alter: true });


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
            //data: moment.utc().format('YYYY-MM-DD HH:mm:ss'), // TIRAR
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
