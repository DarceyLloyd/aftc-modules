export class FPSMonitor {
    constructor(ele: any);
    dom: {
        fps: boolean;
    };
    fpsStack: Float32Array;
    stackSize: number;
    index: number;
    last: number;
    now: number;
    delta: number;
    currentFrameFps: number;
    total: number;
    averageFps: number;
    i: number;
    update(): void;
    getFps(): number;
}
