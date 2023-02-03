import { Vector3 } from "three";
export declare class AttachKeysToVec3 {
    v3: Vector3;
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
    constructor(v3: Vector3, keyMode?: string, label?: string, debugToEnabled?: boolean, debugToIndex?: number, onUpdateFn?: Function | null);
    update(): void;
    logToConsole(): void;
    showInputs(): void;
    saveSpeedAndHideInputs(): void;
}
