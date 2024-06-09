module.exports = (db) => {
    db.Athlet.hasOne(db.Requests, {
        as: "Requests",
        foreignKey: "idAthlet",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });

    db.Requests.belongsTo(db.Athlet, {
        as: 'Gym',
        foreignKey: "idAthlet",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
}

