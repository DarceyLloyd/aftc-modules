// JSODOC = {
//     "method": "isSafari",
//     "info": "Detects if Safari or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isSafari()"
//     ]
// } JSODOC

export function isSafari() {
    // let is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    // return is_safari;
    // return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        return true;
    } else {
        return false;
    }
}