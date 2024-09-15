export function describeStatusPayment(approved: boolean, description:string){
    if(approved) {
        return "Aprovado";
    } else {
        if(description.length > 0) return "Rejeitado";
        return "Pendente"
    }
}