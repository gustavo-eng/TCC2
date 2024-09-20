export function isNumber(value: string ) {
    // Converte a string para número e verifica se é NaN
    return !isNaN(value as any) && !isNaN(parseFloat(value));
}