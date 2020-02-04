export function IsNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}