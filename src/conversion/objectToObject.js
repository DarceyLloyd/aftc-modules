export function objectToObject(src, dest, strict = true) {
    for (let key in src) {
        if (strict) {
            if (dest.hasOwnProperty(key)) {
                dest[key] = src[key];
            } else {
                console.warn("ObjectToObject(): Destination object key doesn't exist [" + key + "].");
            }
        } else {
            dest[key] = src[key];
        }
    }
}