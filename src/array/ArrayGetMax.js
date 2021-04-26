// JSODOC = {
//     "method": "arrayGetMax",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to get the maximum value within."
//         }
//     ],
//     "returns": "Number",
//     "info": "Gets the maximum value from the supplied array.",
//     "example": [
//         "let max = arrayGetMax(myArray)"
//     ]
// } JSODOC

export function arrayGetMax(arr) {
    return Math.max.apply(Math, arr);
}

