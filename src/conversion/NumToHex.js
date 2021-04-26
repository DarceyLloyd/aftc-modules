// JSODOC = {
//     "method": "numToHex",
//     "params": [
//         {
//             "name": "num",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": "String",
//     "info": "Converts a number to hexadecimal.",
//     "example": [
//         "let hex = numToHex(12)"
//     ]
// } JSODOC

export function numToHex (num) {
    return num.toString(16);
}