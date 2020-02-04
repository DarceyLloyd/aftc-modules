export function IsNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}