// JSODOC = {
//     "method": "rgbToHex3",
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
//     "info": "Converts an RGB value to a hex color value (Method 3).",
//     "example": [
//         "let hex = rgbToHex3(255,100,55);"
//     ]
// } JSODOC

export function rgbToHex3(r, g, b) {
    // clamp and convert to hex
    let hr = Math.max(0, Math.min(255, Math.round(r))).toString(16);
    let hg = Math.max(0, Math.min(255, Math.round(g))).toString(16);
    let hb = Math.max(0, Math.min(255, Math.round(b))).toString(16);
    let hexString = "0x" +
      (hr.length < 2 ? "0" : "") + hr +
      (hg.length < 2 ? "0" : "") + hg +
      (hb.length < 2 ? "0" : "") + hb;
    return +hexString;
  }