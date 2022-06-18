export class XHR {
    constructor(...args: any[]);
    args: {
        url: boolean;
        method: boolean;
        data: boolean;
        dataType: boolean;
        responseType: boolean;
        timeout: number;
        onComplete: boolean;
        onError: boolean;
        onProgress: boolean;
        onCancel: boolean;
        username: boolean;
        password: boolean;
    };
    url: boolean;
    urlParams: string;
    xhr: boolean;
    makeRequest(): void;
    errorHandler(e: any): void;
    progressHandler(e: any): void;
    onLoadHandler(e: any): void;
    getResponseHeader(name: any): any;
    getAllResponseHeaders(): any;
    getResponse(): any;
    removeEventListeners(): void;
}
//# sourceMappingURL=XHR.d.ts.map