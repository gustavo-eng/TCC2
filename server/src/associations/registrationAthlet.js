module.exports = (db) => {
    try {

        db.Athlet.hasMany(db.Registration, {
            as: "Registration",
            foreignKey: "idAthlete",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });

        db.Registration.belongsTo(db.Athlet, {
            as: "Registration",
            foreignKey: "idAthlete",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });


    } catch (err) {
        console.log('Error Gym and Athlet. Error ' + err);
    }
}