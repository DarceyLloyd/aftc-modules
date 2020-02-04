export function HasClass(elementOrId, c) {
    if (isElement(elementOrId)) {
        return elementOrId.classList.contains(c);
    } else {
        return getElementById(elementOrId).classList.contains(c);
    }
}