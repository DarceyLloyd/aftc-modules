// JSODOC = {
//     "method": "parseArrayToInt",
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
//     "info": "Parses each entry in the supplied array with Math.int and returns it.",
//     "example": [
//         "let intParsedArray = parseArrayToInt(arr)"
//     ]
// } JSODOC


export function parseArrayToInt(arr) {
    let converted;
    for (let i = 0; i < arr.length; i++) {
        converted = parseInt(arr[i]);
        if (isNaN(converted)){
            arr[i] = 0;
        } else {
            arr[i] = converted;
        }
    }
    return arr;
}