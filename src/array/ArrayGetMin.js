// JSODOC = {
//     "method": "arrayGetMin",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to get the minimum value from."
//         }
//     ],
//     "returns": "Number",
//     "info": "Gets the minimum value from the supplied array.",
//     "example": [
//         "let max = arrayGetMin(myArray)"
//     ]
// } JSODOC

export function arrayGetMin(arr) {
    return Math.min.apply(Math, arr);
}