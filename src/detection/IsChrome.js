// JSODOC = {
//     "method": "isChrome",
//     "info": "Detects if Chrome or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isChrome()"
//     ]
// } JSODOC

export function isChrome() {
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");

    // Have to detect edge first as it's now chromium based
    if (/Edge|Edg\/\d./i.test(navigator.userAgent)) {
    // if (/Edge\/\d./i.test(navigator.userAgent)) {
        return false;
    }

    if (isIOSChrome) {
        // is Google Chrome on IOS
        return true;
    } else if (
        isChromium !== null &&
        typeof isChromium !== "undefined" &&
        vendorName === "Google Inc." &&
        isOpera === false &&
        isIEedge === false
    ) {
        // is Google Chrome
        return true;
    } else {
        // not Google Chrome
        return false;
    }
}