export function logTo(elementOrId,msg,append=false,endOfLine=""){
    function isElement(o) {
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
                o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
        );
    }

    let ele = false;
    if (typeof(elementOrId) == "string"){
        elementOrId = elementOrId.replace("#","");
        ele = document.getElementById(elementOrId);
        if (!ele){
            console.error("LogTo(): Unable to find ID '" + elementOrId + "' on the DOM!");
            return false;
        }
    } else {
        ele = elementOrId;
    }

    if (isElement(ele)){
        if (append === true){
            ele.innerHTML = ele.innerHTML + msg + endOfLine;
        } else {
            ele.innerHTML = msg + endOfLine;
        }

    } else {
        console.error("LogTo(): Unable to log to element or id provided!");
        console.error(elementOrId);
        return false;
    }
}

