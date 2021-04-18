export function promiseLoadCss(href) {

    return new Promise(function (resolve, reject) {

        let link = document.createElement("link");
        link.onload = function () {
                resolve(true);
        }
        link.onerror = (e) => {
            reject(e);
        }
        link.href = href;
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
}