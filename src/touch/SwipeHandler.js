export class SwipeHandler {


    // - - - - - - - - - - - - - - - - - - - - - - - -


    constructor(onSwipeLeft, onSwipeRight) {
        // log("SwipeHandler(onSwipeLeft,onSwipeRight)");

        // vars
        this.onSwipeLeft = onSwipeLeft;
        this.onSwipeRight = onSwipeRight;

        // var defs
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.touchStartY = 0;
        this.touchEndY = 0;

        this.currentX = 0;
        this.currentY = 0;

        // dist to touch move on x before triggering a swipe
        this.swipeXTolerance = 50;

        this.direction = false;

        this.distX = 0;
        this.distY = 0;

        this.swipeDetected = false;
        this.swipeDirection = "";

        this.onSwipeLeft = false;
        this.onSwipeRight = false;

        // Event listeners
        document.addEventListener('touchstart', (e) => {
            this.handleTouchStart(e);
        }, false);

        document.addEventListener('touchmove', (e) => {
            this.handleTouchMove(e);
        }, false);

        // document.addEventListener('touchEnd', (e) => {
        //     this.handleTouchEnd(e);
        // }, false);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -


    handleTouchStart(e) {
        // log("SwipeHandler.handleTouchStart(e)");
        // e.preventDefault();

        this.distX = 0;
        this.distY = 0;

        this.swipeDetected = false;
        this.swipeDirection = "";

        this.touchStartX = e.changedTouches[0].screenX;
        this.touchStartY = e.changedTouches[0].screenY;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    handleTouchMove(e) {
        // log("SwipeHandler.handleTouchMove(e)");
        // e.preventDefault();

        this.currentX = e.changedTouches[0].screenX;
        this.currentY = e.changedTouches[0].screenY;

        this.distX = -(this.touchStartX - this.currentX);
        // this.distY = -(this.touchStartY - this.currentY);

        if (this.distX > this.swipeXTolerance) {
            this.swipeDetected = true;
            this.swipeDirection = "right";
            if (this.onSwipeRight) {
                this.onSwipeRight();
            }
        } else if (this.distX < -this.swipeXTolerance) {
            this.swipeDetected = true;
            this.swipeDirection = "left";
            if (this.onSwipeLeft) {
                this.onSwipeLeft();
            }
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    // UNABLE TO GET EVENT TO FIRE
    // handleTouchEnd(e) {
    //     log("SwipeHandler.handleTouchEnd(e)");
    //     // e.preventDefault();

    //     this.touchEndX = e.changedTouches[0].screenX;
    //     this.touchEndY = e.changedTouches[0].screenY;

    //     debugTo(1, "TOUCH END");
    //     debugTo(2, this.touchStartX);
    //     debugTo(3, this.touchStartY);
    // }
    // - - - - - - - - - - - - - - - - - - - - - - - -




}