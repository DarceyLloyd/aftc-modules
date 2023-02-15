export enum eVisualDebugPosition {
  "TopLeft" = "top_left",
  "TopCenter" = "top_center",
  "TopRight" = "top_right",
  "BtmLeft" = "btm_left",
  "BtmCenter" = "btm_center",
  "BtmRight" = "btm_right",
}



export class VisualDebug {
  private static instance: VisualDebug;

  private ids: string[] = [];
  private debugContainer: HTMLDivElement;
  private debugRow: HTMLDivElement[] = [];
  // - - - - - - - - - - - - -

  public static getInstance(): VisualDebug {
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


  doesUrlKeyExist(key: string): boolean {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.has(key);

  }

  getUrlKeyValue(key: string): string | null {
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

  build(noOfDebugFields = 1, position: eVisualDebugPosition) {

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
      case "top_left":
        this.debugContainer.style.left = "5px";
        this.debugContainer.style.top = "5px";
        // this.debugContainer.style.textAlign = "left";
        break;
      case "top_center":
        this.debugContainer.style.left = "50%";
        this.debugContainer.style.top = "5px";
        this.debugContainer.style.transform = "translateX(-50%)";
        // this.debugContainer.style.textAlign = "left";
        break;
      case "top_right":
        this.debugContainer.style.right = "5px";
        this.debugContainer.style.top = "5px";
        // this.debugContainer.style.textAlign = "right";
        break;
      case "btm_left":
        this.debugContainer.style.left = "5px";
        this.debugContainer.style.bottom = "5px";
        // this.debugContainer.style.textAlign = "left";
        break;
      case "btm_center":
        this.debugContainer.style.left = "50%";
        this.debugContainer.style.bottom = "5px";
        this.debugContainer.style.transform = "translateX(-50%)";
        // this.debugContainer.style.textAlign = "left";
        break;
      case "btm_right":
        this.debugContainer.style.right = "5px";
        this.debugContainer.style.bottom = "5px";
        // this.debugContainer.style.textAlign = "right";
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
        const ele: HTMLDivElement = e.currentTarget as HTMLDivElement;
        let msg: string | null = ele.getAttribute("v");

        if (msg !== null) {
          let formattedMsg: string = msg.replace(/\n|\r|\t/g, ' ').replace(/ {2,}/g, ' ');
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

  debugTo(debugFiledIndexNo = 0, label: string | null, value: any, fontSizeOveride: number | null = null) {
    const id: string = this.ids[debugFiledIndexNo];
    const ele: HTMLDivElement = document.getElementById(id) as HTMLDivElement;

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
    let ele: HTMLDivElement;
    for (let i = 0; i < debugFieldCount; i++) {
      id = this.ids[i];
      ele = document.getElementById(id) as HTMLDivElement;
      if (ele) {
        ele.innerHTML = "";
      }
    }

  }
  // - - - - - - - - - - - - - - - - - - - - - - - -
}