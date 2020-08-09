export function SetHTML(elementOrId, str) {
    let ele;
    if (typeof (elementOrId) === "string") {
        ele = document.getElementById(elementOrId);
        if (!ele){
            ele = document.querySelector(elementOrId);
        }
    } else {
        ele = elementOrId;
    }

    if (ele) {
        ele.innerHTML = str;
    } else {
        return "SetHTML(elementOrId, str): Usage error: Unable to retrieve element id or use element [" + elementOrId + "]";
    }
}