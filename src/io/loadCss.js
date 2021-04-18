export function loadCss(href, onComplete){
    let link = document.createElement("link");
    link.onload = function () {
        if (onComplete) {
            onComplete();
        }
    }
    link.href = href;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName("head")[0].appendChild(link);
}