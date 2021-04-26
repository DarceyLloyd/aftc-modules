// JSODOC = {
//     "method": "isArray",
//     "params": [
//         {
//             "name": "input",
//             "type": "*",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is an array or not.",
//     "example": [
//         "let check = isArray(4)"
//     ]
// } JSODOC

export function isArray(input) {
    return !!input && input.constructor === Array;
    //return arr.constructor === Array;
}