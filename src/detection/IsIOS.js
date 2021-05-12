// JSODOC = {
//     "method": "isIOS",
//     "info": "Detects if iOS or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isIOS()"
//     ]
// } JSODOC

export function isIOS() {
    let ua = navigator.userAgent;

    if (/iPad Simulator|iPhone Simulator|iPod Simulator|iPad|iPod|iPhone/i.test(ua)) {
        return true;
    } else {
        return false;
    }
}
