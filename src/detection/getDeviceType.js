// JSODOC = {
//     "method": "getDeviceType",
//     "params": [],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns the device type mobile || tablet || desktop",
//     "example": [
//         "let deviceType = getDeviceType()"
//     ]
// } JSODOC

export const getDeviceType = () => {
    const ua = navigator.userAgent;
    //@ts-ignore
    if (!!window.MSInputMethodContext && !!document.documentMode) {
        // ie11
        return "desktop";
    }
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        return "mobile";
    }
    return "desktop";
};