module.exports = (db) => {

    try {

        db.Event.hasMany(db.Registration, {
            as: "Registration",
            foreignKey: "idEvent",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });

        db.Registration.belongsTo(db.Event, {
            as: "Event",
            foreignKey: "idEvent",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });

    } catch (err) {
        console.log('Erro relacionamentos event and typeEvent. Error ==> ' + err)
    }
}