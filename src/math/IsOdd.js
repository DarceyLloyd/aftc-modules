// JSODOC = {
//     "method": "isOdd",
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
//     "info": "Detects if a number is odd or not.",
//     "example": [
//         "let odd = isOdd(3)"
//     ]
// } JSODOC

export function isOdd(n) {
    return Math.abs(n % 2) === 1;
}