export function normaliseRange(min, max, v) {
    let range = max - min;
    let step = 1 / range;
    let r = (step * (v - min));
    if (v < min) {
        r = 0;
    } else if (v > max) {
        r = 1;
    }
    return r;
}
