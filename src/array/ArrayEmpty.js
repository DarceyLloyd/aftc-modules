// JSODOC = {
//     "method": "arrayEmpty",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to clear / empty"
//         }
//     ],
//     "returns": "",
//     "info": "Clears an array",
//     "example": [
//         "arrayEmpty(myArray)"
//     ]
// } JSODOC

export function arrayEmpty(arr) {
    while (arr.length > 0) { arr.pop(); }
}