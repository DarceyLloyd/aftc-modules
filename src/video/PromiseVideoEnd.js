// JSODOC = {
//     "class": "PromiseVideoEnd",
//     "params": [
//         {
//             "name": "video",
//             "type": "Video",
//             "required": true,
//             "info": "The video to attach to."
//         }
//     ],
//     "returns": {
//         "type": "Promise resolve on video end"
//     },
//     "info": "Returns a promise resolve on video end.",
//     "example": [
//         "new PromiseVideoEnd(vid)",
//         "then((res)=>{ console.log('video playback complete') })"
//     ]
// } JSODOC
export function promiseVideoEnd(video) {
    return new Promise((resolve, reject) => {
        video.addEventListener('ended', (e) => {
            resolve(e);
        });
    });
}