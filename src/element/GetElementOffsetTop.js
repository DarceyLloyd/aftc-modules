// JSODOC = {
//     "method": "getElementPos",
//     "params": [
//         {
//             "name": "ele",
//             "type": "Element",
//             "required": true,
//             "default": null,
//             "info": "Element to get the position of."
//         }
//     ],
//     "returns": "Number || False",
//     "info": "Gets an elements offset top position.",
//     "example": [
//         "let pos = getElementOffsetTop(myElement)"
//     ]
// } JSODOC

export function getElementOffsetTop(ele) {
    let curtop = 0;
    if (ele.hasOwnProperty("offsetParent")){
        do {
            curtop += ele.offsetTop;
        } while (ele = ele.offsetParent);
        return parseFloat([curtop]);
    } else {
        return false;
    }
}