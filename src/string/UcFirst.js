// JSODOC = {
//     "method": "ucFirst",
//     "params": [
//         {
//             "name": "s",
//             "type": "String",
//             "required": true,
//             "info": "The string to make the first letter upper case."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Makes the first letter of a string uppercase.",
//     "example": [
//         "let ucFirstString = ucFirst('hello')"
//     ]
// } JSODOC
export function ucFirst(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}