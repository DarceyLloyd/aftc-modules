export function IsDOM(obj) {
    // this works for newer browsers
    try { return obj instanceof HTMLElement; }

        // this works for older browsers
    catch (e) {
        return (typeof obj === "object") &&
            (obj.nodeType === 1) && (typeof obj.style === "object") &&
            (typeof obj.ownerDocument === "object");
    }
};