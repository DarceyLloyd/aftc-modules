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