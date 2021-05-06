// JSODOC = {
//     "method": "isSafari",
//     "info": "Detects if Safari or not.",
//     "example": [
//         "let test = isSafari()"
//     ]
// } JSODOC

export function isSafari() {
    // let is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    // return is_safari;
    return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
}