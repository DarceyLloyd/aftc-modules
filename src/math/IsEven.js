// JSODOC = {
//     "method": "isEven",
//     "params": [
//         {
//             "name": "n",
//             "type": "Number",
//             "required": true,
//             "info": "Number to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Detects if a number is even or not.",
//     "example": [
//         "let even = isEven(3)"
//     ]
// } JSODOC

export function isEven(n) {
    return n % 2 === 0;
}
