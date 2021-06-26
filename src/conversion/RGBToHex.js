// JSODOC = {
//     "method": "rgbToHex",
//     "params": [
//         {
//             "name": "r",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         },
//         {
//             "name": "g",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         },
//         {
//             "name": "b",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Converts an RGB value to a hex color value.",
//     "example": [
//         "let hex = RGBToHex(255,100,55);"
//     ]
// } JSODOC

export function rgbToHex (r, g, b) {
    return ((r << 16) | (g << 8) | b).toString(16);
}
