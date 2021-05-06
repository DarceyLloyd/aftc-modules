// JSODOC = {
//     "method": "replaceAll",
//     "params": [
//         {
//             "name": "needle",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace."
//         },
//         {
//             "name": "replace",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace the needle (found) string with."
//         },
//         {
//             "name": "haystack",
//             "type": "String",
//             "required": true,
//             "info": "The string to parse."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Uses a split join method to replace all occurrences of a string. See regExReplaceAll for an alternate method.",
//     "example": [
//         "let newString1 = replaceAll(needle, repWith, haystack)",
//         "let newString2 = regExReplaceAll(needle, repWith, haystack)"
//     ]
// } JSODOC
export function replaceAll(needle,replace,haystack){
    return haystack.split(needle).join(replace);
}