// JSODOC = {
//     "method": "promiseLoadJson",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load"
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Loads a json file and returns it via promise resolve",
//     "example": [
//         "PromiseLoadJson('./data/config.json')",
//         ".then((data)=>{ log(data); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC

export function promiseLoadJson(url) {

    // Might extend someday, ref link if you do or old xhr function or both
    // https://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr


    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        let method = "GET";
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