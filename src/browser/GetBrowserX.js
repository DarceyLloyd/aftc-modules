// JSODOC = {
//     "method": "getBrowserX",
//     "params": [],
//     "returns": "Number",
//     "info": "Gets the viewport x position.",
//     "example": [
//         "let x = getBrowserX()"
//     ]
// } JSODOC

export function getBrowserX(){
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    // let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    return x;
}

