module.exports = (db) => {
    db.Gym.hasOne(db.Request, {
        as: 'Request',
        foreignKey: "idGym",
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