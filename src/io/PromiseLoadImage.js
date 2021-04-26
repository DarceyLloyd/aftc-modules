// JSODOC = {
//     "method": "promiseLoadImage",
//     "params": [
//         {
//             "name": "ele",
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
//         "PromiseLoadImage(imgElement1,'./assets/images/products/001.jpg')",
//         ".then(()=>{ log('loaded and attached'); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC

export function promiseLoadImage(ele, src) {
    return new Promise((resolve, reject) => {
        ele.onload = () => {
            resolve(true);
        }
        ele.error = (e) => {
            reject(e);
        }
        ele.src = src;
    });
}
// - - - - - - - - - - - - - - - - - - - - - - - -