// JSODOC = {
//     "method": "getWordCount",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to count word from."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Returns the number of words in a string based on spaces.",
//     "example": [
//         "let wordCount = getWordCount(sourceString)"
//     ]
// } JSODOC
export function getWordCount(str) {
    return str.split(/\S+/).length - 1;
}