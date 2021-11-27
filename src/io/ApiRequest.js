export class ApiRequest {

    // Var defs
    // - - - - - - - - - - - - -


    constructor() {
        // log("ApiRequest()");

    }
    // - - - - - - - - - - - - -


    async get(route) {
        // log("ApiRequest.get(route): " + route);

        // Fetch the data
        const response = await fetch(route, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        })
        // log(response);
        const body = await response.json();
        return body;

    }
    // - - - - - - - - - - - - - - - - - - - - - - - -



    async post(route,data,onSuccess,onError) {
        // log("ApiRequest.post(route): " + route);

        const fetchPromise = fetch(route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(data)
        })

        fetchPromise.then(response => {
            return response.json();
        }).then(data => {
            // log(data);
            // log(data.success);
            if (data.success === false) {
                onError(data);
            } else {
                onSuccess(data);
            }
        });

    }
    // - - - - - - - - - - - - - - - - - - - - - - - -



    async patch(route,data,onSuccess,onError) {
        // log("ApiRequest.post(route): " + route);

        const fetchPromise = fetch(route, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(data)
        })

        fetchPromise.then(response => {
            return response.json();
        }).then(data => {
            // log(data);
            // log(data.success);
            if (data.success === false) {
                onError(data);
            } else {
                onSuccess(data);
            }
        });

    }
    // - - - - - - - - - - - - - - - - - - - - - - - -
}