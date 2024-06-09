module.exports = (db) => {
    db.Gym.hasOne(db.Requests, {
        as: 'Requests',
        foreignKey: "idGym",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });

    db.Requests.belongsTo(db.Gym, {
        as: 'Gym',
        foreignKey: "idGym",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
}