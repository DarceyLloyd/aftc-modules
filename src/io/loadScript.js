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