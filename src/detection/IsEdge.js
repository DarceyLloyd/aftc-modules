// JSODOC = {
//     "method": "isEdge",
//     "info": "Detects if Edge or not.",
//     "example": [
//         "let test = isEdge()"
//     ]
// } JSODOC

export function isEdge () {
    //let isEdge = !isIE && !!window.StyleMedia; // Edge 20+
    let edge = false;
    if (/Edge\/\d./i.test(navigator.userAgent)) {
        edge = true;
    }
    return edge;
}