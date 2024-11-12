export declare enum ePosition {
    TopLeft = "top_left",
    TopCenter = "top_center",
    TopRight = "top_right",
    BtmLeft = "btm_left",
    BtmCenter = "btm_center",
    BtmRight = "btm_right"
}
export declare class VisualDebug {
    private static instance;
    private ids;
    private debugContainer;
    private debugRow;
    private dragOffsetX;
    private dragOffsetY;
    private isDragging;
    enabled: boolean;
    private constructor();
    static getInstance(): VisualDebug;
    private createDraggableBar;
    enable(): void;
    disable(): void;
    private containerOpacity;
    setContainerOpacity(opacity: number): void;
    private rowOpacity;
    setRowOpacity(opacity: number): void;
    private rowBg;
    setRowBg(hex: string): void;
    private rowFontColor;
    setRowFontColor(hex: string): void;
    private rowMargin;
    setRowMargin(margin: number): void;
    private fontSizeString;
    setFontSize(size: number): void;
    build(noOfDebugFields?: number, position?: ePosition): void;
    private setPosition;
    debugTo(debugFieldIndex: number | undefined, label: string | null, value: any, fontSizeOverride?: number | null): void;
    clear(): void;
    hide(): void;
    show(): void;
    destroy(): void;
}
