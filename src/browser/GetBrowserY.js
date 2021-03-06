// JSODOC = {
//     "method": "getBrowserY",
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Gets the viewport y position.",
//     "example": [
//         "let x = getBrowserY()"
//     ]
// } JSODOC

export function getBrowserY(){
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    // let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    return y;
}
