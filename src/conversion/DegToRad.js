// JSODOC = {
//     "method": "degToRad",
//     "params": [
//         {
//             "name": "input",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": "Number",
//     "info": "Converts degrees to radians.",
//     "example": [
//         "let rad = degToRad(deg)"
//     ]
// } JSODOC

export function degToRad(input) { return input * (Math.PI / 180); }