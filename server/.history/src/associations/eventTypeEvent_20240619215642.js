module.exports = (db) => {
    try {

        db.typeEvent.hasMany(db.Event, {

        });

    } catch (err) {
        console.log('Erro relacionamentos event and typeEvent')
    }
}