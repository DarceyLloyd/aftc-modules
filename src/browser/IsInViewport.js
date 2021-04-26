// JSODOC = {
//     "method": "isInViewport",
//     "params": [
//         {
//             "name": "el",
//             "type": "element",
//             "required": true,
//             "default": null,
//             "info": "The element you want to check is in view"
//         }
//     ],
//     "returns": "Boolean",
//     "info": "Checks whether an element is in view.",
//     "example": [
//         "let isInView = isInViewport(myElement)"
//     ]
// } JSODOC

export function isInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );


    // let bounding = ele.getBoundingClientRect();
    // return (
    //     bounding.top >= 0 &&
    //     bounding.left >= 0 &&
    //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );
}
