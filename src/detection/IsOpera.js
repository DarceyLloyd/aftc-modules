// JSODOC = {
//     "method": "isOpera",
//     "info": "Detects if Opera or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isOpera()"
//     ]
// } JSODOC

export function isOpera() {
    // let isChromium = window.chrome;
    // let isOpera = window.navigator.userAgent.indexOf("OPR") > -1 || window.navigator.userAgent.indexOf("Opera") > -1;
    // let isOpera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
    let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    return isOpera;
}