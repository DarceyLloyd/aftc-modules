export function getFileExtension(input) {
    return input.slice((input.lastIndexOf(".") - 1 >>> 0) + 2);
}