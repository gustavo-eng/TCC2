const diffIsBiggherThanXDays = ({ paymentDate, endEventDate, X }) => {
    //data event 2024-06-21T00:57:42.000Z

    let paymentDate = new Date(paymentDate);
    let endEventDate = new Date(endEventDate);
    let dayInMs = 24 * 60 * 60 * 1000;

    if (((paymentDate - endEventDate) / dayInMs) > X) {
        return true;
    } else {
        return false;
    };

    //2024-06-29T00:45:57.000Z
    /*
    let paymentData = '2024-06-29T00:45:57.000Z'
    let eventData = '2024-06-21T00:57:42.000Z'


    paymentData = new Date(paymentData)
    eventData = new Date(eventData)

    console.log((new Date(paymentData) - new Date(eventData)) / (24 * 60 * 60 * 1000))

    if (paymentData > eventData) {
        console.log('paymentDate ')
    } else {
        console.log('eventDate')
    };
    */
};


module.exports = { calculateDaysBetweenDates };
