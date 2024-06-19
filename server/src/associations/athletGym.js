module.exports = (db) => {
    try {
        db.Gym.hasMany(db.Athlet, {
            as: "Athlet",
            foreignKey: "idGym",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });

        db.Athlet.belongsTo(db.Gym, {
            as: "Gym",
            foreignKey: "idGym",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });

    } catch (err) {
        console.log('Error Gym and Athlet. Error ' + err);
    }
}