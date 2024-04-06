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
        allowNull: false
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    freezeTableName: true
}
);

console.log('Tabela Event')
console.log(sequelize.models.Event)