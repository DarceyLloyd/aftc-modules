// JSODOC = {
//     "method": "appendTo",
//     "params": [
//         {
//             "name": "elementOrId",
//             "type": "Element||ElementID",
//             "required": true,
//             "default": null,
//             "info": "The element or element id of the element you wish to append the string within."
//         },
//         {
//             "name": "msg",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The string you wish to append to the html element."
//         },
//         {
//             "name": "endOfLine",
//             "type": "String",
//             "required": false,
//             "default": "< br >",
//             "info": "The end of the string that will be appended to the element, set to '' if you dont want the < br >"
//         }
//     ],
//     "returns": "",
//     "info": "Appends a string to an element, with or without a < BR > tag.",
//     "example": [
//         "appendTo(elementOrId,msg,'')"
//     ]
// } JSODOC

export function appendTo(elementOrId,msg,endOfLine="<br>"){
    // WARNING: IE11 Wont play nice even with webpack babel on defaults of args
    // WARNING: This will not be built for IE compatibility - please use aftc.js for that npm i aftc.js
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
            console.error("AppendTo(): Unable to find ID '" + elementOrId + "' on the DOM!");
            return false;
        }
    } else {
        ele = elementOrId;
    }

    if (isElement(ele)){
        ele.innerHTML = ele.innerHTML + msg + endOfLine;

    } else {
        console.error("AppendTo(): Unable to log to element or id provided!");
        console.error(elementOrId);
        return false;
    }
}

