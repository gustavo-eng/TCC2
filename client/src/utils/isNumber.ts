export function isNumber(value: string ) {
    return !isNaN(value as any) && !isNaN(parseFloat(value));
}