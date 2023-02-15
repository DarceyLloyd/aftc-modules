export declare enum eVisualDebugPosition {
    "TopLeft" = "top_left",
    "TopCenter" = "top_center",
    "TopRight" = "top_right",
    "BtmLeft" = "btm_left",
    "BtmCenter" = "btm_center",
    "BtmRight" = "btm_right"
}
export declare class VisualDebug {
    private static instance;
    private ids;
    private debugContainer;
    private debugRow;
    static getInstance(): VisualDebug;
    constructor();
    build(noOfDebugFields: number | undefined, position: eVisualDebugPosition): void;
    debugTo(debugFiledIndexNo: number | undefined, label: string | null, value: any, fontSizeOveride?: number | null): void;
    clear(): void;
}
