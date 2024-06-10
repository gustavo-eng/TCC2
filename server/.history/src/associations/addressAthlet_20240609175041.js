module.exports = (db) => {
    db.Address.hasOne(db.Athlet, {
        as: "Athlet",
        foreignKey: "idAddress",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
    db.Athlet.belongsTo(db.Address, {
        as: "Address",
        foreignKey: "idAddress",  // define a chave estrangeira na tabela 'Gym'
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
}

