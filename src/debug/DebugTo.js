export function debugTo(index, str) {
    if (window.aftcDebug) {
        if (window.aftcDebug[index]) {
            window.aftcDebug[index].innerHTML = str;
        }
    }
}