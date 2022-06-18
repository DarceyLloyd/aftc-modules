// JSODOC = {
//     "method": "imageToCanvas",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the image to load and place on the canvas"
//         }
//     ],
//     "returns": {
//         "type": "HTMLCanvasElement"
//     },
//     "info": "Loads an image and places it on a canvas of matching dimensions.",
//     "example": [
//         "let canvas1 = await imageToCanvas('./assets/photo.webp')"
//     ]
// } JSODOC

function imageToCanvasLoadImage(src, canvas, ctx){
    // https://stackoverflow.com/questions/55892083/javascript-load-image-into-offscreen-canvas-perform-webp-conversion

    return new Promise((resolve, reject) => {

        let img = new Image();
        img.onload = (e) => {
            // log(`Image loaded (${img.width} x ${img.height}): ${src}`)
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.width = img.width;
            ctx.height = img.height;
            ctx.drawImage(img, 0, 0);
            resolve(canvas);
        }
        img.onerror = reject(false);
        img.src = src;
    })
}
// - - - - - - - - - - - - - - - - - - - - - - - -



export async function imageToCanvas(src) {

    let canvas = document.createElement("canvas");
    let ctx = this.canvas.getContext("2d");

    return await imageToCanvasLoadImage(src, canvas, ctx)
}
// - - - - - - - - - - - - - - - - - - - - - - - -