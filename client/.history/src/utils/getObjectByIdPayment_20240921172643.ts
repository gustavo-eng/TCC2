export function getObjectByIdPayment(obj: any, idPayment: string | number) {
    return obj.find((item: { idPayment:  any; }) => item.idPayment === idPayment);
}