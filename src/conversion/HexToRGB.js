// JSODOC = {
//     "method": "hexToRgb",
//     "params": [
//         {
//             "name": "hex",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Hex color string eg #FFCC00"
//         }
//     ],
//     "returns": "Object {r,g,b}",
//     "info": "Converts hex color to an object with r,g,b props.",
//     "example": [
//         "let rgb = hexToRgb('#FFCC00')"
//     ]
// } JSODOC

export function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}