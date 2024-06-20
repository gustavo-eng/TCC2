module.exports = (db) => {
    try {

        db.Category.hasMany(db.Registration, {
            as: "Registration",
            foreignKey: "idCategory",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",

        });

        db.Registration.belongsTo(db.Category, {
            as: "Category",
            foreignKey: "idCategory",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });

    } catch (err) {
        console.log('Erro relacionamentos event and typeEvent. Error ==> ' + err)
    }
}