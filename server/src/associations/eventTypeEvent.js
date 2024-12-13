module.exports = (db) => {
    try {

        db.typeEvent.hasMany(db.Event, {
            as: "Event",
            foreignKey: "idTypeEvent",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });

        db.Event.belongsTo(db.typeEvent, {
            as: "typeEvent",
            foreignKey: "idTypeEvent",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });

    } catch (err) {
        console.log('Erro relacionamentos event and typeEvent. Error ==> ' + err)
    }
}
