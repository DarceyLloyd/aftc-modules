// JSODOC = {
//     "method": "roundTo",
//     "params": [
//         {
//             "name": "v",
//             "type": "Number",
//             "required": true,
//             "info": "Value to round."
//         },
//         {
//             "name": "dec",
//             "type": "Number",
//             "required": true,
//             "info": "Number of decimal places to round to."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Rounds a value to a set number of decimal places.",
//     "example": [
//         "let r = roundTo(3.142,2)"
//     ]
// } JSODOC


export function roundTo(v, dec) {
    return +(Math.round(Number(v + "e+" + dec)) + "e-" + dec);
}
