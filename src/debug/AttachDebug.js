// JSODOC = {
//     "method": "attachDebug",
//     "params": [
//         {
//             "name": "no",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number of debug elements you want available."
//         },
//         {
//             "name": "position",
//             "type": "String (tl, top left, tr, top right, bl, btm left, br, btm right)",
//             "required": true,
//             "default": "top left",
//             "info": "Position of the debug list."
//         },
//         {
//             "name": "ele",
//             "type": "Element",
//             "required": false,
//             "default": "document.body",
//             "info": "The debug list will be appended to this element"
//         }
//     ],
//     "info": "Displays a visual debug list so you can watch variables change in real time (Most excellent for debug with keys, animations etc). Click row to inject that value into copy and paste buffer. See <b>debugTo</b> to use attachDebug, usage example below.",
//     "example": [
//         "attachDebug(3)",
//         "debugTo(0,'hello world 1')",
//         "debugTo(1,'hello world 2')",
//         "debugTo(2,'hello world 3')"
//     ]
// } JSODOC

export function attachDebug(no, position, ele) {
    let ids = [];

    let debugContainer = document.createElement("div");
    debugContainer.id = "debug-container";
    debugContainer.style.zIndex = "999999";
    debugContainer.style.position = "fixed";

    if (!position) {
        position = "top left";
    }
    position = position.toLowerCase();

    if (position == "tl" || position == "top left") {
        debugContainer.style.left = "5px";
        debugContainer.style.top = "5px";
        debugContainer.style.textAlgin = "left";
    } else if (position == "tr" || position == "top right") {
        debugContainer.style.right = "5px";
        debugContainer.style.top = "5px";
        debugContainer.style.textAlgin = "right";
    } else if (position == "bl" || position == "btm left") {
        debugContainer.style.left = "5px";
        debugContainer.style.bottom = "5px";
        debugContainer.style.textAlgin = "left";
    } else if (position == "br" || position == "btm right") {
        debugContainer.style.right = "5px";
        debugContainer.style.bottom = "5px";
        debugContainer.style.textAlgin = "right";
    }

    window.aftcDebug = [];

    for (let i = 0; i < no; i++) {
        let r = Math.round(Math.random() * 9999999999);
        let id = "aftc-debug-container-" + r;
        let div = document.createElement("div");
        div.id = id;
        div.style.minWidth = "50px";
        // div.style.height = "20px";
        div.style.marginBottom = "3px";
        div.style.border = "1px dashed #999999";
        div.style.padding = "1px 2px 2px 4px";
        div.style.background = "RGBA(255,255,255,0.92)";
        div.style.color = "#000000";
        div.classList.add("debug-row");
        debugContainer.appendChild(div);
        div.addEventListener("click", function (e) {
            console.log(this.innerHTML);
        });

        window.aftcDebug.push(div);
        ids.push(id);
    }
    if (ele) {
        ele.appendChild(debugContainer);
    } else {
        document.body.appendChild(debugContainer);
    }

    console.warn("attachDebug(): Use debugTo(index,string) to write directly to debug elements.");
    return debugContainer;
}