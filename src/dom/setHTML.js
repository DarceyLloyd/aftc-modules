// JSODOC = {
//     "method": "setHTML",
//     "params": [
//         {
//             "name": "elementOrId",
//             "type": "Element||ElementID",
//             "required": true,
//             "default": null,
//             "info": "The element or the element ID."
//         },
//         {
//             "name": "str",
//             "type": "String||Number",
//             "required": true,
//             "default": null,
//             "info": "The content you want to put into the html element."
//         },
//         {
//             "name": "mode",
//             "type": "String (set|append|prepend)",
//             "required": false,
//             "default": "Set",
//             "info": "The method in which to set the HTML of the targeted element, set it clearing all content or to append or prepend you content."
//         }
//     ],
//     "info": "Set a an elements HTML content.",
//     "example": [
//         "setHTML(myElement,'hello world')",
//         "setHTML(myElement,'hello world','append')",
//         "setHTML(myElement,'hello world','prepend')",
//         "",
//         "setHTML('my-element-id-1','hello world')",
//         "setHTML('my-element-id-2','hello world','append')",
//         "setHTML('my-element-id-3','hello world','prepend')"
//     ]
// } JSODOC

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

    } 
}