export enum ePosition {
  TopLeft = "top_left",
  TopCenter = "top_center",
  TopRight = "top_right",
  BtmLeft = "btm_left",
  BtmCenter = "btm_center",
  BtmRight = "btm_right",
}

export class VisualDebug {
  private static instance: VisualDebug;
  private ids: string[] = [];
  private debugContainer: HTMLDivElement;
  private debugRow: HTMLDivElement[] = [];
  private dragOffsetX: number = 0;
  private dragOffsetY: number = 0;
  private isDragging: boolean = false;
  public enabled: boolean = true;

  private constructor() {
    this.debugContainer = document.createElement("div");
    this.createDraggableBar();
  }

  public static getInstance(): VisualDebug {
    if (!VisualDebug.instance) {
      VisualDebug.instance = new VisualDebug();
    }
    return VisualDebug.instance;
  }

  private createDraggableBar(): void {
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
      if (!this.isDragging) return;
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

  enable(): void {
    this.enabled = true;
  }

  disable(): void {
    this.enabled = false;
  }

  private containerOpacity: number = 1;
  public setContainerOpacity(opacity: number): void {
    this.containerOpacity = opacity;
  }

  private rowOpacity: number = 1;
  public setRowOpacity(opacity: number): void {
    this.rowOpacity = opacity;
  }

  private rowBg: string = "#000000";
  public setRowBg(hex: string): void {
    this.rowBg = hex;
  }

  private rowFontColor: string = "#FFFFFF";
  public setRowFontColor(hex: string): void {
    this.rowFontColor = hex;
  }

  private rowMargin: number = 0;
  public setRowMargin(margin: number): void {
    this.rowMargin = margin;
  }

  private fontSizeString: string = "12px";
  public setFontSize(size: number): void {
    this.fontSizeString = size + "px";
  }

  public build(noOfDebugFields = 6, position: ePosition = ePosition.TopRight): void {
    if (this.enabled === false) { return; }

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
        const ele = e.currentTarget as HTMLDivElement;
        const msg = ele.getAttribute("v");
        if (msg) {
          const sanitizedMsg = msg.replace(/\n|\r|\t| {2,}/g, " ");
          navigator.clipboard.writeText(sanitizedMsg).catch((err) => console.error("Clipboard error:", err));
        } else {
          navigator.clipboard.writeText("").catch((err) => console.error("Clipboard error:", err));
        }
      });

      this.ids.push(id);
    }

    document.body.appendChild(this.debugContainer);
  }

  private setPosition(position: ePosition): void {
    if (this.enabled === false) { return; }

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

  public debugTo(debugFieldIndex: number = 0, label: string | null, value: any, fontSizeOverride: number | null = null): void {
    if (this.enabled === false) { return; }

    const id = this.ids[debugFieldIndex];
    const ele = document.getElementById(id) as HTMLDivElement | null;

    if (!ele) return;

    ele.setAttribute("v", value);

    ele.innerHTML = label ? `${label} ${value}` : `${value}`;

    if (fontSizeOverride !== null) {
      ele.style.fontSize = fontSizeOverride + "px";
    }
  }

  public clear(): void {
    if (this.enabled === false) { return; }

    this.ids.forEach((id) => {
      const ele = document.getElementById(id) as HTMLDivElement | null;
      if (ele) {
        ele.innerHTML = "";
      }
    });
  }

  public hide(): void {
    this.debugContainer.style.display = "none";
  }

  public show(): void {
    this.debugContainer.style.display = "block";
  }

  public destroy(): void {
    if (this.debugContainer.parentElement) {
      this.debugContainer.parentElement.removeChild(this.debugContainer);
    }
    this.ids = [];
  }
}
