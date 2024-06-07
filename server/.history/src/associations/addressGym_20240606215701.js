module.exports = (db) => {
    db.Address.hasOne(db.Gym, {
        as: "Gym",  // 'as' define um alias para a associação
        foreignKey: "idAddress",  // define a chave estrangeira na tabela 'Gym'
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
    db.Gym.belongsTo(db.Address, {
        as: "Address",  // 'as' define um alias para a associação
        foreignKey: "idAddress",  // define a chave estrangeira na tabela 'Gym'
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
}