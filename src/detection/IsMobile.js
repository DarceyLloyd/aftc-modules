// JSODOC = {
//     "method": "isMobile",
//     "params": [],
//     "returns": "",
//     "info": "Detects if mobile or not.",
//     "example": [
//         "let mobile = isMobile()"
//     ]
// } JSODOC

export function isMobile(){
    // Windows Phone must come first because its UA also contains "Android"!
    let ua = navigator.userAgent.toLowerCase();
    if (/windows phone/i.test(ua)) {
        return true;
    } else {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        } else {
            return false;
        }
    }
}