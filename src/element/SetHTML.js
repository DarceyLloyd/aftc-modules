export function setHTML(elementOrId, str, mode = "set") {
    let ele;
    if (typeof (elementOrId) === "string") {
        ele = document.getElementById(elementOrId);
        if (!ele) {
            ele = document.querySelector(elementOrId);
        }
    } else {
        ele = elementOrId;
    }

    if (ele) {

        switch (mode) {
            case "append":
                ele.innerHTML += str + "<br>";
                break;
            case "prepend":
                ele.innerHTML = str + "<br>" + ele.innerHTML;
                break;
            default:
                ele.innerHTML = str;
                break;
        }

     

    } else {
        return "setHTML(elementOrId, str): Usage error: Unable to retrieve element id or use element [" + elementOrId + "]";
    }
}