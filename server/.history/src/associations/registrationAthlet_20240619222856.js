module.exports = (db) => {
    try {

        db.Athlet.hasMany(db.Registration, {
            as: "Registration",
            foreignKey: "idAthlete",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        })


    } catch (err) {

    }
}