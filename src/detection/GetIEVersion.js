// JSODOC = {
//     "method": "getIEVersion",
//     "info": "Gets the version of IE",
//     "returns": {
//         "type": "String"
//     },
//     "example": [
//         "let version = getIEVersion()"
//     ]
// } JSODOC

export function getIEVersion () {
    let match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    return match ? parseInt(match[1]) : undefined;
}