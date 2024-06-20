module.exports = (db) => {
    try {

        db.Category.hasMany(db.Registration, {

        });

    } catch (err) {
        console.log('Erro relacionamentos event and typeEvent. Error ==> ' + err)
    }
}