
module.exports = (db) => {

    try {

        db.Athlet.hasOne(db.Requests, {
            as: 'Requests',
            foreignKey: "idRequest",  // define a chave estrangeira na tabela 'Gym'
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });

        db.Requests.belongsTo(db.Athlet, {
            as: 'Athlet',
            foreignKey: "idRequest",  // define a chave estrangeira na tabela 'Gym'
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });

        console.log('successs 989898');

    } catch (e) {

        console.log('Erro fgg ' + e);

    }

}