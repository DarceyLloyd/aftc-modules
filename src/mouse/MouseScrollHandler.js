export function mouseScrollHandler(onScrollUp, onScrollDown) {
    // var defs
    let direction = false;

    // Fn
    let onScrollUpHandler = onScrollUp;
    let onScrollDownHandler = onScrollDown;

    window.addEventListener('wheel', (e) => {
        if (e.deltaY < 0) {
            if (this.onScrollUpHandler) {
                this.onScrollUpHandler();
            }
        }
        else if (e.deltaY > 0) {
            if (this.onScrollDownHandler) {
                this.onScrollDownHandler();
            }
        }
    })
    // - - - - - - - - - - - - - - - - - - - - - - - -
}