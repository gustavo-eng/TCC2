module.exports = (db) => {
    try {

        db.Athlet.hasOne(db.Request, {
            as: 'Request',
            foreignKey: "idRequest",  // define a chave estrangeira na tabela 'Gym'
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });

        db.Request.belongsTo(db.Athlet, {
            as: 'Athlet',
            foreignKey: "idRequest",  // define a chave estrangeira na tabela 'Gym'
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });
        console.log('successs')
    } catch (e) {
        console.log('Erro fgg ' + e)
    }

}