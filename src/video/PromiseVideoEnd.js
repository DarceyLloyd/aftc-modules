import { loadJson } from "aftc-modules";

export class PromiseAttachVideo {

    constructor(video) {
        return new Promise((resolve, reject) => {
            video.addEventListener('ended', (e) => {
                resolve(true);
            }); 
        });
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

}


