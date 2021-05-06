// JSODOC = {
//     "method": "radToDeg",
//     "params": [
//         {
//             "name": "input",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Converts radians to degrees.",
//     "example": [
//         "let rad = radToDeg(deg)"
//     ]
// } JSODOC

export function radToDeg(input) { return input * (180 / Math.PI); }