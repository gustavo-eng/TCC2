export function getObjectByIdPayment(obj: any, idPayment: string | number) {
    return obj.find((item: { idPayment: string | number; }) => item.idPayment === idPayment);
}