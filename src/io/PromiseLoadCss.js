// JSODOC = {
//     "method": "promiseLoadCss",
//     "params": [
//         {
//             "name": "href",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the css file to load"
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Loads a css file and auto attaches it to the head section of the document.",
//     "example": [
//         "promiseLoadCss('./include/css/style-sheet-5.css')",
//         ".then(()=>{ log('loaded'); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC

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
    });
}