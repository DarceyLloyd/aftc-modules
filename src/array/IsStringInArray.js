// JSODOC = {
//     "method": "isStringInArray",
//     "params": [
//         {
//             "name": "needle",
//             "type": "string||number",
//             "required": true,
//             "default": null,
//             "info": "String you are looking for."
//         },
//         {
//             "name": "haystack",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to search."
//         }
//     ],
//     "returns": "Boolean",
//     "info": "Searches the array for a string.",
//     "example": [
//         "let found = isStringInArray(needle, haystack)"
//     ]
// } JSODOC

export function isStringInArray(needle, haystack) {
    return (new RegExp('(' + haystack.join('|').replace(/\./g, '\\.') + ')$')).test(needle);
}
