// JSODOC = {
//     "method": "isIOS",
//     "info": "Detects if iOS or not.",
//     "example": [
//         "let test = isIOS()"
//     ]
// } JSODOC

export function isIOS() {
    let iDevices = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ];

    if (!!navigator.platform) {
        while (iDevices.length) {
            if (navigator.platform === iDevices.pop()){ return true; }
        }
    }

    return false;
}
