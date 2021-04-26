// JSODOC = {
//     "method": "arrayClear",
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
//         "arrayClear(myArray)"
//     ]
// } JSODOC


export function arrayClear(arr) {
    while (arr.length > 0) { arr.pop(); }
}
