export function roundTo(v, dec) {
    return +(Math.round(Number(v + "e+" + dec)) + "e-" + dec);
}
