// JSODOC = {
//     "class": "SwipeHandler",
//     "params": [
//         {
//             "type": "object",
//             "def": [
//                 { "name": "onSwipeLeft", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe left is detected." },
//                 { "name": "onSwipeRight", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe right is detected." },
//                 { "name": "horizontalTolerance", "type": "Number", "required": false, "default": 50, "info": "The distance your finger has to travel on the horizontal axis for a swipe left or right to be detected." },
//                 { "name": "onSwipeUp", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe left is detected." },
//                 { "name": "onSwipeDown", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe right is detected." },
//                 { "name": "verticalTolerance", "type": "Number", "required": false, "default": 50, "info": "The distance your finger has to travel on the vertical axis for a swipe up or down to be detected." },
//                 { "name": "swipeThrottleTimeout", "type": "Number", "required": false, "default": 250, "info": "The amount of milliseconds before another swipe event can be fired." }
//             ]
//         }
//     ],
//     "info": "Swipe handler, currently detects left & right swipes.",
//     "example": [
//         "new SwipeHandler({config})"
//     ]
// } JSODOC

export class SwipeHandler {
    // - - - - - - - - - - - - - - - - - - - - - - - -
    constructor() {
        // log("SwipeHandler()");
        // vars

        this.args = {
            onSwipeLeft: false,
            onSwipeRight: false,
            horizontalTolerance: 50,
            verticalTolerance: 50,
            swipeThrottleTimeout: 250
        }

        this.argsToObject(arguments[0], this.args, true)

        // var defs
        this.eventTimer = false;
        this.ready = true;

        this.touchStartX = 0;
        this.touchEndX = 0;
        this.touchStartY = 0;
        this.touchEndY = 0;
        this.currentX = 0;
        this.currentY = 0;
        // dist to touch move on x before triggering a swipe
        this.direction = false;
        this.distX = 0;
        this.distY = 0;
        this.swipeDetected = false;
        this.swipeDirection = "";

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
        this.distY = -(this.touchStartY - this.currentY);

        // Horizontal
        if (this.distX < -this.args.horizontalTolerance) {
            this.swipeDetected = true;
            this.swipeDirection = "left";
            this.fireEvent();
        } else if (this.distX > this.args.horizontalTolerance) {
            this.swipeDetected = true;
            this.swipeDirection = "right";
            this.fireEvent();
        }

        // Vertical
        if (this.distY < -this.args.verticalTolerance) {
            this.swipeDetected = true;
            this.swipeDirection = "up";
            this.fireEvent();
        } else if (this.distY > this.args.verticalTolerance) {
            this.swipeDetected = true;
            this.swipeDirection = "down";
            this.fireEvent();
        }
    }


    // To prevent more than 1 callbacks being fired in a short space of time, slapping on a timer cool down
    fireEvent() {
        // if (!this.ready) { log("swipe prevented"); return; }
        if (!this.ready) { return; }

        this.clearTimer();
        this.ready = false;

        switch (this.swipeDirection) {
            case "up":
                if (this.args.onSwipeUp) {
                    this.args.onSwipeUp();
                }
                break;
            case "down":
                if (this.args.onSwipeDown) {
                    this.args.onSwipeDown();
                }
                break;
            case "left":
                if (this.args.onSwipeLeft) {
                    this.args.onSwipeLeft();
                }
                break;
            case "right":
                if (this.args.onSwipeRight) {
                    this.args.onSwipeRight();
                }
                break;
        }

        this.eventTimer = setTimeout(() => {
            this.ready = true;
        }, this.args.swipeThrottleTimeout)

    }


    clearTimer() {
        if (this.eventTimer) {
            try {
                clearTimeout(this.eventTimer)
            } catch (e) { }

            this.eventTimer = false;
        }
    }


    argsToObject(args, obj, strict = true) {
        if (args && typeof (args) === "object") {
            for (let key in args) {
                if (strict) {
                    if (obj.hasOwnProperty(key)) {
                        obj[key] = args[key];
                    } else {
                        console.warn("argsToObject(): Argument [" + key + "] is not supported.");
                    }
                } else {
                    obj[key] = args[key];
                }
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