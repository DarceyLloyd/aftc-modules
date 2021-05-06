// JSODOC = {
//     "method": "replaceDoubleForwardSlash",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to process."
//         },
//         {
//             "name": "rep",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace double forward slashes with."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Replaces double forward slashes in a string via regex with your specified string.",
//     "example": [
//         "let processedString = replaceDoubleForwardSlash(str,replaceWith)"
//     ]
// } JSODOC
export function replaceDoubleForwardSlash(str,rep){
    return str.replace(/\/\//g, rep); // replaces all occurances of // with rep
}