export function GetFileExtension(input) {
    return input.slice((input.lastIndexOf(".") - 1 >>> 0) + 2);
}