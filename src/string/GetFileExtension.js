export function getFileExtension(input) {
    return input.slice((input.lastIndexOf(".") - 1 >>> 0) + 2);
    // return (input.match(/(?:.+..+[^\/]+$)/ig) != null) ? input.split('.').slice(-1) : 'null';

}