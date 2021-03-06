// JSODOC = {
//     "method": "isAndroid",
//     "info": "Detects if Android or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isAndroid()"
//     ]
// } JSODOC

export function isAndroid(){
    let ua = navigator.userAgent.toLowerCase();
    if (/windows phone/i.test(ua)) {
        return false;
    } else {
        let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
        return isAndroid;
    }
}
