// JSODOC = {
//     "method": "loadCss",
//     "params": [
//         {
//             "name": "href",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the css file to load"
//         },
//         {
//             "name": "onComplete",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On complete callback"
//         }
//     ],
//     "info": "Loads a css file and auto attaches it to the head section of the document.",
//     "example": [
//         "loadCss('./include/css/style-sheet-5.css',onStyleSheet5Loaded)"
//     ]
// } JSODOC

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