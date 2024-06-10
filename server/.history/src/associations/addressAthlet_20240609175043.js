module.exports = (db) => {
    db.Address.hasOne(db.Athlet, {
        as: "Athlet",
        foreignKey: "idAddress",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
    db.Athlet.belongsTo(db.Address, {
        as: "Address",
        foreignKey: "idAddress",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
}

