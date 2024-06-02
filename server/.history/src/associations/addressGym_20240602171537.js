module.exports = (db) => {
    db.Address.hasOne(db.Gym, {
        as: "Gym",
        foreignKey: "idAddress",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });

    db.Gym.belongsTo(db.Address, {
        as: "Address",
        foreignKey: "idAddress",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
}