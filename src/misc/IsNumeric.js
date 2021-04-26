// JSODOC = {
//     "method": "isNumeric",
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
//     "info": "Checks if the input is numeric or not.",
//     "example": [
//         "let check = isNumeric('a')"
//     ]
// } JSODOC

export function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}