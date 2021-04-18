export class PromiseAttachVideo {


    constructor(video,src) {
        return new Promise((resolve, reject) => {
    
            video.addEventListener("loadedmetadata", (e) => {
                let width = video.videoWidth;
                let height = video.videoWidth;
                let duration = video.duration;
                resolve({
                    width,height,duration
                });
            }, false);

            video.addEventListener("error", (e) => {
                reject(e);
                throw (e);
            },false);
    
            video.src = src;  
        });
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

}