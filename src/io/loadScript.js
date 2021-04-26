// JSODOC = {
//     "method": "loadScript",
//     "params": [
//         {
//             "name": "src",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the js file to load"
//         },
//         {
//             "name": "onComplete",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On complete callback"
//         },
//         {
//             "name": "onProgress",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On progress callback, sends back the percentage loaded"
//         }
//     ],
//     "info": "Loads a JavaScript file and auto attaches it to the head section of the document.",
//     "example": [
//         "loadScript('./include/js/script-5.js',onLoadedHandler)"
//     ]
// } JSODOC

export function loadScript(src, onComplete, onProgress){
    let head = document.getElementsByTagName("head")[0] || document.body;

    if (!head){
        console.error("loadScript(): Unable to get DOM Head or DOM Body!");
        return;
    }

    let script = document.createElement("script");

    let xhr = new XMLHttpRequest();

    // report progress events
    xhr.addEventListener("progress", function(event) {
        if (event.lengthComputable) {
            var percentComplete = event.loaded / event.total;
            // console.log(percentComplete);
            if (onProgress){
                onProgress(percentComplete);
            }
        } else {
            // Unable to compute progress information since the total size is unknown
            if (onProgress){
                onProgress(false);
            }
        }
    }, false);

    // load responseText into a new script element
    xhr.addEventListener("load", function(e) {
        script.innerHTML = e.target.responseText;
        document.documentElement.appendChild(script);

        if (onComplete) {
            onComplete();
        }

        // script.addEventListener("load", function() {
        //     // this runs after the new script has been executed...
        // });
    }, false);

    xhr.open("GET", src);
    xhr.send();
}