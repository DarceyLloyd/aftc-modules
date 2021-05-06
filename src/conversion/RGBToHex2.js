// JSODOC = {
//     "method": "RGBToHex2",
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
//     "info": "Converts an RGB value to a hex color value (Method 2).",
//     "example": [
//         "let hex = RGBToHex2(255,100,55);"
//     ]
// } JSODOC

export function RGBToHex2 (r, g, b) {
    function getHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    let hex = "#" + getHex(r) + getHex(g) + getHex(b);
    hex = hex.toUpperCase();
    return hex;
}