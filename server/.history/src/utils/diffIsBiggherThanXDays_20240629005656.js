function diffIsBiggherThanXDays({ paymentDate, endEventDate, X }) {
    //data event 2024-06-21T00:57:42.000Z

    paymentDate = new Date(paymentDate);
    endEventDate = new Date(endEventDate);
    let dayInMs = 24 * 60 * 60 * 1000;

    //Automaticamente vai deletar caso nao for fornecido nenhum valor.
    //pois nao faz sentido se nenhum desses valores forem fornecidos
    //Apenas uma funcao com valvula de scape para integridade dos dados
    //mas dificilmente ira entrar nessa funcao
    if (!paymentDate || !endEventDate) return true

    if (((paymentDate - endEventDate) / dayInMs) > X) {
        return true;
    } else {
        return false;
    };

};


module.exports = { diffIsBiggherThanXDays };

