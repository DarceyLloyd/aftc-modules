export class VisualDebug {
    static instance: any;
    static getInstance(): any;
    ids: any[];
    debugContainer: HTMLDivElement;
    debugRow: any[];
    doesUrlKeyExist(key: any): boolean;
    getUrlKeyValue(key: any): string | null;
    build(noOfDebugFields?: number, position?: string): void;
    debugTo(debugFiledIndexNo: number | undefined, label: any, value: any, fontSizeOveride?: null): void;
    clear(): void;
}
