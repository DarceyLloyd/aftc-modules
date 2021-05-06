// JSODOC = {
//     "method": "lTrimBy",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to find."
//         },
//         {
//             "name": "by",
//             "type": "Number",
//             "required": true,
//             "info": "The number of characters to trim from the left (start) of a string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Trims a string from the left (start) by a specified number of characters.",
//     "example": [
//         "let trimmedString = lTrimBy(str,4)"
//     ]
// } JSODOC
export function lTrimBy(str, by) {
    return str.substring(by, str.length);
}