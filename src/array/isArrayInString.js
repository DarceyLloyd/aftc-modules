// JSODOC = {
//     "method": "isArrayInString",
//     "params": [
//         {
//             "name": "input",
//             "type": "string",
//             "required": true,
//             "default": null,
//             "info": "String you want to look for matches in."
//         },
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array of strings you want to search for in input."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Searches the array for a string.",
//     "example": [
//         "let found = isStringInArray(needle, haystack)"
//     ]
// } JSODOC

export function isArrayInString(input, arr) {
    return arr.some(substring=>input.includes(substring));
}
