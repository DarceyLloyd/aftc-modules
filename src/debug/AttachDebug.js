export function AttachDebug(no,ele) {
    // return id's not the div create elements as these are type of object and not html element
    let ids = [];

    let debugContainer = document.createElement("div");
    debugContainer.id = "debug-container";
    debugContainer.style.position = "absolute";
    debugContainer.style.right = "5px";
    debugContainer.style.top = "5px";
    debugContainer.style.textAlgin = "right";


    window.aftcDebug = [];

    for (let i = 0; i < no; i++) {
        let r = Math.round(Math.random()*9999999999);
        let id = "aftc-debug-container-" + r;
        let div = document.createElement("div");
        div.id = id;
        div.style.minWidth = "50px";
        div.style.height = "22px";
        div.style.marginBottom = "3px";
        div.style.border = "1px dashed #999999";
        div.style.background = "RGBA(255,255,255,0.9)";
        div.classList.add("debug-row");
        debugContainer.appendChild(div);
        div.addEventListener("click", function (e) {
            console.log(this.innerHTML);
        });

        window.aftcDebug.push(div);
        ids.push(id);
    }
    if (ele){
        ele.appendChild(debugContainer);
    } else {
        document.body.appendChild(debugContainer);
    }

    console.warn("AttachDebug(): Attached!");
    console.warn("AttachDebug(): Use DebugTo(index,string) to write directly to debug elements.");
    return ids;
}