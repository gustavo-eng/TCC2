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
    rua: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero: {
        type: DataTypes.DECIMAL,
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
});

console.log('Tabela Event')
console.log(sequelize.models.Event)