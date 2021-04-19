export class SwipeHandler {

    // var defs
    touchStartX = 0;
    touchEndX = 0;

    touchStartY = 0;
    touchEndY = 0;

    currentX = 0;
    currentY = 0;

    // dist to touch move on x before triggering a swipe
    swipeXTolerance = 50;

    direction = false;

    distX = 0;
    distY = 0;

    swipeDetected = false;
    swipeDirection = "";

    onSwipeLeft = false;
    onSwipeRight = false;
    // - - - - - - - - - - - - - - - - - - - - - - - -


    constructor(onSwipeLeft,onSwipeRight) {
        // log("SwipeHandler(onSwipeLeft,onSwipeRight)");

        // var ini
        this.onSwipeLeft = onSwipeLeft;
        this.onSwipeRight = onSwipeRight;
        this.onSwipeUp = onSwipeUp;
        this.onSwipeDown = onSwipeDown;

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