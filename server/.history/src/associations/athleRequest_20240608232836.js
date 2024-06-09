module.exports = (db) => {
    db.Athlet.hasOne(db.Request, {
        as: "Request",
        foreignKey: {
            name: 'idAthlet',
            allowNull: true
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });

    db.Request.belongsTo(db.Gym, {
        as: 'Gym',
        foreignKey: "idGym",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });


}


/*
module.exports = (db) => {
    db.Athlet.hasOne(db.Payment, {
        as: "Payment",
        foreignKey: {
            name: 'idAthlet',
            allowNull: true
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });

    db.Payment.belongsTo(db.Athlet, {
        as: "Athlet",
        foreignKey: {
            name: 'idAthlet',
            allowNull: true
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
}

*/