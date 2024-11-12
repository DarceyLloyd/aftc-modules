export class FPSMonitor {
    constructor(ele: any);
    dom: {
        fps: any;
    };
    stackSize: number;
    index: number;
    last: number;
    total: number;
    averageFps: number;
    fpsStack: Float32Array;
    update(): void;
    getFps(): number;
}
