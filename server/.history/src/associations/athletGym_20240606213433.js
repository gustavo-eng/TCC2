module.exports = (db) => {
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
}