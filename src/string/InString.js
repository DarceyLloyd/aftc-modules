// JSODOC = {
//     "method": "inString",
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
//         "let stringFound = inString(needle,haystack)"
//     ]
// } JSODOC
export function inString(needle, haystack) {
    return haystack.indexOf(needle) !== -1;
}