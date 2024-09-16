const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {

    const Event = sequelize.define("Event", {

        idEvent: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        startDate: { // Obligate Field
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: true,
        },
        endDate: { //Optional Field
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: true,
        },
        neighborhood: {
            type: DataTypes.STRING,
            allowNull: true
        },
        street: {
            type: DataTypes.STRING,
            allowNull: true
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        }


    }, {
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });

    return Event;
}



/*

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
        type: DataTypes.FLOAT,
        //field: 'itemPrice',
        allowNull: true
    },
    data: { // Analisar como ficou
        type: DataTypes.STRING, // mudar para date
        //field: 'data',
        //defaultValue: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
        allowNull: true
    }

}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
}

);
*/
/*

EventModel.sync();


module.exports = {
    list: async () => {
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
    },
    findSpecific: async (id) => { // para teste
        return await EventModel.findByPk(id);
    },
    // listar os atribustos especificos que quero modificar
    update: async (id, obj) => {

        let event = await EventModel.findByPk(id);
        if (!event) return false
        Object.keys(obj).forEach(key => event[key] = obj[key]);
        await event.save();
        return event;
    },
    delete: async (id) => {
        await EventModel.destroy({ where: { cod_Event: id } });
    },


}




/*
const jane = await User.create({ name: "Jane" });
jane.favoriteColor = "blue"
await jane.update({ name: "Ada" })
// The database now has "Ada" for name, but still has the default "green" for favorite color
await jane.save()
// Now the database has "Ada" for name and "blue" for favorite color
*/

/*
Project.update(
  { title: 'a very different title now' },
  { where: { _id: 1 } }
)
  .then(result =>
    handleResult(result)
  )
  .catch(err =>
    handleError(err)
  )
*/

/*
function update(id, vet) {
  console.log("id ", id)
  console.log("vet ", vet)
  vet.forEach(el => {
    console.log("key ", el )
  })
}

let list = ["corrente", "tensao", "harmonica"];
let id = 10

console.log('funcao update --> ')
update(id, list)

*/

