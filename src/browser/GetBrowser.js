// JSODOC = {
//     "method": "getBrowser",
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets the name of the browser you are using (opera | chrome | safari | firefox | msie | trident | edge).",
//     "example": [
//         "let browser = getBrowser()"
//     ]
// } JSODOC

export function getBrowser() {
    let ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|edge|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE';
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/);
        if (tem != null) {
            return 'Opera';
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return M[0];
}