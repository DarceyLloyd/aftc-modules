export class SwipeHandler {
    constructor(...args: any[]);
    args: {
        onSwipeLeft: boolean;
        onSwipeRight: boolean;
        onSwipeUp: boolean;
        onSwipeDown: boolean;
        horizontalTolerance: number;
        verticalTolerance: number;
        swipeThrottleTimeout: number;
    };
    eventTimer: boolean;
    ready: boolean;
    touchStartX: number;
    touchEndX: number;
    touchStartY: number;
    touchEndY: number;
    currentX: number;
    currentY: number;
    direction: boolean;
    distX: number;
    distY: number;
    swipeDetected: boolean;
    swipeDirection: string;
    handleTouchStart(e: any): void;
    handleTouchMove(e: any): void;
    fireEvent(): void;
    clearTimer(): void;
    argsToObject(args: any, obj: any, strict?: boolean): void;
}
