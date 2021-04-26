// JSODOC = {
//     "method": "getIEVersion",
//     "params": [],
//     "returns": "",
//     "info": "Gets the version of IE",
//     "example": [
//         "let version = getIEVersion()"
//     ]
// } JSODOC

export function getIEVersion () {
    let match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    return match ? parseInt(match[1]) : undefined;
}