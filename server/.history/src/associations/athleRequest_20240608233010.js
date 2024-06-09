module.exports = (db) => {
    db.Athlet.hasOne(db.Requests, {
        as: "Requests",
        foreignKey: {
            name: 'idAthlet',
            allowNull: false
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });

    db.Request.belongsTo(db.Athlet, {
        as: 'Gym',
        foreignKey: "idAthlet",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });


}

