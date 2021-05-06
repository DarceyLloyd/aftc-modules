// JSODOC = {
//     "method": "regExReplaceAll",
//     "params": [
//         {
//             "name": "needle",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace."
//         },
//         {
//             "name": "rep",
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
//     "info": "Uses regex to replace all instances of a string in a string with what you specify.",
//     "example": [
//         "let newString = regExReplaceAll(needle, rep, haystack)"
//     ]
// } JSODOC
export function regExReplaceAll(needle, rep, haystack) {
    const special = ["-", "[", "]", "/", "{", "}", "(", ")", "*", "+", "?", ".", "\\", "^", "$", "|"];
    if (needle.length == 1) {
        if (isInArray(needle, special)) {
            needle = "\\" + needle;
        }
    }
    const searchRegExp = new RegExp(needle, 'g');
    return haystack.replace(searchRegExp, rep);

}