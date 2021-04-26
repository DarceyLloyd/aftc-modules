// JSODOC = {
//     "method": "isElement",
//     "params": [
//         {
//             "name": "ele",
//             "type": "Element||Object",
//             "required": true,
//             "default": null,
//             "info": "Element / Object to check."
//         }
//     ],
//     "returns": "",
//     "info": "Checks if object is HTMLElement.",
//     "example": [
//         "let result = isElement(myElement)"
//     ]
// } JSODOC

export function isElement(ele) {
    let answer = (
        typeof HTMLElement === "object" ? ele instanceof HTMLElement : //DOM2
        ele && typeof ele === "object" && ele !== null && ele.nodeType === 1 && typeof ele.nodeName === "string"
    );

    if (answer != true) {
        return false;
    } else {
        return true;
    }
}