export function getObjectByIdPayment(obj: any, idPayment: string | number) {
    if(obj) {
        return obj.find((item: { idPayment:  any; }) => item.idPayment === idPayment);
    } else {
        return {}
    }
}

