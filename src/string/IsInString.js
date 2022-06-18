// JSODOC = {
//     "method": "isInString",
//     "params": [
//         {
//             "name": "needle",
//             "type": "String",
//             "required": true,
//             "info": "The string to find."
//         },
//         {
//             "name": "haystack",
//             "type": "String",
//             "required": true,
//             "info": "The string to search."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Looks for a string in a string.",
//     "example": [
//         "let stringFound = isInString(needle,haystack)"
//     ]
// } JSODOC
export function isInString(find, source) {
    return source.indexOf(find) !== -1;
}