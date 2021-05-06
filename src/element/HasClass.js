// JSODOC = {
//     "method": "hasClass",
//     "params": [
//         {
//             "name": "elementOrId",
//             "type": "Element||ElementID",
//             "required": true,
//             "default": null
//         },
//         {
//             "name": "ele",
//             "type": "Element",
//             "required": true,
//             "default": null,
//             "info": "Element to get the position of."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Gets an elements offset top position.",
//     "example": [
//         "let classAttached = hasClass(myElement,'selected')"
//     ]
// } JSODOC

export function hasClass(elementOrId, c) {
    if (isElement(elementOrId)) {
        return elementOrId.classList.contains(c);
    } else {
        return getElementById(elementOrId).classList.contains(c);
    }
}