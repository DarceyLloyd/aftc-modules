// JSODOC = {
//     "method": "getFileExtension",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to get the file extension from."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Attempts to get the file extension from a supplied string.",
//     "example": [
//         "let ext = getFileExtension(path)"
//     ]
// } JSODOC
export function getFileExtension(str) {
    return str.slice((str.lastIndexOf(".") - 1 >>> 0) + 2);
    // return (str.match(/(?:.+..+[^\/]+$)/ig) != null) ? str.split('.').slice(-1) : 'null';

}