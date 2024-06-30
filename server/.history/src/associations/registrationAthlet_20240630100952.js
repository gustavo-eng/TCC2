module.exports = (db) => {
    db.Athlet.hasMany(db.Registration, {
        as: "Registration",
        foreignKey: "idAthlete",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });

    db.Registration.belongsTo(db.Athlet, {
        as: "Athlet",
        foreignKey: "idAthlete",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
}