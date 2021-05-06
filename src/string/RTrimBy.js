// JSODOC = {
//     "method": "rTrimBy",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to find."
//         },
//         {
//             "name": "trimBy",
//             "type": "Number",
//             "required": true,
//             "info": "The number of characters to trim from the right (end) of a string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Trims a string from the right (end) by a specified number of characters.",
//     "example": [
//         "let trimmedString = rTrimBy(str,4)"
//     ]
// } JSODOC
export function rTrimBy(str, trimBy) {
    return (str.substring(0, str.length - trimBy));
}