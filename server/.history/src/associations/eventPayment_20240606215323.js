module.exports = (db) => {
    db.Event.hasOne(db.Payment, {
        as: "Payment",
        foreignKey: {
            name: 'idEvent',
            allowNull: true
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });


    db.Payment.belongsTo(db.Event, {
        as: "Event",
        foreignKey: {
            name: 'idEvent',
            allowNull: true
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
}