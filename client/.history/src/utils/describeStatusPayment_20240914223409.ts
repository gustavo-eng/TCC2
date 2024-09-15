
export function describeStatusPayment(approved: boolean, description:""){
    if(approved) {
        return "Aprovado";
    } else {
        if(description.length > 0) return "Rejeitado";
        return "Pendente"
    }
}