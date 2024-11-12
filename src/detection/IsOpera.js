export function isOpera() {
    const userAgent = window.navigator.userAgent;
    const isOperaOld = userAgent.includes("Opera");
    const isOperaNew = userAgent.includes("OPR/") || (typeof window.opr !== 'undefined' && window.opr.addons);
    return isOperaOld || isOperaNew;
}
