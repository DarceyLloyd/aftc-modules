// JSODOC = {
//     "method": "cutStringTo",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "String to cut."
//         },
//         {
//             "name": "len",
//             "type": "Number",
//             "required": true,
//             "info": "Number of characters to return / Length of string to return."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a string at the desired length.",
//     "example": [
//         "let cutString = cutStringTo('abcd',2)"
//     ]
// } JSODOC

export function cutStringTo(input, len) {
    return input.substring(0, len);
}