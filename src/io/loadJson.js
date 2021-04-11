export function loadJson(url) {

    // Might extend someday, ref link if you do or old xhr function or both
    // https://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr

    let method = "GET";

    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();

    });

}