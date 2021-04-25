// JSODOC = {
//     "method": "arrayClear",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": false,
//             "default": null,
//             "info": "Some array"
//         },
//         {
//             "name": "color",
//             "type": "number",
//             "required": true,
//             "default": "0xFFCC00",
//             "info": "Orange colour"
//         }
//     ],
//     "returns": [
//     ],
//     "info": "Clears an array",
//     "example": [
//         "line",
//         "by line"
//     ]
// } JSODOC


export function arrayClear(arr) {
    while (arr.length > 0) { arr.pop(); }
}
