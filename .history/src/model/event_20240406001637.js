const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { allow } = require('joi');

//todo Mudar o nome da tabela la na modelagem para Event
//todo Caso for necessario eh possivel inserir novos campos

/*
Cod_Event
Rua
Numero
Cidade
Preoco
*/

const Event = sequelize.define('Event', {

    cod_Event: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
        type: DataTypes.FLOAT,
        allowNull: true
    },
    data: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {
    freezeTableName: true
}

);


console.log('Tabela Event')
console.log(sequelize.models.Event)

/*
  createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
      field: 'created_at'
    },
*/
