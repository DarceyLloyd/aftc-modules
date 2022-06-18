export function AnimationFrameStack(): void;
export class AnimationFrameStack {
    init: () => void;
    start: () => void;
    stop: () => void;
    dispose: () => void;
    processFnStack: () => void;
    add: (uid: any, fn: any) => void;
    remove: (uid: any) => void;
}
//# sourceMappingURL=AnimationFrameStack.d.ts.map