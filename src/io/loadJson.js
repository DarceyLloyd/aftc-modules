export function loadJson(url, onComplete, onError) {

    let xhr = new XMLHttpRequest();
    let method = "GET";
    xhr.open(method, url);
    xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            if (onComplete) {
                onComplete(JSON.parse(xhr.response))
            }
        } else {
            if (onError) {
                onError({
                    status: this.status,
                    statusText: xhr.statusText
                })
            }
        }
    }

    xhr.onerror = function () {
        reject({
            status: this.status,
            statusText: xhr.statusText
        });
    };
    xhr.send();
};