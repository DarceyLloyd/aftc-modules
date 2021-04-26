// JSODOC = {
//     "method": "loadJson",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load."
//         },
//         {
//             "name": "onComplete",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On complete callback, sends json response back as a parameter."
//         },
//         {
//             "name": "onError",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On error callback function handler"
//         }
//     ],
//     "info": "Loads a JSON file and returns it via the onComplete callback function.",
//     "example": [
//         "loadJson('./data/config.json',onLoadedHandler)"
//     ]
// } JSODOC

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