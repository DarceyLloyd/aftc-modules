export class PromiseVideoEnd {

    constructor(video) {
        return new Promise((resolve, reject) => {
            video.addEventListener('ended', (e) => {
                resolve(true);
            }); 
        });
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

}


