// JSODOC = {
//     "method": "isDOM",
//     "params": [
//         {
//             "name": "obj",
//             "type": "Element||Object",
//             "required": true,
//             "default": null,
//             "info": "Element / Object to check."
//         }
//     ],
//     "info": "Checks if object is HTMLElement.",
//     "example": [
//         "let result = isDOM(myElement)"
//     ]
// } JSODOC

export function isDOM(obj) {
    // this works for newer browsers
    try { return obj instanceof HTMLElement; }

        // this works for older browsers
    catch (e) {
        return (typeof obj === "object") &&
            (obj.nodeType === 1) && (typeof obj.style === "object") &&
            (typeof obj.ownerDocument === "object");
    }
};