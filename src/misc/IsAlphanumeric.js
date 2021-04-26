// JSODOC = {
//     "method": "isAlphaNumeric",
//     "params": [
//         {
//             "name": "v",
//             "type": "String|Number",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is alphanumeric or not.",
//     "example": [
//         "let an = isAlphaNumeric('a43-')"
//     ]
// } JSODOC

export function isAlphaNumeric(v) {
    return !(/\W/.test(v));
}