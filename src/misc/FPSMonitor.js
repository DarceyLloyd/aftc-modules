export class FPSMonitor {
    constructor(ele) {
      this.dom = { fps: ele || false };
      this.stackSize = 60;
      this.index = 0;
      this.last = 0;
      this.total = 0;
      this.averageFps = 0;
      this.fpsStack = new Float32Array(this.stackSize);
      this.update();
    }
  
    update() {
      const now = performance.now();
      const delta = (now - this.last) / 1000;
      const currentFrameFps = 1 / delta;
  
      this.fpsStack[this.index] = currentFrameFps;
      this.total += currentFrameFps - (this.fpsStack[this.index === 0 ? this.stackSize - 1 : this.index - 1]);
      this.averageFps = Math.round(this.total / this.stackSize);
  
      if (this.dom.fps) {
        this.dom.fps.innerText = this.averageFps;
      }
  
      this.last = now;
      this.index = (this.index + 1) % this.stackSize;
      requestAnimationFrame(() => this.update());
    }
  
    getFps() {
      return this.averageFps;
    }
  }
  