// JSODOC = {
//     "method": "getCleanJSONString",
//     "params": [
//         {
//             "name": "s",
//             "type": "String",
//             "required": true,
//             "info": "JSON String to parse."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Attempts to clean up special characters in a JSON string and make it JSON valid.",
//     "example": [
//         "let newString = getCleanJSONString(oldString)"
//     ]
// } JSODOC
export function getCleanJSONString (s) {
    // preserve newlines, etc - use valid JSON
    s = s.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f");
    // remove non-printable and other non-valid JSON chars
    s = s.replace(/[\u0000-\u0019]+/g, "");
    return s;
}