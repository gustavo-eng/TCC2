module.exports = (db) => {
    db.Category.hasOne(db.Payment, {
        as: "Payment",
        foreignKey: {
            name: 'idCategory',
            allowNull: true
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });


    db.Payment.belongsTo(db.Category, {
        as: "Category",
        foreignKey: {
            name: 'idCategory',
            allowNull: true
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    });
}