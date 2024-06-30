const diffIsBiggherThanXDays = ({ paymentDate, endEventDate, X }) => {
    //data event 2024-06-21T00:57:42.000Z

    let paymentDate = new Date(paymentDate);
    let endEventDate = new Date(endEventDate);
    let dayInMs = 24 * 60 * 60 * 1000;

    if (!paymentDate || !endEventDate) return true
    //Automaticamente vai deletar caso nao for fornecido nenhum valor.
    if (((paymentDate - endEventDate) / dayInMs) > X) {
        return true;
    } else {
        return false;
    };

};


module.exports = { calculateDaysBetweenDates };

