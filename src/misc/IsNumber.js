// JSODOC = {
//     "method": "isNumber",
//     "params": [
//         {
//             "name": "n",
//             "type": "*",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is number or not.",
//     "example": [
//         "let check = isNumber('a')"
//     ]
// } JSODOC

export function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}