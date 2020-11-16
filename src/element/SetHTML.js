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

        if (mode){
            mode = mode.toLowerCase();
        }

        switch (mode) {
            case "append":
                if (ele.innerHTML == ""){
                    ele.innerHTML += str;
                } else {
                    ele.innerHTML += "<br>" + str;
                }
                
                break;
            case "prepend":
                ele.innerHTML = str + "<br>" + ele.innerHTML;
                break;
            default:
                ele.innerHTML = str;
                break;
        }

    } else {
        return "setHTML(): Usage error: Unable to retrieve element id or use element [" + elementOrId + "]";
    }
}