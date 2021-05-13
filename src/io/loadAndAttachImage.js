// JSODOC = {
//     "method": "loadAndAttachImage",
//     "params": [
//         {
//             "name": "imgElement",
//             "type": "String",
//             "required": false,
//             "default": null,
//             "info": "Image element to load the image into."
//         },
//         {
//             "name": "src",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load"
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Loads an image file and auto attaches it to the head section of the document.",
//     "example": [
//         "loadAndAttachImage(imgElement1,'./assets/images/products/001.jpg')",
//         ".then(()=>{ log('loaded and attached'); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC

export function loadAndAttachImage(imgElement, src) {
    return new Promise((resolve, reject) => {
        imgElement.onload = () => {
            resolve(true);
        }
        imgElement.error = (e) => {
            reject(e);
        }
        imgElement.src = src;
    });
}
// - - - - - - - - - - - - - - - - - - - - - - - -