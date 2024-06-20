module.exports = (db) => {
    try {

        db.Category.hasMany(db.Registration, {
            as: "Registration",
            foreignKey: "idCategory",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",

            //idCategory

        });

    } catch (err) {
        console.log('Erro relacionamentos event and typeEvent. Error ==> ' + err)
    }
}