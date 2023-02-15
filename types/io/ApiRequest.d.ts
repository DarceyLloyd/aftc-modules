export class ApiRequest {
    get(route: any): Promise<any>;
    post(route: any, data: any, onSuccess: any, onError: any): Promise<void>;
    patch(route: any, data: any, onSuccess: any, onError: any): Promise<void>;
}
