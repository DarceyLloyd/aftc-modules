export class ApiRequest {
    get(route: string): Promise<any>;
    post(route: string, data: {}, onSuccess: Function, onError: Function): Promise<void>;
    patch(route: string, data: {}, onSuccess: Function, onError: Function): Promise<void>;
}
