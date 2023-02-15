interface iVec3 {
    x: number;
    y: number;
    z: number;
}
export declare class AttachKeysToVec3 {
    v3: iVec3;
    keyMode: string;
    moveSpeed: number;
    rotationSpeed: number;
    shiftLeftDown: boolean;
    altLeftDown: boolean;
    keyDown: string;
    updatedMove: boolean;
    updatedRot: boolean;
    updateScale: boolean;
    scaleSpeed: boolean;
    updateTimer: any;
    label: string;
    debugToEnabled: boolean;
    debugToIndex: number;
    inputOverlayAdded: boolean;
    inputsOverlay: HTMLDivElement;
    inputId: string;
    onUpdateFn: Function | null;
    constructor(v3: any, keyMode?: string, label?: string, debugToEnabled?: boolean, debugToIndex?: number, onUpdateFn?: Function | null);
    update(): void;
    logToConsole(): void;
    showInputs(): void;
    saveSpeedAndHideInputs(): void;
}
export {};
