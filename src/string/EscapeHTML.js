// JSODOC = {
//     "method": "escapeHTML",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "String to escape html tags."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a string that has the standard html tags escaped.",
//     "example": [
//         "let newString = escapeHTML('<b>some html</b>')"
//     ]
// } JSODOC
export function escapeHTML(str) {
    if (typeof (str) != "string") { console.error("escape(arg): usage error: arg needs to be a string!"); return false; }

    let replacements = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "\"": "&quot;",
        "`": "&#039;"
    };
    return str.replace(/[<>&"]/g, function (character) {
        return replacements[character];
    });
}