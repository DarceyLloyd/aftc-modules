export function IsSafari() {
    // let is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    // return is_safari;
    return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
}