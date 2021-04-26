// JSODOC = {
//     "method": "parseArrayToFloat",
//     "params": [
//         {
//             "name": "arr",
//             "type": "Array",
//             "required": true,
//             "info": "Array to parse."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Parses each entry in the supplied array with Math.float and returns it.",
//     "example": [
//         "let floatParsedArray = parseArrayToFloat(arr)"
//     ]
// } JSODOC

export function parseArrayToFloat(arr) {
    let converted;
    for (let i = 0; i < arr.length; i++) {
        converted = parseFloat(arr[i]);
        if (isNaN(converted)){
            arr[i] = 0;
        } else {
            arr[i] = converted;
        }
    }
    return arr;
}
