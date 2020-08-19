export function isIE () {
    // let is_ie = navigator.userAgent.toLowerCase().indexOf('MSIE') > -1;
    // return is_ie;
    // params.isIE = navigator.userAgent.match(/MSIE|Trident/);
    // params.isIE = document.documentMode; // IS9 and above
    return /*@cc_on!@*/false || !!document.documentMode; // Internet Explorer 6-11
}
