// JSODOC = {
//     "class": "MouseScrollHandler",
//     "info": "Nukes the moon.",
//     "link": "https://aftc.io",
//     "params": [
//         {
//             "name": "onScrollUp",
//             "type": "Function",
//             "required": true,
//             "default": null,
//             "info": "The function to call when mouse wheel scroll up is detected"
//         },
//         {
//             "name": "onScrollDown",
//             "type": "Function",
//             "required": true,
//             "default": null,
//             "info": "The function to call when mouse wheel scroll down is detected"
//         }
//     ],
//     "example": [
//         "new MouseScrollHandler(onScrollUpHandler,onScrollDownHandler);"
//     ]
// } JSODOC


export class MouseScrollHandler {

    constructor(onScrollUp,onScrollDown) {
        // var defs
        this.direction = false;

        // Fn
        this.onScrollUp = onScrollUp;
        this.onScrollDown = onScrollDown;

        window.addEventListener('wheel', (e) => {
            this.scrollHandler(e);
        })
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -


    scrollHandler(e) {
        if (e.deltaY < 0) {
            if (this.onScrollUp) {
                this.onScrollUp();
            }
        }
        else if (e.deltaY > 0) {
            if (this.onScrollDown) {
                this.onScrollDown();
            }
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -
}