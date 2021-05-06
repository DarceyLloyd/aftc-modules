// JSODOC = {
//     "method": "isElement2",
//     "params": [
//         {
//             "name": "ele",
//             "type": "Element||Object",
//             "required": true,
//             "default": null,
//             "info": "Element / Object to check."
//         }
//     ],
//     "info": "Checks if object is HTMLElement (Method 2).",
//     "example": [
//         "let result = isElement2(myElement)"
//     ]
// } JSODOC

export function isElement2(ele) {
    // works on major browsers back to IE7
    return ele instanceof Element;
}
