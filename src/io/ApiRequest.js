export class ApiRequest {
    constructor() { }

    async get(route) {
        const response = await fetch(route, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        });
        return await response.json();
    }

    async post(route, data, onSuccess, onError) {
        try {
            const response = await fetch(route, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            responseData.success === false ? onError(responseData) : onSuccess(responseData);
        } catch (error) {
            onError(error);
        }
    }

    async patch(route, data, onSuccess, onError) {
        try {
            const response = await fetch(route, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            responseData.success === false ? onError(responseData) : onSuccess(responseData);
        } catch (error) {
            onError(error);
        }
    }
}
