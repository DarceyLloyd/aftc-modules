export function getUID(len) {
    if (len > 34){
        console.error("getUID(length): Limit error: Length must be 34 or lower");
    } else {
        return Math.random().toString(36).substr(2, len);
    }
}