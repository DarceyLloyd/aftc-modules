// JSODOC = {
//     "method": "arrayContains",
//     "params": [
//         {
//             "name": "needle",
//             "type": "string",
//             "required": true,
//             "default": null,
//             "info": "What you are looking for."
//         },
//         {
//             "name": "haystack",
//             "type": "array",
//             "required": true,
//             "default": "null",
//             "info": "The array you want to search."
//         }
//     ],
//     "info": "Finds a needle in a haystack."
// } JSODOC

export function arrayContains(needle, haystack) {
    if (haystack.indexOf(needle) > -1) { return true; } else { return false; }
}