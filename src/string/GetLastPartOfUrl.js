// JSODOC = {
//     "method": "getLastPartOfUrl",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "info": "The url string to get the last part from."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns the last segment of a url split by slashes.",
//     "example": [
//         "let lastSegment = getLastPartOfUrl(url)"
//     ]
// } JSODOC
export function getLastPartOfUrl(url) {
    if (!url) {
        url = window.location.href;
    }
    let part = url.substring(url.lastIndexOf('/') + 1);
    return part;
}