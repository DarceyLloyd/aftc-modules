// JSODOC = {
//     "method": "hexToColor",
//     "params": [
//         {
//             "name": "hex",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Hex color"
//         }
//     ],
//     "returns": {
//         "type": "THREE.Color"
//     },
//     "info": "Converts a hex color to THREE.Color.",
//     "example": [
//         "let color1 = hexToColor('#FFCC00')",
//         "let color2 = hexToColor('0xFFCC00')"
//     ]
// } JSODOC

import { Color } from "three";

export function hexToColor(hex) {
    hex = hex.replace("0x", "");
    hex = hex.replace("#", "");
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    // let result = hex.split("");
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    r = convert255(r);
    g = convert255(g);
    b = convert255(b);

    // return new Color(`"rgb(${r}, ${g}, ${b})"`);
    return new Color(r, g, b);
}