export class VisualDebug {
  static instance;

  ids = [];
  debugContainer;
  debugRow = [];
  // - - - - - - - - - - - - -

  static getInstance() {
    if (!VisualDebug.instance) {
      VisualDebug.instance = new VisualDebug();
    }
    return VisualDebug.instance;
  }
  // - - - - - - - - - - - - - - - - - - - - - - - -

  constructor() {
    this.debugContainer = document.createElement("div");
  }
  // - - - - - - - - - - - - - - - - - - - - - - - -


  doesUrlKeyExist(key) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.has(key);

  }

  getUrlKeyValue(key) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const hasKey = urlParams.has(key);

    if (hasKey) {
      return urlParams.get(key);
    } else {
      // console.warn(`doesUrlKeyExist(): Key: ${key} is not found...`);
      return null;
    }
  }

  build(noOfDebugFields = 1, position = "topright") {

    this.debugContainer.id = "aftc_debug_container";
    this.debugContainer.style.zIndex = "99999";
    this.debugContainer.style.position = "fixed";
    this.debugContainer.style.background = "RGBA(255,255,255,0.3)";
    this.debugContainer.style.minWidth = "100px";
    this.debugContainer.style.minHeight = "25px";
    this.debugContainer.style.fontFamily = "sanserif";
    this.debugContainer.style.fontSize = "12px";

    if (this.doesUrlKeyExist("alpha")) {
      let a = this.getUrlKeyValue("alpha");
      if (a) {
        this.debugContainer.style.opacity = parseFloat(a).toString();
      }
    } else {
      this.debugContainer.style.opacity = "0.6";
    }



    switch (position) {
      case "topleft":
        this.debugContainer.style.left = "5px";
        this.debugContainer.style.top = "5px";
        break;
      case "topcenter":
        this.debugContainer.style.left = "50%";
        this.debugContainer.style.top = "5px";
        this.debugContainer.style.transform = "translateX(-50%)";
        break;
      case "topright":
        this.debugContainer.style.right = "5px";
        this.debugContainer.style.top = "5px";
        break;
      case "btmleft":
        this.debugContainer.style.left = "5px";
        this.debugContainer.style.bottom = "5px";
        break;
      case "btmcenter":
        this.debugContainer.style.left = "50%";
        this.debugContainer.style.bottom = "5px";
        this.debugContainer.style.transform = "translateX(-50%)";
        break;
      case "btmright":
        this.debugContainer.style.right = "5px";
        this.debugContainer.style.bottom = "5px";
        break;
    }

    for (let i = 1; i <= noOfDebugFields; i++) {
      const id = "aftc_debug_field_" + Math.round(Math.random() * 9999999999);
      const div = document.createElement("div");
      div.id = id;
      div.style.minWidth = "50px";
      // div.style.height = "20px";
      div.style.marginBottom = "3px";
      div.style.border = "1px dashed #999999";
      div.style.padding = "1px 2px 2px 4px";
      div.style.background = "RGBA(0,0,0,0.8)";
      div.style.color = "#FFFFFF";
      // div.style.fontFamily = "Times New Roman, Times, serif";
      div.style.fontSize = "12px";
      div.classList.add("aftc_debug_row");
      this.debugContainer.appendChild(div);
      div.addEventListener("click", function (e) {
        const ele = e.currentTarget;
        let msg = ele.getAttribute("v");

        if (msg !== null) {
          let formattedMsg = msg.replace(/\n|\r|\t/g, ' ').replace(/ {2,}/g, ' ');
          console.log(formattedMsg);
          navigator.clipboard.writeText(formattedMsg);
        } else {
          console.log(null);
          navigator.clipboard.writeText("");
        }
      });

      this.ids.push(id);
    }

    document.body.appendChild(this.debugContainer);
  }
  // - - - - - - - - - - - - -

  debugTo(debugFiledIndexNo = 0, label, value, fontSizeOveride = null) {
    const id = this.ids[debugFiledIndexNo];
    const ele = document.getElementById(id);

    if (!ele) {
      // NOTE: Do not DDOS console
      return;
    }

    ele.setAttribute("v", value);

    if (label) {
      ele.innerHTML = label + " " + value;
    } else {
      ele.innerHTML = value;
    }

    if (fontSizeOveride !== null) {
      ele.style.fontSize = fontSizeOveride + "px";
    }
  }
  // - - - - - - - - - - - - - - - - - - - - - - - -

  clear() {
    const debugFieldCount = document.querySelectorAll(".aftc_debug_row").length;
    // console.warn("debugFieldCount", debugFieldCount)

    let id = "";
    let ele = false;;
    for (let i = 0; i < debugFieldCount; i++) {
      id = this.ids[i];
      ele = document.getElementById(id);
      if (ele) {
        ele.innerHTML = "";
      }
    }

  }
  // - - - - - - - - - - - - - - - - - - - - - - - -
}