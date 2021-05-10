// JSODOC = {
//     "class": "PromiseAttachVideo",
//     "params": [
//         {
//             "name": "video",
//             "type": "Video",
//             "required": true,
//             "info": "The video to attach to."
//         },
//         {
//             "name": "src",
//             "type": "String",
//             "required": true,
//             "info": "The src of the video file to attach to the video element or video javascript instance."
//         }
//     ],
//     "returns": {
//         "type": "Promise with object with props {width,height,duration}"
//     },
//     "info": "Attaches a video file to a video and once it's meta data is available it will resolve the promise. Useful for getting width, height and duration.",
//     "example": [
//         "new PromiseAttachVideo(vid,vidSrc)",
//         "then((res)=>{ console.log('video attached and ready') })"
//     ]
// } JSODOC
export function promiseAttachVideo(video, src) {
    return new Promise((resolve, reject) => {

        video.addEventListener("loadedmetadata", (e) => {
            let width = video.videoWidth;
            let height = video.videoWidth;
            let duration = video.duration;
            resolve({
                width, height, duration
            });
        }, false);

        video.addEventListener("error", (e) => {
            reject(e);
            throw (e);
        }, false);

        video.src = src;
    });
}