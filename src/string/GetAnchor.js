// JSODOC = {
//     "method": "getAnchor",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "info": "String to get anchor from."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns the anchor from a url string.",
//     "example": [
//         "let anchor = getAnchor(url)"
//     ]
// } JSODOC
export function getAnchor(url) {
    if (!url) { url = window.location.href; }
    let anchorAvailable = isInString("#", url);
    if (anchorAvailable) {
        return url.slice(url.lastIndexOf('#') + 1);
    } else {
        return false;
    }
}