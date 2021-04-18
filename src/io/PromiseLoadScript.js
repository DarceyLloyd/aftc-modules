export function promiseLoadScript(src) {

    return new Promise(function (resolve, reject) {

        let head = document.getElementsByTagName("head")[0] || document.body;

        if (!head) {
            console.error("promiseLoadScript(): Unable to get DOM Head or DOM Body!");
            return;
        }

        let script = document.createElement("script");

        let xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function (e) {
            script.innerHTML = e.target.responseText;
            document.documentElement.appendChild(script);
            resolve(true)
        }, false);

        xhr.open("GET", src);
        xhr.send();


    });
}