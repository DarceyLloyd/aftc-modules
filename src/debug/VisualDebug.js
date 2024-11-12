export var ePosition;
(function (ePosition) {
    ePosition["TopLeft"] = "top_left";
    ePosition["TopCenter"] = "top_center";
    ePosition["TopRight"] = "top_right";
    ePosition["BtmLeft"] = "btm_left";
    ePosition["BtmCenter"] = "btm_center";
    ePosition["BtmRight"] = "btm_right";
})(ePosition || (ePosition = {}));
export class VisualDebug {
    constructor() {
        this.ids = [];
        this.debugRow = [];
        this.dragOffsetX = 0;
        this.dragOffsetY = 0;
        this.isDragging = false;
        this.enabled = true;
        this.containerOpacity = 1;
        this.rowOpacity = 1;
        this.rowBg = "#000000";
        this.rowFontColor = "#FFFFFF";
        this.rowMargin = 0;
        this.fontSizeString = "12px";
        this.debugContainer = document.createElement("div");
        this.createDraggableBar();
    }
    static getInstance() {
        if (!VisualDebug.instance) {
            VisualDebug.instance = new VisualDebug();
        }
        return VisualDebug.instance;
    }
    createDraggableBar() {
        const dragBar = document.createElement("div");
        dragBar.style.display = "flex";
        dragBar.style.height = "20px";
        dragBar.style.width = "100%";
        dragBar.style.backgroundColor = "#333";
        dragBar.style.cursor = "move";
        dragBar.style.userSelect = "none";
        this.debugContainer.appendChild(dragBar);
        dragBar.addEventListener("mousedown", (e) => {
            this.isDragging = true;
            this.dragOffsetX = e.clientX - this.debugContainer.offsetLeft;
            this.dragOffsetY = e.clientY - this.debugContainer.offsetTop;
        });
        document.addEventListener("mousemove", (e) => {
            if (!this.isDragging)
                return;
            this.debugContainer.style.left = `${e.clientX - this.dragOffsetX}px`;
            this.debugContainer.style.top = `${e.clientY - this.dragOffsetY}px`;
        });
        document.addEventListener("mouseup", () => {
            this.isDragging = false;
        });
        document.addEventListener("mouseleave", () => {
            this.isDragging = false;
        });
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
    }
    setContainerOpacity(opacity) {
        this.containerOpacity = opacity;
    }
    setRowOpacity(opacity) {
        this.rowOpacity = opacity;
    }
    setRowBg(hex) {
        this.rowBg = hex;
    }
    setRowFontColor(hex) {
        this.rowFontColor = hex;
    }
    setRowMargin(margin) {
        this.rowMargin = margin;
    }
    setFontSize(size) {
        this.fontSizeString = size + "px";
    }
    build(noOfDebugFields = 6, position = ePosition.TopRight) {
        if (this.enabled === false) {
            return;
        }
        this.debugContainer.id = "aftc_debug_container";
        this.debugContainer.style.zIndex = "99999";
        this.debugContainer.style.display = "table";
        this.debugContainer.style.position = "fixed";
        this.debugContainer.style.minWidth = "100px";
        this.debugContainer.style.minHeight = "25px";
        this.debugContainer.style.fontFamily = "sans-serif";
        // this.debugContainer.style.background = "#990000";
        this.debugContainer.style.fontSize = this.fontSizeString;
        this.debugContainer.style.opacity = this.containerOpacity.toString();
        this.setPosition(position);
        for (let i = 1; i <= noOfDebugFields; i++) {
            const id = "aftc_debug_field_" + Math.round(Math.random() * 9999999999);
            const div = document.createElement("div");
            div.id = id;
            div.style.minWidth = "50px";
            div.style.marginBottom = this.rowMargin + "px";
            div.style.border = "1px dashed #999999";
            div.style.padding = "1px 2px 2px 4px";
            div.style.background = this.rowBg;
            div.style.color = this.rowFontColor;
            div.style.fontSize = this.fontSizeString;
            div.style.opacity = this.rowOpacity.toString();
            div.classList.add("aftc_debug_row");
            this.debugContainer.appendChild(div);
            div.addEventListener("click", (e) => {
                const ele = e.currentTarget;
                const msg = ele.getAttribute("v");
                if (msg) {
                    const sanitizedMsg = msg.replace(/\n|\r|\t| {2,}/g, " ");
                    navigator.clipboard.writeText(sanitizedMsg).catch((err) => console.error("Clipboard error:", err));
                }
                else {
                    navigator.clipboard.writeText("").catch((err) => console.error("Clipboard error:", err));
                }
            });
            this.ids.push(id);
        }
        document.body.appendChild(this.debugContainer);
    }
    setPosition(position) {
        if (this.enabled === false) {
            return;
        }
        switch (position) {
            case ePosition.TopLeft:
                this.debugContainer.style.left = "5px";
                this.debugContainer.style.top = "5px";
                break;
            case ePosition.TopCenter:
                this.debugContainer.style.left = "50%";
                this.debugContainer.style.top = "5px";
                this.debugContainer.style.transform = "translateX(-50%)";
                break;
            case ePosition.TopRight:
                this.debugContainer.style.right = "5px";
                this.debugContainer.style.top = "5px";
                break;
            case ePosition.BtmLeft:
                this.debugContainer.style.left = "5px";
                this.debugContainer.style.bottom = "5px";
                break;
            case ePosition.BtmCenter:
                this.debugContainer.style.left = "50%";
                this.debugContainer.style.bottom = "5px";
                this.debugContainer.style.transform = "translateX(-50%)";
                break;
            case ePosition.BtmRight:
                this.debugContainer.style.right = "5px";
                this.debugContainer.style.bottom = "5px";
                break;
        }
    }
    debugTo(debugFieldIndex = 0, label, value, fontSizeOverride = null) {
        if (this.enabled === false) {
            return;
        }
        const id = this.ids[debugFieldIndex];
        const ele = document.getElementById(id);
        if (!ele)
            return;
        ele.setAttribute("v", value);
        ele.innerHTML = label ? `${label} ${value}` : `${value}`;
        if (fontSizeOverride !== null) {
            ele.style.fontSize = fontSizeOverride + "px";
        }
    }
    clear() {
        if (this.enabled === false) {
            return;
        }
        this.ids.forEach((id) => {
            const ele = document.getElementById(id);
            if (ele) {
                ele.innerHTML = "";
            }
        });
    }
    hide() {
        this.debugContainer.style.display = "none";
    }
    show() {
        this.debugContainer.style.display = "block";
    }
    destroy() {
        if (this.debugContainer.parentElement) {
            this.debugContainer.parentElement.removeChild(this.debugContainer);
        }
        this.ids = [];
    }
}
