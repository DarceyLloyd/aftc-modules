// JSODOC = {
//     "method": "replaceDoubleBackSlash",
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
//             "info": "The string to replace double back slashes with."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Replaces double back slashes in a string via regex with your specified string.",
//     "example": [
//         "let processedString = replaceDoubleBackSlash(str,replaceWith)"
//     ]
// } JSODOC
export function replaceDoubleBackSlash(str,rep){
    return str.replace(/\\\\/g, rep); // replaces all occurances of \\ with rep
}