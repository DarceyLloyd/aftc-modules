export class PromiseLoadImage {


    constructor(ele, src) {
        return new Promise((resolve, reject) => {
            ele.onload = () => {
                resolve(true);
            }
            ele.error = (e) => {
                reject(false);
            }
            ele.src = src;
        });
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

}