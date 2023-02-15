import { debugTo } from "../debug/debugTo";
import { getRandomInt } from "../math/getRandomInt";
import { getRandomString } from "../string/getRandomString";
// - - - - - - - - - - - - -

// interfaces
interface iVec3 {
  x: number,
  y: number,
  z: number,
}
// - - - - - - - - - - - - -

// types
// - - - - - - - - - - - - -

export class AttachKeysToVec3 {
  // W A S D = 87 65 83 68
  // Q E = 81 69
  // NumPad Arrows = 8 4 5 6 = 104 100 101 102
  // NumPad 7 8 = 103 105
  // Space = 32

  // Var defs
  v3: iVec3 = { x: 0, y: 0, z: 0 };

  keyMode: string;

  moveSpeed = 0.02;
  rotationSpeed = 0.1;

  shiftLeftDown = false;
  altLeftDown = false;

  keyDown = "";

  updatedMove = false;
  updatedRot = false;
  updateScale = false;
  scaleSpeed = false;

  updateTimer!: any;

  label = "";
  debugToEnabled = false;
  debugToIndex = 0;

  // WARNING: Multiple instances will make many of these
  inputOverlayAdded = false;
  inputsOverlay!: HTMLDivElement;
  inputId = "";
  onUpdateFn!: Function | null;
  // - - - - - - - - - - - - -

  constructor(
    v3: any,
    keyMode = "awsd",
    label?: string,
    debugToEnabled?: boolean,
    debugToIndex?: number,
    onUpdateFn: Function | null = null
  ) {
    // log(`AttachKeysToVec3()`);

    this.v3 = v3 as iVec3;
    this.keyMode = keyMode;
    this.onUpdateFn = onUpdateFn;

    if (label !== undefined && debugToEnabled !== undefined && debugToIndex !== undefined) {
      this.label = label;
      this.debugToEnabled = debugToEnabled;
      this.debugToIndex = debugToIndex;
    }

    window.addEventListener("keydown", (e) => {
      // log(e);
      // log(e.key);
      // log(e.code);

      // Special key flags
      // if (e.code === "ShiftLeft") {
      //   this.shiftLeftDown = true;
      // }

      // if (e.code === "AltLeft") {
      //   this.altLeftDown = true;
      // }

      this.keyDown = e.key;
    });

    window.addEventListener("keyup", (e) => {
      // log(e.code);

      if (e.code == "Space" && this.inputOverlayAdded === false) {
        this.showInputs();
      }

      // Special key flags
      // if (e.code === "ShiftLeft") {
      //   this.shiftLeftDown = false;
      // }

      // if (e.code === "AltLeft") {
      //   this.altLeftDown = false;
      // }

      this.keyDown = "";
    });


    window.addEventListener("keydown", (e) => {
      // log(e.code);


      if (this.onUpdateFn) {
        this.onUpdateFn();
      }
    });

    // Update on timer, requestAnimationFrame too fast for accurate values
    this.updateTimer = setInterval(() => {
      this.update();
    }, 30);

    // Run once
    this.updatedMove = true;
    this.logToConsole();
  }
  // - - - - - - - - - - - - -

  update() {
    let inc = this.moveSpeed;
    if (this.shiftLeftDown === true) {
      inc *= 0.5;
    }

    // AWSD QE Position
    if (this.keyMode === "awsd") {
      if (this.keyDown === "w") {
        this.updatedMove = true;
        this.v3.z -= inc;
      }
      if (this.keyDown === "s") {
        this.updatedMove = true;
        this.v3.z += inc;
      }
      if (this.keyDown === "a") {
        this.updatedMove = true;
        this.v3.x -= inc;
      }
      if (this.keyDown === "d") {
        this.updatedMove = true;
        this.v3.x += inc;
      }
      if (this.keyDown === "q") {
        this.updatedMove = true;
        this.v3.y -= inc;
      }
      if (this.keyDown === "e") {
        this.updatedMove = true;
        this.v3.y += inc;
      }
    } else {
      if (this.keyDown === "8") {
        this.updatedMove = true;
        this.v3.z -= inc;
      }
      if (this.keyDown === "5") {
        this.updatedMove = true;
        this.v3.z += inc;
      }
      if (this.keyDown === "4") {
        this.updatedMove = true;
        this.v3.x -= inc;
      }
      if (this.keyDown === "6") {
        this.updatedMove = true;
        this.v3.x += inc;
      }
      if (this.keyDown === "7") {
        this.updatedMove = true;
        this.v3.y -= inc;
      }
      if (this.keyDown === "9") {
        this.updatedMove = true;
        this.v3.y += inc;
      }
    }

    this.logToConsole();
  }
  // - - - - - - - - - - - - - - - - - - - - - - - -

  logToConsole() {
    let msg = "";

    if (this.updatedMove === true) {
      const x = this.v3.x.toFixed(3);
      const y = this.v3.y.toFixed(3);
      const z = this.v3.z.toFixed(3);

      if (this.label != undefined) {
        msg = `${this.label}: x:${x}, y:${y}, z:${z}`;
      } else {
        msg = `Pos: x:${x}, y:${y}, z:${z}`;
      }

      if (this.debugToEnabled) {
        debugTo(this.debugToIndex, msg);
      }
      console.log(msg);

      this.updatedMove = false;
      return;
    }
  }
  // - - - - - - - - - - - - - - - - - - - - - - - -

  showInputs() {
    if (this.inputOverlayAdded === true) {
      return;
    }
    this.inputOverlayAdded = true;

    this.inputsOverlay = document.createElement("div");
    this.inputsOverlay.id = "aktv3";
    this.inputsOverlay.style.zIndex = "99999";
    this.inputsOverlay.style.position = "fixed";
    this.inputsOverlay.style.left = getRandomInt(10, 50) + "%";
    this.inputsOverlay.style.top = getRandomInt(10, 50) + "%";
    // this.inputsOverlay.style.transform = "translate(50% 50%)";
    this.inputsOverlay.style.background = "RGBA(255,255,255,0.85)";
    this.inputsOverlay.style.display = "flex";
    this.inputsOverlay.style.flexWrap = "no-wrap";
    this.inputsOverlay.style.alignItems = "center";
    this.inputsOverlay.style.flexWrap = "no-wrap";
    this.inputsOverlay.style.padding = "5px";

    const span: HTMLSpanElement = document.createElement("span");
    span.innerHTML = `Move speed ${this.label}: `;

    const input: HTMLInputElement = document.createElement("input");
    input.id = "aktv3_speed_" + getRandomString(5);
    this.inputId = input.id;
    input.type = "number";
    input.value = this.moveSpeed.toFixed(3);

    const btn: HTMLButtonElement = document.createElement("button");
    btn.id = "aktv3_btn";
    btn.type = "button";
    btn.innerHTML = "SET";
    btn.style.margin = "3px";
    btn.style.padding = "3px";
    btn.style.cursor = "pointer";
    btn.style.border = "1px solid #000000";
    btn.addEventListener("click", () => {
      this.saveSpeedAndHideInputs();
    });

    this.inputsOverlay.appendChild(span);
    this.inputsOverlay.appendChild(input);
    this.inputsOverlay.appendChild(btn);

    document.body.appendChild(this.inputsOverlay);
  }
  // - - - - - - - - - - - - - - - - - - - - - - - -

  saveSpeedAndHideInputs() {
    this.inputOverlayAdded = false;
    const input: HTMLInputElement = document.getElementById(this.inputId) as HTMLInputElement;
    this.moveSpeed = parseFloat(input.value);
    // warn(input.value);
    // warn(this.moveSpeed);

    document.body.removeChild(this.inputsOverlay);
  }
  // - - - - - - - - - - - - - - - - - - - - - - - -
}
