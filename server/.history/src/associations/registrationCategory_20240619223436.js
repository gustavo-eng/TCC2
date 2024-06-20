module.exports = (db) => {
    try {

        db.Category.hasMany(db.Registration, {
            as: "Registration",
            foreignKey: "idCategory",
            //idCategory

        });

    } catch (err) {
        console.log('Erro relacionamentos event and typeEvent. Error ==> ' + err)
    }
}