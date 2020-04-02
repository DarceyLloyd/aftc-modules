export function DebugTo(index, str) {
    if (window.aftcDebug) {
        if (window.aftcDebug[index]) {
            window.aftcDebug[index].innerHTML = str;
        }
    }
}