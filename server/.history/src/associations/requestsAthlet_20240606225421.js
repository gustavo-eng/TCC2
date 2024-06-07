module.exports = (db) => {
    db.Athlet.hasOne(db.Request, {
        as: 'Requests',
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

}