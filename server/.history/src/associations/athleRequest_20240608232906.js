module.exports = (db) => {
    db.Athlet.hasOne(db.Request, {
        as: "Request",
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

