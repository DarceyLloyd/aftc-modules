export function LogTo(elementOrId,msg){
    function isElement(o) {
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
                o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
        );
    }

    let ele = false;
    if (typeof(elementOrId) == "string"){
        ele = document.getElementById(elementOrId);
    } else {
        ele = elementOrId;
    }

    if (isElement(ele)){
        ele.innerHTML = msg;
    } else {
        console.log("LogTo(): Unable to log to element or id provided!");
        return false;
    }
}

