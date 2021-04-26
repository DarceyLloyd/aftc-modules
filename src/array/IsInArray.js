// JSODOC = {
//     "method": "isInArray",
//     "params": [
//         {
//             "name": "needle",
//             "type": "string||number",
//             "required": true,
//             "default": null,
//             "info": "What you are looking for."
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
//     "info": "Searches the array for your value.",
//     "example": [
//         "let found = isInArray(needle, haystack)"
//     ]
// } JSODOC

export function isInArray(needle, haystack) {
    if (haystack.indexOf(needle) > -1) { return true; } else { return false; }
}