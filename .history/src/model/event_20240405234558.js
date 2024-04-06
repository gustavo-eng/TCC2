const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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

});