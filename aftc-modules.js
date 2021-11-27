export function AnimationFrameStack() {
    var me = this;
    this.init = function(){
        if (!window){
            console.error("AnimationFrameStack(): ERROR - Unable to access window!");
        } else {
            if (!window.aftcAnimStack){
                window.aftcAnimStack = {
                    firstRun: true,
                    enabled: true,
                    stack: [],
                    uid: Math.floor(Math.random()*99999)
                }
            }
        }
        if (window.aftcAnimStack.firstRun){
            window.aftcAnimStack.firstRun = false;
            this.processFnStack();
        }
    }
    this.start = function(){
        window.aftcAnimStack.enabled = true;
        this.processFnStack();
    }
    this.stop = function(){
        window.aftcAnimStack.enabled = false;
    }
    this.dispose = function(){
        if (window.aftcAnimStack){
            window.aftcAnimStack.enabled = false;
            window.aftcAnimStack.stack = [];
            delete window.aftcAnimStack.stack;
        }
    }
    this.processFnStack = function(){
        if (!window.aftcAnimStack.enabled){ return; }
        for(let i=0; i < window.aftcAnimStack.stack.length; i++){
            window.aftcAnimStack.stack[i].fn();
        }
        window.requestAnimationFrame(me.processFnStack);
    }
    this.add = function(uid,fn){
        window.aftcAnimStack.stack.push({
            uid: uid,
            fn: fn
        });
    }
    this.remove = function(uid){
        for(let i=0; i < window.aftcAnimStack.stack.length; i++){
            if (window.aftcAnimStack.stack[i].uid === uid){
                // window.aftcAnimStack.stack = arrayRemoveItem(window.aftcAnimStack.stack,fn);
                window.aftcAnimStack.stack.splice(i,1);
            }
        }
    }
    this.init();
}
/**
 * @function: AnimationFrameStack()
 * @desc: Gives easy access to a single requestAnimationFrame loop which you can add functions to process in each loop, note the function stack is stored on global window scope
 * @method add: add a function to the stack to be executed on animationFrameLoop
 * @method remove: remove a function from the stack
 * @method start: start the requestAnimationFrame loop
 * @method stop: stop the requestAnimationFrame loop
 * @method dispose: dispose of all functions in the function stack
 * @link:
 */
// JSODOC = {
//     "method": "inertiaTo",
//     "params": [
//         {
//             "name": "current",
//             "type": "Number",
//             "required": true,
//             "info": "Current value."
//         },
//         {
//             "name": "target",
//             "type": "Number",
//             "required": true,
//             "info": "Value to reach."
//         },
//         {
//             "name": "amount",
//             "type": "Number",
//             "required": true,
//             "info": "Inertia speed (dec/inc speed)."
//         }
//     ],
//     "info": "Calculates the target value of inertia in a loop/requestAnimationFrame from 1 value to another at speed.",
//     "example": [
//         "let newX = inertiaTo(curX,targetX,0.5)"
//     ]
// } JSODOC
export function inertiaTo(current,target,amount){
    if (amount == 1) {
        return target;
    }
    let distToGo = target - current;
    let delta = current + (distToGo * amount);
    if (Math.abs(distToGo) < 0.01) {
        distToGo = 0;
        delta = target;
    }
    return delta;
}

// JSODOC = {
//     "method": "arrayClear",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to clear / empty"
//         }
//     ],
//     "info": "Clears an array",
//     "example": [
//         "arrayClear(myArray)"
//     ]
// } JSODOC
export function arrayClear(arr) {
    while (arr.length > 0) { arr.pop(); }
}

// JSODOC = {
//     "method": "arrayContains",
//     "params": [
//         {
//             "name": "needle",
//             "type": "string",
//             "required": true,
//             "default": null,
//             "info": "What you are looking for."
//         },
//         {
//             "name": "haystack",
//             "type": "array",
//             "required": true,
//             "default": "null",
//             "info": "The array you want to search."
//         }
//     ],
//     "info": "Finds a needle in a haystack."
// } JSODOC
export function arrayContains(needle, haystack) {
    if (haystack.indexOf(needle) > -1) { return true; } else { return false; }
}
// JSODOC = {
//     "method": "arrayEmpty",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to clear / empty"
//         }
//     ],
//     "info": "Clears an array",
//     "example": [
//         "arrayEmpty(myArray)"
//     ]
// } JSODOC
export function arrayEmpty(arr) {
    while (arr.length > 0) { arr.pop(); }
}
// JSODOC = {
//     "method": "arrayGetMax",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to get the maximum value within."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Gets the maximum value from the supplied array.",
//     "example": [
//         "let max = arrayGetMax(myArray)"
//     ]
// } JSODOC
export function arrayGetMax(arr) {
    return Math.max.apply(Math, arr);
}

// JSODOC = {
//     "method": "arrayGetMin",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to get the minimum value from."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Gets the minimum value from the supplied array.",
//     "example": [
//         "let max = arrayGetMin(myArray)"
//     ]
// } JSODOC
export function arrayGetMin(arr) {
    return Math.min.apply(Math, arr);
}
// JSODOC = {
//     "method": "arrayRemoveIndex",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to remove the index from."
//         },
//         {
//             "name": "index",
//             "type": "number",
//             "required": true,
//             "default": null,
//             "info": "The index which you want to remove."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Removes an index from the supplied array.",
//     "example": [
//         "let max = arrayRemoveIndex(arr,index)"
//     ]
// } JSODOC
export function arrayRemoveIndex(arr,index){
    arr.splice(index,1);
}

// JSODOC = {
//     "method": "arrayRemoveValue",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to remove the value from."
//         },
//         {
//             "name": "value",
//             "type": "string || number",
//             "required": true,
//             "default": null,
//             "info": "The value which you want to remove from the array."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Removes a value from the supplied array.",
//     "example": [
//         "let max = arrayRemoveValue(arr, value)"
//     ]
// } JSODOC
export function arrayRemoveValue(arr, value) {
    return arr.filter(function(item){
        return item != value;
    });
}
// JSODOC = {
//     "method": "arrayShuffle",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to shuffle."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Shuffles / Randomizes an array.",
//     "example": [
//         "let shuffledArray = arrayShuffle(myArray)"
//     ]
// } JSODOC
export function arrayShuffle(arr) {
    let currentIndex = arr.length,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
}

// JSODOC = {
//     "method": "arrayShuffle2",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to shuffle."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Shuffles / Randomizes an array (method 2).",
//     "example": [
//         "let shuffledArray = arrayShuffle2(myArray)"
//     ]
// } JSODOC
export function arrayShuffle2(a) {
    let x, t, r = new Uint32Array(1);
    for (let i = 0, c = a.length - 1, m = a.length; i < c; i++ , m--) {
        crypto.getRandomValues(r);
        x = Math.floor(r / 65536 / 65536 * m) + i;
        t = a[i], a[i] = a[x], a[x] = t;
    }
    return a;
}
// JSODOC = {
//     "method": "isInArray",
//     "params": [
//         {
//             "name": "needle",
//             "type": "*",
//             "required": true,
//             "default": null,
//             "info": "What you are looking for."
//         },
//         {
//             "name": "haystack",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to search."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Searches the array for your value.",
//     "example": [
//         "let found = isInArray(needle, haystack)"
//     ]
// } JSODOC
export function isInArray(needle, haystack) {
    if (haystack.indexOf(needle) > -1) { return true; } else { return false; }
}
// JSODOC = {
//     "method": "isStringInArray",
//     "params": [
//         {
//             "name": "needle",
//             "type": "string",
//             "required": true,
//             "default": null,
//             "info": "String you are looking for."
//         },
//         {
//             "name": "haystack",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to search."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Searches the array for a string.",
//     "example": [
//         "let found = isStringInArray(needle, haystack)"
//     ]
// } JSODOC
export function isStringInArray(needle, haystack) {
    return (new RegExp('(' + haystack.join('|').replace(/\./g, '\\.') + ')$')).test(needle);
}

// JSODOC = {
//     "method": "getBrowser",
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets the name of the browser you are using (opera | chrome | safari | firefox | msie | trident | edge).",
//     "example": [
//         "let browser = getBrowser()"
//     ]
// } JSODOC
export function getBrowser() {
    let ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|edge|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE';
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/);
        if (tem != null) {
            return 'Opera';
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return M[0];
}
// JSODOC = {
//     "method": "getBrowserX",
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Gets the viewport x position.",
//     "example": [
//         "let x = getBrowserX()"
//     ]
// } JSODOC
export function getBrowserX() {
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    // let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    return x;
}

// JSODOC = {
//     "method": "getBrowserY",
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Gets the viewport y position.",
//     "example": [
//         "let x = getBrowserY()"
//     ]
// } JSODOC
export function getBrowserY(){
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    // let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    return y;
}

// JSODOC = {
//     "method": "isInViewport",
//     "params": [
//         {
//             "name": "el",
//             "type": "element",
//             "required": true,
//             "default": null,
//             "info": "The element you want to check is in view"
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks whether an element is in view.",
//     "example": [
//         "let isInView = isInViewport(myElement)"
//     ]
// } JSODOC
export function isInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
    // let bounding = ele.getBoundingClientRect();
    // return (
    //     bounding.top >= 0 &&
    //     bounding.left >= 0 &&
    //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );
}

// JSODOC = {
//     "method": "argsToObject",
//     "params": [
//         {
//             "name": "src",
//             "type": "Object",
//             "required": true,
//             "default": null,
//             "info": "The object from the function or class. Eg: Use arguments[0] from constructor in a class. Or any object."
//         },
//         {
//             "name": "dest",
//             "type": "Object",
//             "required": true,
//             "default": null,
//             "info": "The arguments object you wish to assign arguments to."
//         },
//         {
//             "name": "strict",
//             "type": "Boolean",
//             "required": false,
//             "default": true,
//             "info": "Whether you want to enable strict assignments only. Enabling strict will warn users of the function that the argument supplied is not supported."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Parses arguments to an object of your choice with strict or relaxed assigning features (good for defaults and instantiation processing).",
//     "example": [
//         "/* Class based example */",
//         "constructor(){",
//         "\tthis.appArgs = {a:0,b:0};",
//         "\targsToObject(arguments[0], this.appArgs, true)",
//         "}",
//         "",
//         "/* Instantiation of your class (not the only use) */",
//         "NOTE: c if strict enabled will give a warning, this is a good thing prevents users from incorrectly using your class's or functions */\n",
//         "new MyApp({a:1,b:3,c:4});"
//     ]
// } JSODOC
export function argsToObject(src, dest, strict = true) {
    for (let key in src) {
        if (strict) {
            if (dest.hasOwnProperty(key)) {
                dest[key] = src[key];
            } else {
                console.warn("argsToObject(): Destination object key doesn't exist [" + key + "].");
            }
        } else {
            dest[key] = src[key];
        }
    }
}
// JSODOC = {
//     "method": "boolToInt",
//     "params": [
//         {
//             "name": "bool",
//             "type": "Boolean",
//             "required": true,
//             "default": null,
//             "info": "The variable you wish to convert."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Converts a boolean to a number.",
//     "example": [
//         "let strBool = boolToInt(isMobile)"
//     ]
// } JSODOC
export function boolToInt(bool) {
    if (!bool || bool === undefined || typeof (bool) != "boolean") {
        console.log("AFTC.js: getBoolToString(str): Error - input is not a boolean!");
        return "error";
    }
    if (bool) {
        return 1;
    } else {
        return 0;
    }
}
// JSODOC = {
//     "method": "boolToString",
//     "params": [
//         {
//             "name": "bool",
//             "type": "Boolean",
//             "required": true,
//             "default": null,
//             "info": "The variable you wish to convert."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Converts a boolean to a string of true || false.",
//     "example": [
//         "let strBool = boolToString(isMobile)"
//     ]
// } JSODOC
export function boolToString (bool) {
    if (!bool || bool === undefined || typeof (bool) != "boolean") {
        console.log("AFTC.js: getBoolToInt(bool): Error - input is not a boolean!");
        return "error";
    }
    if (bool) {
        return "true";
    } else {
        return "false";
    }
}
// JSODOC = {
//     "method": "boolToYesNo",
//     "params": [
//         {
//             "name": "bool",
//             "type": "Boolean",
//             "required": true,
//             "default": null,
//             "info": "The variable you wish to convert."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Converts a boolean to a string of yes || no.",
//     "example": [
//         "let answer = boolToYesNo(boolAnswer)"
//     ]
// } JSODOC
export function boolToYesNo(b) {
    if (!b || b === undefined || typeof (b) != "boolean") {
        console.log("getYesNoFromBool(bool): Error - input is not a boolean!");
        return "error";
    }
    if (b) {
        return "yes";
    } else {
        return "no";
    }
}
// JSODOC = {
//     "method": "degToRad",
//     "params": [
//         {
//             "name": "input",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Converts degrees to radians.",
//     "example": [
//         "let rad = degToRad(deg)"
//     ]
// } JSODOC
export function degToRad(input) { return input * (Math.PI / 180); }
// JSODOC = {
//     "method": "hexToRgb",
//     "params": [
//         {
//             "name": "hex",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Hex color string eg #FFCC00"
//         }
//     ],
//     "returns": {
//         "type": "object",
//         "def": [
//             { "name": "r", "type": "Number"},
//             { "name": "g", "type": "Number"},
//             { "name": "b", "type": "Number"}
//         ]
//     },
//     "info": "Converts hex color to an object with r,g,b props.",
//     "example": [
//         "let rgb = hexToRgb('#FFCC00')"
//     ]
// } JSODOC
export function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
// JSODOC = {
//     "method": "numToHex",
//     "params": [
//         {
//             "name": "num",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Converts a number to hexadecimal.",
//     "example": [
//         "let hex = numToHex(12)"
//     ]
// } JSODOC
export function numToHex (num) {
    return num.toString(16);
}
// JSODOC = {
//     "method": "objectToObject",
//     "params": [
//         {
//             "name": "src",
//             "type": "Object",
//             "required": true,
//             "default": null,
//             "info": "The source object. Eg: Use arguments[0] from constructor in a class."
//         },
//         {
//             "name": "dest",
//             "type": "Object",
//             "required": true,
//             "default": null,
//             "info": "The target object you wish to assign arguments to."
//         },
//         {
//             "name": "strict",
//             "type": "Boolean",
//             "required": false,
//             "default": true,
//             "info": "Whether you want to enable strict assignments only. Enabling strict will warn users of the function that the argument supplied is not supported."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Parses an object to another object of your choice with strict or relaxed assigning features (good for defaults and instantiation processing).",
//     "example": [
//         "/* Class based example */",
//         "constructor(){",
//         "\tthis.appArgs = {a:0,b:0};",
//         "\tobjectToObject(arguments[0], this.appArgs, true)",
//         "}",
//         "",
//         "/* Instantiation of your class (not the only use) */",
//         "NOTE: c if strict enabled will give a warning, this is a good thing prevents users from incorrectly using your class's or functions */\n",
//         "new MyApp({a:1,b:3,c:4});"
//     ]
// } JSODOC
export function objectToObject(src, dest, strict = true) {
    for (let key in src) {
        if (strict) {
            if (dest.hasOwnProperty(key)) {
                dest[key] = src[key];
            } else {
                console.warn("ObjectToObject(): Destination object key doesn't exist [" + key + "].");
            }
        } else {
            dest[key] = src[key];
        }
    }
}
// JSODOC = {
//     "method": "radToDeg",
//     "params": [
//         {
//             "name": "input",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Converts radians to degrees.",
//     "example": [
//         "let rad = radToDeg(deg)"
//     ]
// } JSODOC
export function radToDeg(input) { return input * (180 / Math.PI); }
// JSODOC = {
//     "method": "rgbToHex",
//     "params": [
//         {
//             "name": "r",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         },
//         {
//             "name": "g",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         },
//         {
//             "name": "b",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Converts an RGB value to a hex color value.",
//     "example": [
//         "let hex = RGBToHex(255,100,55);"
//     ]
// } JSODOC
export function rgbToHex (r, g, b) {
    return ((r << 16) | (g << 8) | b).toString(16);
}

// JSODOC = {
//     "method": "rgbToHex2",
//     "params": [
//         {
//             "name": "r",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         },
//         {
//             "name": "g",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         },
//         {
//             "name": "b",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Converts an RGB value to a hex color value (Method 2).",
//     "example": [
//         "let hex = rgbToHex2(255,100,55);"
//     ]
// } JSODOC
export function rgbToHex2 (r, g, b) {
    function getHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    let hex = "#" + getHex(r) + getHex(g) + getHex(b);
    hex = hex.toUpperCase();
    return hex;
}
// JSODOC = {
//     "method": "stringToBool",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The value you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Converts a String to Boolean.",
//     "example": [
//         "let answer1 = stringToBool('yes');",
//         "let answer2 = stringToBool('y');",
//         "let answer3 = stringToBool('1');",
//         "let answer4 = stringToBool('no');",
//         "let answer5 = stringToBool('n');",
//         "let answer6 = stringToBool('0');"
//     ]
// } JSODOC
export function stringToBool (str) {
    if (!str || str === undefined || typeof (str) != "string") {
        console.log("StringToBool(str): Error - input string is not valid!");
        return false;
    }
    switch (str.toLowerCase()) {
        case "y":
            return true;
            break;
        case "yes":
            return true;
            break;
        case "1":
            return true;
            break;
        case "true":
            return true;
            break;
        default:
            return false;
            break;
    }
}

// JSODOC = {
//     "method": "getCookie",
//     "params": [
//         {
//             "name": "name",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The name of the cookie you want to retrieve."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Fetches a cookie by name.",
//     "example": [
//         "let email = getCookie('email')"
//     ]
// } JSODOC
export function getCookie(name) {
	//return .cookie(name);
	var keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|)');
	return keyValue ? keyValue[2] : null;
}
// JSODOC = {
//     "method": "setCookie",
//     "params": [
//         {
//             "name": "name",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The name of the cookie you want to retrieve."
//         },
//         {
//             "name": "cvalue",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The value you want to put in the cookie."
//         },
//         {
//             "name": "exdays",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number of days you want the cookie to expire in."
//         }
//     ],
//     "info": "Fetches a cookie by name.",
//     "example": [
//         "let name = 'email';",
//         "let value = 'darcey.lloyd@gmail.com';",
//         "let lifeInDays = 30;",
//         "setCookie(name,value,lifeInDays)"
//     ]
// } JSODOC
export function setCookie(cname, cvalue, exdays) {
	// https://javascript.info/cookie
	// var expires = new Date();
	// expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
	// document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	// document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // cookies are changing (this will get blocked soon 09-21)
	document.cookie = cname + "=" + cvalue + ";" + expires + ";samesite=strict;secure:true;path=/";
}
// JSODOC = {
//     "method": "getDaysBetween",
//     "params": [
//         {
//             "name": "startDateTime",
//             "type": "Date",
//             "required": true,
//             "default": null,
//             "info": "The start date."
//         },
//         {
//             "name": "endDateTime",
//             "type": "Date",
//             "required": true,
//             "default": null,
//             "info": "The end date."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Gets the number of days between 2 dates.",
//     "example": [
//         "/* NOTE: Month is indexed at 0 */\n",
//         "let startDateTime = new Date('2020,3,26')",
//         "let endDateTime = new Date('2020,3,26')",
//         "let days = getDaysBetween('startDateTime, endDateTime')"
//     ]
// } JSODOC
export function getDaysBetween(startDateTime, endDateTime) {
    let msPerDay = 8.64e7;
    // Copy dates so don't mess them up
    let sd = new Date(startDateTime);
    let ed = new Date(endDateTime);
    // Set to noon - avoid DST errors
    sd.setHours(12, 0, 0);
    ed.setHours(12, 0, 0);
    // Round to remove daylight saving errors
    return Math.round((ed - sd) / msPerDay);
}

// JSODOC = {
//     "method": "getMySQLDateTimeString",
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets the date as a mysql injectable string.",
//     "example": [
//         "let dte = getMySQLDateTimeString()"
//     ]
// } JSODOC
export function getMySQLDateTimeString() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    if (month.toString().length === 1) {
        month = '0' + month;
    }
    if (day.toString().length === 1) {
        day = '0' + day;
    }
    if (hour.toString().length === 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length === 1) {
        minute = '0' + minute;
    }
    if (second.toString().length === 1) {
        second = '0' + second;
    }
    let str = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
    return str;
}

// JSODOC = {
//     "method": "getUKDate",
//     "params": [
//         {
//             "name": "dte",
//             "type": "Date",
//             "required": true,
//             "default": null,
//             "info": "The date you wish to get the UK format date string from."
//         },
//         {
//             "name": "separator",
//             "type": "String",
//             "required": false,
//             "default": "-",
//             "info": "What the date string segments will be separated by."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets a UK formatted date string from a supplied date.",
//     "example": [
//         "let ukDate = getUKDate(new Date(),'-')"
//     ]
// } JSODOC
export function getUKDate(dte,separator="-"){
    let output = dte.getDay() + separator + (dte.getMonth()+1) + separator + dte.getFullYear();
    return output;
}
// JSODOC = {
//     "method": "getUKDateFromDbDateTime",
//     "params": [
//         {
//             "name": "dbDateString",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "This should be a datetime string from a db query."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets a UK formatted date string from a supplied db date string.",
//     "example": [
//         "let ukDate = getUkDateFromDbDateTime(dbDateString)"
//     ]
// } JSODOC
export function getUKDateFromDbDateTime(dbDateString) {
    // "2016-04-08 21:11:59" to UK date
    if (input === "" || input === null) {
        return "no input";
    }
    let DateTime = input.split(" ");
    let DateParts = DateTime[0].split("-");
    let UKDate = DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0];
    return UKDate;
}
// JSODOC = {
//     "method": "getUkDateTimeFromDbDateTime",
//     "params": [
//         {
//             "name": "dbDateTimeString",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "This should be a datetime string from a db query."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets a UK formatted date and time string from a supplied db date time string.",
//     "example": [
//         "let ukDate = getUkDateTimeFromDbDateTime(dbDateTimeString)"
//     ]
// } JSODOC
export function getUKDateTimeFromDbDateTime  (dbDateTimeString) {
    // "2016-04-08 21:11:59" to UK date time
    let DateTime = input.split(" ");
    let DateParts = DateTime[0].split("-");
    let TimeParts = DateTime[1].split(":");
    let UKDate = DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0];
    let Time = TimeParts[0] + ":" + TimeParts[1];
    return (UKDate + " " + Time);
}
// JSODOC = {
//     "method": "getUSDate",
//     "params": [
//         {
//             "name": "dte",
//             "type": "Date",
//             "required": true,
//             "default": null,
//             "info": "The date you wish to get the US format date string from."
//         },
//         {
//             "name": "separator",
//             "type": "String",
//             "required": false,
//             "default": "-",
//             "info": "What the date string segments will be separated by."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets a US formatted date string from a supplied date.",
//     "example": [
//         "let usDate = getUKDate(new Date(),'-')"
//     ]
// } JSODOC
export function getUSDate(dte,separator="-"){
    let output = dte.getFullYear() + separator + (dte.getMonth()+1) + separator + (dte.getDay()+1)
    return output;
}
// JSODOC = {
//     "method": "appendTo",
//     "params": [
//         {
//             "name": "elementOrId",
//             "type": "Element||ElementID",
//             "required": true,
//             "default": null,
//             "info": "The element or element id of the element you wish to append the string within."
//         },
//         {
//             "name": "msg",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The string you wish to append to the html element."
//         },
//         {
//             "name": "endOfLine",
//             "type": "String",
//             "required": false,
//             "default": "< br >",
//             "info": "The end of the string that will be appended to the element, set to '' if you dont want the < br >"
//         }
//     ],
//     "info": "Appends a string to an element, with or without a < BR > tag.",
//     "example": [
//         "appendTo(elementOrId,msg,'')"
//     ]
// } JSODOC
export function appendTo(elementOrId,msg,endOfLine="<br>"){
    // WARNING: IE11 Wont play nice even with webpack babel on defaults of args
    // WARNING: This will not be built for IE compatibility - please use aftc.js for that npm i aftc.js
    function isElement(o) {
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
                o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
        );
    }
    let ele = false;
    if (typeof(elementOrId) == "string"){
        elementOrId = elementOrId.replace("#","");
        ele = document.getElementById(elementOrId);
        if (!ele){
            console.error("AppendTo(): Unable to find ID '" + elementOrId + "' on the DOM!");
            return false;
        }
    } else {
        ele = elementOrId;
    }
    if (isElement(ele)){
        ele.innerHTML = ele.innerHTML + msg + endOfLine;
    } else {
        console.error("AppendTo(): Unable to log to element or id provided!");
        console.error(elementOrId);
        return false;
    }
}

// JSODOC = {
//     "method": "attachDebug",
//     "params": [
//         {
//             "name": "no",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number of debug elements you want available."
//         },
//         {
//             "name": "position",
//             "type": "String (tl, top left, tr, top right, bl, btm left, br, btm right)",
//             "required": true,
//             "default": "top left",
//             "info": "Position of the debug list."
//         },
//         {
//             "name": "ele",
//             "type": "Element",
//             "required": false,
//             "default": "document.body",
//             "info": "The debug list will be appended to this element"
//         }
//     ],
//     "info": "Displays a visual debug list so you can watch variables change in real time (Most excellent for debug with keys, animations etc). Click row to inject that value into copy and paste buffer. See <b>debugTo</b> to use attachDebug, usage example below.",
//     "example": [
//         "attachDebug(3)",
//         "debugTo(0,'hello world 1')",
//         "debugTo(1,'hello world 2')",
//         "debugTo(2,'hello world 3')"
//     ]
// } JSODOC
export function attachDebug(no, position, ele) {
    let ids = [];
    let debugContainer = document.createElement("div");
    debugContainer.id = "debug-container";
    debugContainer.style.zIndex = "999999";
    debugContainer.style.position = "fixed";
    if (!position) {
        position = "top left";
    }
    position = position.toLowerCase();
    if (position == "tl" || position == "top left") {
        debugContainer.style.left = "5px";
        debugContainer.style.top = "5px";
        debugContainer.style.textAlgin = "left";
    } else if (position == "tr" || position == "top right") {
        debugContainer.style.right = "5px";
        debugContainer.style.top = "5px";
        debugContainer.style.textAlgin = "right";
    } else if (position == "bl" || position == "btm left") {
        debugContainer.style.left = "5px";
        debugContainer.style.bottom = "5px";
        debugContainer.style.textAlgin = "left";
    } else if (position == "br" || position == "btm right") {
        debugContainer.style.right = "5px";
        debugContainer.style.bottom = "5px";
        debugContainer.style.textAlgin = "right";
    }
    window.aftcDebug = [];
    for (let i = 0; i < no; i++) {
        let r = Math.round(Math.random() * 9999999999);
        let id = "aftc-debug-container-" + r;
        let div = document.createElement("div");
        div.id = id;
        div.style.minWidth = "50px";
        // div.style.height = "20px";
        div.style.marginBottom = "3px";
        div.style.border = "1px dashed #999999";
        div.style.padding = "1px 2px 2px 4px";
        div.style.background = "RGBA(255,255,255,0.92)";
        div.style.color = "#000000";
        div.classList.add("debug-row");
        debugContainer.appendChild(div);
        div.addEventListener("click", function (e) {
            console.log(this.innerHTML);
        });
        window.aftcDebug.push(div);
        ids.push(id);
    }
    if (ele) {
        ele.appendChild(debugContainer);
    } else {
        document.body.appendChild(debugContainer);
    }
    console.warn("attachDebug(): Use debugTo(index,string) to write directly to debug elements.");
    return debugContainer;
}
// JSODOC = {
//     "method": "debugTo",
//     "params": [
//         {
//             "name": "index",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The debug container index to write to (setup via <b>attachDebug</b>)."
//         },
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "default": "null",
//             "info": "The string you want to write to the debug container."
//         }
//     ],
//     "info": "Sets a visual debug element so you can visually track variables without the use of the console, excellent for working with the graphical side of things, animations, webgl etc.",
//     "example": [
//         "attachDebug(3)",
//         "debugTo(0,'hello world 1')",
//         "debugTo(1,'hello world 2')",
//         "debugTo(2,'hello world 3')"
//     ]
// } JSODOC
export function debugTo(index, str) {
    if (window.aftcDebug) {
        if (window.aftcDebug[index]) {
            window.aftcDebug[index].innerHTML = str;
        }
    }
}
// JSODOC = {
//     "method": "log",
//     "params": [
//         {
//             "name": "arg",
//             "type": "*",
//             "required": true,
//             "default": null,
//             "info": "arg gets injected into console.log"
//         }
//     ],
//     "info": "Lazy version of console.log, no more typing console!",
//     "example": [
//         "log('Once you use me, you will never stop using me')",
//         "let a = 4;",
//         "log('a = ' + a)",
//         "log(`a = ${a}`)"
//     ]
// } JSODOC
export function log(arg) {
    if (window.aftcLogEnabled === undefined){
        window.aftcLogEnabled = true;
    }
    if (window.aftcLogEnabled){
        console.log(arg);
    }
}
// JSODOC = {
//     "method": "logDisable",
//     "info": "Disable log() globally. Good for keeping all your log commands without having to comment them out in your projects. You should really you should comment them all out for removal in the packaging process.",
//     "example": [
//         "log('You will see this in console')",
//         "logDisable()",
//         "log('You wont see this in console')"
//     ]
// } JSODOC
export function logDisable() {
    window.aftcLogEnabled = false;
}
// JSODOC = {
//     "method": "logEnable",
//     "info": "Enable log() globally. Good for keeping all your log commands without having to comment them out in your projects. You should really you should comment them all out for removal in the packaging process.",
//     "example": [
//         "log('You will see this in console')",
//         "logDisable()",
//         "log('You wont see this in console')",
//         "logEnable()",
//         "log('You will see this in console')"
//     ]
// } JSODOC
export function logEnable() {
    window.aftcLogEnabled = true;
}

// JSODOC = {
//     "method": "logTo",
//     "params": [
//         {
//             "name": "elementOrId",
//             "type": "Element||ElementID",
//             "required": true,
//             "default": null,
//             "info": "The element or element id of the element you wish to append the string within."
//         },
//         {
//             "name": "msg",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The string you wish to append to the html element."
//         },
//         {
//             "name": "append",
//             "type": "Boolean",
//             "required": false,
//             "default": false,
//             "info": "Method of attaching the logging message, append (true) or prepend (false) aka top vs bottom."
//         },
//         {
//             "name": "endOfLine",
//             "type": "String",
//             "required": false,
//             "default": "",
//             "info": "The end of the string that will be appended to the element, set to '< br >' if you want a line break"
//         }
//     ],
//     "info": "Appends a string to an element, with or without a < BR > tag.",
//     "example": [
//         "logTo(elementOrId,msg,true)"
//     ]
// } JSODOC
export function logTo(elementOrId,msg,append=false,endOfLine=""){
    // WARNING: IE11 Wont play nice even with webpack babel on defaults of args
    // WARNING: This will not be built for IE compatibility - please use aftc.js for that npm i aftc.js
    function isElement(o) {
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
                o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
        );
    }
    let ele = false;
    if (typeof(elementOrId) == "string"){
        elementOrId = elementOrId.replace("#","");
        ele = document.getElementById(elementOrId);
        if (!ele){
            console.error("LogTo(): Unable to find ID '" + elementOrId + "' on the DOM!");
            return false;
        }
    } else {
        ele = elementOrId;
    }
    if (isElement(ele)){
        if (append === true){
            ele.innerHTML = ele.innerHTML + msg + endOfLine;
        } else {
            ele.innerHTML = msg + endOfLine;
        }
    } else {
        console.error("LogTo(): Unable to log to element or id provided!");
        console.error(elementOrId);
        return false;
    }
}

// JSODOC = {
//     "method": "getOS",
//     "returns": {
//         "type": "String (Mac OS, iOS, Windows, Android, Linux"
//     },
//     "info": "Gets what OS is in use",
//     "example": [
//         "let os = getOS()"
//     ]
// } JSODOC
export function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }
    return os;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// JSODOC = {
//     "method": "isAndroid",
//     "info": "Detects if Android or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isAndroid()"
//     ]
// } JSODOC
export function isAndroid(){
    let ua = navigator.userAgent.toLowerCase();
    if (/windows phone/i.test(ua)) {
        return false;
    } else {
        let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
        return isAndroid;
    }
}

// JSODOC = {
//     "method": "isChrome",
//     "info": "Detects if Chrome or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isChrome()"
//     ]
// } JSODOC
export function isChrome() {
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");
    // Have to detect edge first as it's now chromium based
    if (/Edge|Edg\/\d./i.test(navigator.userAgent)) {
    // if (/Edge\/\d./i.test(navigator.userAgent)) {
        return false;
    }
    if (isIOSChrome) {
        // is Google Chrome on IOS
        return true;
    } else if (
        isChromium !== null &&
        typeof isChromium !== "undefined" &&
        vendorName === "Google Inc." &&
        isOpera === false &&
        isIEedge === false
    ) {
        // is Google Chrome
        return true;
    } else {
        // not Google Chrome
        return false;
    }
}
// JSODOC = {
//     "method": "isEdge",
//     "info": "Detects if Edge or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isEdge()"
//     ]
// } JSODOC
export function isEdge () {
    //let isEdge = !isIE && !!window.StyleMedia; // Edge 20+
    let edge = false;
    if (/Edge|Edg\/\d./i.test(navigator.userAgent)) {
        edge = true;
    }
    return edge;
}
// JSODOC = {
//     "method": "isFireFox",
//     "info": "Detects if FireFox or not.",
//     "example": [
//         "let test = isFireFox()"
//     ]
// } JSODOC
export function isFireFox () {
    // let is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    // return is_firefox;
    return (typeof InstallTrigger !== 'undefined');
}
// JSODOC = {
//     "method": "isIOS",
//     "info": "Detects if iOS or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isIOS()"
//     ]
// } JSODOC
export function isIOS() {
    let ua = navigator.userAgent;
    if (/iPad Simulator|iPhone Simulator|iPod Simulator|iPad|iPod|iPhone/i.test(ua)) {
        return true;
    } else {
        return false;
    }
}

// JSODOC = {
//     "method": "isMobile",
//     "info": "Detects if mobile or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let mobile = isMobile()"
//     ]
// } JSODOC
export function isMobile(){
    // Windows Phone must come first because its UA also contains "Android"!
    let ua = navigator.userAgent.toLowerCase();
    if (/windows phone/i.test(ua)) {
        return true;
    } else {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        } else {
            return false;
        }
    }
}
// JSODOC = {
//     "method": "isOpera",
//     "info": "Detects if Opera or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isOpera()"
//     ]
// } JSODOC
export function isOpera() {
    // let isChromium = window.chrome;
    // let isOpera = window.navigator.userAgent.indexOf("OPR") > -1 || window.navigator.userAgent.indexOf("Opera") > -1;
    // let isOpera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
    let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    return isOpera;
}
// JSODOC = {
//     "method": "isSafari",
//     "info": "Detects if Safari or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isSafari()"
//     ]
// } JSODOC
export function isSafari() {
    // let is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    // return is_safari;
    // return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        return true;
    } else {
        return false;
    }
}
// JSODOC = {
//     "method": "getElementPosition",
//     "params": [
//         {
//             "name": "el",
//             "type": "Element",
//             "required": true,
//             "default": null,
//             "info": "Element to get the position of."
//         }
//     ],
//     "returns": "Object {left,top}",
//     "info": "Gets an elements position.",
//     "example": [
//         "let pos = getElementPosition(myElement)"
//     ]
// } JSODOC
export function getElementPosition(el) {
    let position = {
        top: el.offsetTop,
        left: el.offsetLeft
    };
    if (el.offsetParent) {
        let parentPosition = {
            top: el.offsetParent.offsetTop,
            left: el.offsetParent.offsetLeft
        };
        position.top += parentPosition.top;
        position.left += parentPosition.left;
    }
    return position;
}
// JSODOC = {
//     "method": "getElementPos",
//     "params": [
//         {
//             "name": "el",
//             "type": "Element",
//             "required": true,
//             "default": null,
//             "info": "Element to get the position of."
//         }
//     ],
//     "returns": {
//         "type": "object",
//         "def": [
//             { "name": "left", "type": "Number", "info": "x or left" },
//             { "name": "top", "type": "Number", "info": "y or top" }
//         ]
//     },
//     "info": "Gets an elements position.",
//     "example": [
//         "let pos = getElementPos(myElement)"
//     ]
// } JSODOC
export function getElementPos(el) {
    let x = 0;
    let y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        x += el.offsetLeft - el.scrollLeft;
        y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { left: x, top: y };
}
// JSODOC = {
//     "method": "isDOM",
//     "params": [
//         {
//             "name": "obj",
//             "type": "Element||Object",
//             "required": true,
//             "default": null,
//             "info": "Element / Object to check."
//         }
//     ],
//     "info": "Checks if object is HTMLElement.",
//     "example": [
//         "let result = isDOM(myElement)"
//     ]
// } JSODOC
export function isDom(obj) {
    // this works for newer browsers
    try { return obj instanceof HTMLElement; }
        // this works for older browsers
    catch (e) {
        return (typeof obj === "object") &&
            (obj.nodeType === 1) && (typeof obj.style === "object") &&
            (typeof obj.ownerDocument === "object");
    }
};
// JSODOC = {
//     "method": "isElement",
//     "params": [
//         {
//             "name": "ele",
//             "type": "Element||Object",
//             "required": true,
//             "default": null,
//             "info": "Element / Object to check."
//         }
//     ],
//     "info": "Checks if object is HTMLElement.",
//     "example": [
//         "let result = isElement(myElement)"
//     ]
// } JSODOC
export function isElement(ele) {
    let answer = (
        typeof HTMLElement === "object" ? ele instanceof HTMLElement : //DOM2
        ele && typeof ele === "object" && ele !== null && ele.nodeType === 1 && typeof ele.nodeName === "string"
    );
    if (answer != true) {
        return false;
    } else {
        return true;
    }
}
// JSODOC = {
//     "method": "isElement2",
//     "params": [
//         {
//             "name": "ele",
//             "type": "Element||Object",
//             "required": true,
//             "default": null,
//             "info": "Element / Object to check."
//         }
//     ],
//     "info": "Checks if object is HTMLElement (Method 2).",
//     "example": [
//         "let result = isElement2(myElement)"
//     ]
// } JSODOC
export function isElement2(ele) {
    // works on major browsers back to IE7
    return ele instanceof Element;
}

// JSODOC = {
//     "method": "getElementPos",
//     "params": [
//         {
//             "name": "ele",
//             "type": "Element",
//             "required": true,
//             "default": null,
//             "info": "Element to get the position of."
//         }
//     ],
//     "returns": {
//         "type": "Number",
//         "info": "Returns fall if unable to get offsetTop"
//     },
//     "info": "Gets an elements offset top position.",
//     "example": [
//         "let pos = getElementOffsetTop(myElement)"
//     ]
// } JSODOC
export function getElementOffsetTop(ele) {
    let curtop = 0;
    if (ele.hasOwnProperty("offsetParent")){
        do {
            curtop += ele.offsetTop;
        } while (ele = ele.offsetParent);
        return parseFloat([curtop]);
    } else {
        return false;
    }
}
// JSODOC = {
//     "method": "hasClass",
//     "params": [
//         {
//             "name": "elementOrId",
//             "type": "Element||ElementID",
//             "required": true,
//             "default": null
//         },
//         {
//             "name": "ele",
//             "type": "Element",
//             "required": true,
//             "default": null,
//             "info": "Element to get the position of."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Gets an elements offset top position.",
//     "example": [
//         "let classAttached = hasClass(myElement,'selected')"
//     ]
// } JSODOC
export function hasClass(elementOrId, c) {
    if (isElement(elementOrId)) {
        return elementOrId.classList.contains(c);
    } else {
        return getElementById(elementOrId).classList.contains(c);
    }
}
// JSODOC = {
//     "method": "setHTML",
//     "params": [
//         {
//             "name": "elementOrId",
//             "type": "Element||ElementID",
//             "required": true,
//             "default": null,
//             "info": "The element or the element ID."
//         },
//         {
//             "name": "str",
//             "type": "String||Number",
//             "required": true,
//             "default": null,
//             "info": "The content you want to put into the html element."
//         },
//         {
//             "name": "mode",
//             "type": "String (set|append|prepend)",
//             "required": false,
//             "default": "Set",
//             "info": "The method in which to set the HTML of the targeted element, set it clearing all content or to append or prepend you content."
//         }
//     ],
//     "info": "Set a an elements HTML content.",
//     "example": [
//         "setHTML(myElement,'hello world')",
//         "setHTML(myElement,'hello world','append')",
//         "setHTML(myElement,'hello world','prepend')",
//         "",
//         "setHTML('my-element-id-1','hello world')",
//         "setHTML('my-element-id-2','hello world','append')",
//         "setHTML('my-element-id-3','hello world','prepend')"
//     ]
// } JSODOC
export function setHTML(elementOrId, str, mode = "set") {
    let ele;
    if (typeof (elementOrId) === "string") {
        ele = document.getElementById(elementOrId);
        if (!ele) {
            ele = document.querySelector(elementOrId);
        }
    } else {
        ele = elementOrId;
    }
    if (ele) {
        if (mode){
            mode = mode.toLowerCase();
        }
        switch (mode) {
            case "append":
                if (ele.innerHTML == ""){
                    ele.innerHTML += str;
                } else {
                    ele.innerHTML += "<br>" + str;
                }
                break;
            case "prepend":
                ele.innerHTML = str + "<br>" + ele.innerHTML;
                break;
            default:
                ele.innerHTML = str;
                break;
        }
    } else {
        return "setHTML(): Usage error: Unable to retrieve element id or use element [" + elementOrId + "]";
    }
}
// JSODOC = {
//     "method": "onReady",
//     "params": [
//         {
//             "name": "fn",
//             "type": "Function",
//             "required": true,
//             "default": null
//         }
//     ],
//     "info": "Checks if the DOM is ready and then executes a function.",
//     "example": [
//         "onReady(function()){",
//         "\t/* DOM is ready, do your thing */",
//         "});",
//         "",
//         "/* or */",
//         "onReady(() =>{",
//         "\t/* DOM is ready, do your thing */",
//         "});"
//     ]
// } JSODOC
export function onReady(fn) {
    // IE9+
    if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        setTimeout(fn, 10);
    } else {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function(){
                window.setTimeout(fn, 10);
            });
        }
    }
}

// JSODOC = {
//     "method": "wordCountFilter",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "default": null
//         },
//         {
//             "name": "maxWords",
//             "type": "Number",
//             "required": true,
//             "default": null
//         }
//     ],
//     "returns": {
//         "type": "Object",
//         "params": [
//             {"name":"output","type":"String"},
//             {"name":"remaining","type":"Number"}
//         ]
//     },
//     "info": "Takes a string, checks it for number of words and returns the string but cuts it to the max number of words you set.",
//     "example": [
//         "let limitedSentence = wordCountFilter(source,20)"
//     ]
// } JSODOC
export function limitNoOfWords(str, maxWords) {
    let wordCount = str.split(/\S+/).length - 1;
    let re = new RegExp("^\\s*\\S+(?:\\s+\\S+){0," + (maxWords - 1) + "}");
    let output = "";
    if (wordCount >= maxWords) {
        output = str.match(re);
    } else {
        output = str;
    }
    return { output: output, remaining: (maxWords - wordCount) };
}

// JSODOC = {
//     "method": "setOptionSelectedIndex",
//     "params": [
//         {
//             "name": "selectElement",
//             "type": "HTML Select Element",
//             "required": true
//         },
//         {
//             "name": "selectedValue",
//             "type": "String",
//             "required": true
//         }
//     ],
//     "info": "Sets an option of HTML select element by value.",
//     "example": [
//         "let limitedSentence = wordCountFilter(source,20)"
//     ]
// } JSODOC
export function setOptionSelectedIndex(selectElement, selectedValue) {
    for (let i = 0; i < selectElement.options.length; i++) {
        let option = selectElement.options[i];
        // console.log(option);
        if (option.value.toLocaleLowerCase() == selectedValue.toLocaleLowerCase()) {
            option.selected = true;
        }
    }
}

export class AFTCPreloader {
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    constructor() {
        // log("AFTCPreloader()");
        this.configFile = false;
        this.data = false;
        this.onProgressHandler = "";
        this.onCompleteHandler = "";
        this.queue = [];
        this.noOfFilesToLoad = 0;
        this.json = false;
        this.noOfThreads = 3;
        this.thread = []; // [0] > [noOfThreads] = "available" || "filled"
        this.queueCompleted = false;
        this.ItemVo = function () {
            this.id = false;
            this.src = false;
            this.ext = false;
            this.loaded = false;
            this.loading = false;
            this.autoAttach = false;
        }
        this.XHRLoader = function (parent, threadIndex, queueIndex, src) {
            // log("XHRLoader(parent, threadIndex, queueIndex, src)");
            this.parent = parent;
            this.threadIndex = threadIndex;
            this.queueIndex = queueIndex;
            this.src = src;
            this.xhr = new XMLHttpRequest();
            this.xhr.onload = (e) => {
                this.onLoadHandler(e);
            };
            // this.xhr.addEventListener("progress", () => this.updateHandler, false);
            // this.xhr.addEventListener("load", transferComplete);
            // this.xhr.addEventListener("error", transferFailed);
            // this.xhr.addEventListener("abort", transferCanceled);
            // Detect abort, load, or error using the loadend event
            // this.xhr.addEventListener("loadend", () => this.loadEndHandler, false);
            this.xhr.open('GET', this.src, true);
            this.xhr.send();
            this.updateHandler = function (e) {
            }
            // - - - - - - - - - - -
            this.onLoadHandler = function (e) {
                // log("XHRLoader.onLoadHandler(): " + this.src);
                this.parent.onFileLoaded(this.threadIndex, this.queueIndex);
                this.xhr = null;
            }
            // - - - - - - - - - - -
        }
        argsToObject(arguments[0], this, true);
        this.head = document.getElementsByTagName('head')[0] || document.body;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // add(src, autoAttach = true) {
    //     // log("AFTCPreloader.add(id,src,autoAttach=true)");
    //     let entry = this.ItemVo();
    //     entry.src = src;
    //     entry.autoAttach = autoAttach;
    //     this.queue.push(entry);
    // }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    start() {
        // log("AFTCPreloader.start()");
        // init
        for (let i = 0; i < this.noOfThreads; i++) {
            this.thread[i] = "available";
        }
        // log(this);
        if (this.data) {
            // log("AFTCPreloader.start(): Processing supplied data var");
            this.data.forEach(file => {
                let vo = new this.ItemVo();
                vo.src = file.src;
                vo.ext = getFileExtension(file.src);
                this.queue.push(vo);
            });
            // log(this.queue);
            this.noOfFilesToLoad = this.queue.length;
            this.processThreadPool();
        } else if (this.configFile) {
            this.loadConfig();
        } else {
            console.error("AFTCPreloader(): Usage error, please either set file:preloader.json or data:[]. format: [{'src': 'assets/videos/f-1-2.mp4'}]");
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    loadConfig() {
        // log("AFTCPreloader.loadConfig()");
        let xhr = new XMLHttpRequest();
        xhr.open('GET', this.configFile, true);
        xhr.onreadystatechange = (e) => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                this.json = JSON.parse(xhr.responseText);
                // log(this.json);
                this.json.forEach(jsonEntry => {
                    let vo = new this.ItemVo();
                    new objectToObject(jsonEntry, vo, false)
                    vo.ext = getFileExtension(vo.src);
                    this.queue.push(vo);
                });
                // log(this.queue);
                this.noOfFilesToLoad = this.queue.length;
                this.processThreadPool();
            }
        };
        xhr.send();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    processThreadPool() {
        // log("AFTCPreloader.processThreadPool()");
        let activeThreads = 0;
        for (let threadIndex = 0; threadIndex < this.noOfThreads; threadIndex++) {
            if (this.thread[threadIndex] === "available") {
                // Destructure
                let queueIndex, itemVo;
                [queueIndex, itemVo] = this.getNext();
                // log(itemVo);
                if (itemVo !== false) {
                    // log("\n#### Thread ["+ threadIndex + "] -------");
                    // log("threadIndex: " + threadIndex + "   queueIndex: " + queueIndex);
                    // log(itemVo);
                    this.thread[threadIndex] = "filled";
                    itemVo.loading = true;
                    new this.XHRLoader(this, threadIndex, queueIndex, itemVo.src);
                    activeThreads++;
                }
            }
        }
        // If all threads are inactive then we are done
        let preloaderComplete = true;
        for (let i = 0; i < this.noOfThreads; i++) {
            if (this.thread[i] !== "available") {
                preloaderComplete = false;
            }
        }
        if (preloaderComplete) {
            // log("AFTCPreloader(): Complete!");
            if (this.onCompleteHandler) {
                this.onCompleteHandler();
            }
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    onFileLoaded(threadIndex, queueIndex) {
        // log("AFTCPreloader.onFileLoaded(threadIndex:"+threadIndex+",queueIndex:"+queueIndex+")");
        let vo = this.queue[queueIndex];
        vo.loading = false;
        vo.loaded = true;
        this.thread[threadIndex] = "available";
        // Handle attach to dom
        if (this.queue[queueIndex].autoAttach === true) {
            if (vo.ext == "js") {
                // Attach JS to DOM
                let script = document.createElement('script');
                // script.onload = ()=> {
                //     console.log("Script attached to DOM: " + vo.src);
                // }
                script.src = vo.src;
                document.head.appendChild(script);
            } else if (vo.ext == "css") {
                // Attach CSS to DOM
                let link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = vo.src;
                link.media = 'all';
                this.head.appendChild(link);
            }
        }
        if (this.onProgressHandler) {
            let percent = 0;
            let noOfFilesLoaded = 0;
            this.queue.forEach(vo => {
                if (vo.loaded) {
                    noOfFilesLoaded++;
                }
            });
            percent = Math.round((100 / this.noOfFilesToLoad) * noOfFilesLoaded);
            let progressObject = {
                percent,
                src: this.queue[queueIndex].src
            }
            this.onProgressHandler(progressObject);
        }
        this.processThreadPool();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    getNext() {
        let queueIndex = -1;
        let itemVo = false;
        for (let i = 0; i < this.queue.length; i++) {
            let entry = this.queue[i];
            if (entry.loaded === false && entry.loading === false) {
                queueIndex = i;
                itemVo = entry;
                break;
            }
        }
        return [queueIndex, itemVo];
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    argsToObject(fArgs, obj, strict) {
        if (fArgs[0] && typeof (fArgs[0]) === "object") {
            let args = fArgs[0];
            if (strict === undefined) {
                strict = true;
            }
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
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    objectToObject(src, dest, strict = true) {
        for (let key in src) {
            if (strict) {
                if (dest.hasOwnProperty(key)) {
                    dest[key] = src[key];
                } else {
                    console.warn("ObjectToObject(): Destination object key doesn't exist [" + key + "].");
                }
            } else {
                dest[key] = src[key];
            }
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    getFileExtension(file) {
        return file.slice((file.lastIndexOf(".") - 1 >>> 0) + 2);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
}
export class ApiRequest {
    // Var defs
    // - - - - - - - - - - - - -
    constructor() {
        // log("ApiRequest()");
    }
    // - - - - - - - - - - - - -
    async get(route) {
        // log("ApiRequest.get(route): " + route);
        // Fetch the data
        const response = await fetch(route, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        })
        // log(response);
        const body = await response.json();
        return body;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -
    async post(route,data,onSuccess,onError) {
        // log("ApiRequest.post(route): " + route);
        const fetchPromise = fetch(route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(data)
        })
        fetchPromise.then(response => {
            return response.json();
        }).then(data => {
            // log(data);
            // log(data.success);
            if (data.success === false) {
                onError(data);
            } else {
                onSuccess(data);
            }
        });
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -
    async patch(route,data,onSuccess,onError) {
        // log("ApiRequest.post(route): " + route);
        const fetchPromise = fetch(route, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(data)
        })
        fetchPromise.then(response => {
            return response.json();
        }).then(data => {
            // log(data);
            // log(data.success);
            if (data.success === false) {
                onError(data);
            } else {
                onSuccess(data);
            }
        });
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -
}
// JSODOC = {
//     "method": "loadAndAttachImage",
//     "params": [
//         {
//             "name": "imgElement",
//             "type": "String",
//             "required": false,
//             "default": null,
//             "info": "Image element to load the image into."
//         },
//         {
//             "name": "src",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load"
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Loads an image file and auto attaches it to the head section of the document.",
//     "example": [
//         "loadAndAttachImage(imgElement1,'./assets/images/products/001.jpg')",
//         ".then(()=>{ log('loaded and attached'); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC
export function loadAndAttachImage(imgElement, src) {
    return new Promise((resolve, reject) => {
        imgElement.onload = () => {
            resolve(true);
        }
        imgElement.error = (e) => {
            reject(e);
        }
        imgElement.src = src;
    });
}
// - - - - - - - - - - - - - - - - - - - - - - - -
// JSODOC = {
//     "method": "loadCss",
//     "params": [
//         {
//             "name": "href",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the css file to load"
//         },
//         {
//             "name": "onComplete",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On complete callback"
//         }
//     ],
//     "info": "Loads a css file and auto attaches it to the head section of the document.",
//     "example": [
//         "loadCss('./include/css/style-sheet-5.css',onStyleSheet5Loaded)"
//     ]
// } JSODOC
export function loadCss(href, onComplete){
    let link = document.createElement("link");
    link.onload = function () {
        if (onComplete) {
            onComplete();
        }
    }
    link.href = href;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName("head")[0].appendChild(link);
}
// JSODOC = {
//     "method": "loadJson",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load."
//         },
//         {
//             "name": "onComplete",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On complete callback, sends json response back as a parameter."
//         },
//         {
//             "name": "onError",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On error callback function handler"
//         }
//     ],
//     "info": "Loads a JSON file and returns it via the onComplete callback function.",
//     "example": [
//         "loadJson('./data/config.json',onLoadedHandler)"
//     ]
// } JSODOC
export function loadJson(url, onComplete, onError) {
    let xhr = new XMLHttpRequest();
    let method = "GET";
    xhr.open(method, url);
    xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            if (onComplete) {
                onComplete(JSON.parse(xhr.response))
            }
        } else {
            if (onError) {
                onError({
                    status: this.status,
                    statusText: xhr.statusText
                })
            }
        }
    }
    xhr.onerror = function () {
        reject({
            status: this.status,
            statusText: xhr.statusText
        });
    };
    xhr.send();
};
// JSODOC = {
//     "method": "loadScript",
//     "params": [
//         {
//             "name": "src",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the js file to load"
//         },
//         {
//             "name": "onComplete",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On complete callback"
//         },
//         {
//             "name": "onProgress",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On progress callback, sends back the percentage loaded"
//         }
//     ],
//     "info": "Loads a JavaScript file and auto attaches it to the head section of the document.",
//     "example": [
//         "loadScript('./include/js/script-5.js',onLoadedHandler)"
//     ]
// } JSODOC
export function loadScript(src, onComplete, onProgress){
    let head = document.getElementsByTagName("head")[0] || document.body;
    if (!head){
        console.error("loadScript(): Unable to get DOM Head or DOM Body!");
        return;
    }
    let script = document.createElement("script");
    let xhr = new XMLHttpRequest();
    // report progress events
    xhr.addEventListener("progress", function(event) {
        if (event.lengthComputable) {
            var percentComplete = event.loaded / event.total;
            // console.log(percentComplete);
            if (onProgress){
                onProgress(percentComplete);
            }
        } else {
            // Unable to compute progress information since the total size is unknown
            if (onProgress){
                onProgress(false);
            }
        }
    }, false);
    // load responseText into a new script element
    xhr.addEventListener("load", function(e) {
        script.innerHTML = e.target.responseText;
        document.documentElement.appendChild(script);
        if (onComplete) {
            onComplete();
        }
        // script.addEventListener("load", function() {
        //     // this runs after the new script has been executed...
        // });
    }, false);
    xhr.open("GET", src);
    xhr.send();
}
// JSODOC = {
//     "method": "promiseLoadCss",
//     "params": [
//         {
//             "name": "href",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the css file to load"
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Loads a css file and auto attaches it to the head section of the document.",
//     "example": [
//         "promiseLoadCss('./include/css/style-sheet-5.css')",
//         ".then(()=>{ log('loaded'); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC
export function promiseLoadCss(href) {
    return new Promise(function (resolve, reject) {
        let link = document.createElement("link");
        link.onload = function () {
                resolve(true);
        }
        link.onerror = (e) => {
            reject(e);
        }
        link.href = href;
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        document.getElementsByTagName("head")[0].appendChild(link);
    });
}
// JSODOC = {
//     "method": "promiseLoadImage",
//     "params": [
//         {
//             "name": "ele",
//             "type": "String",
//             "required": false,
//             "default": null,
//             "info": "Image element to load the image into."
//         },
//         {
//             "name": "src",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load"
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Loads an image file and auto attaches it to the head section of the document.",
//     "example": [
//         "PromiseLoadImage(imgElement1,'./assets/images/products/001.jpg')",
//         ".then(()=>{ log('loaded and attached'); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC
export function promiseLoadImage(ele, src) {
    return new Promise((resolve, reject) => {
        ele.onload = () => {
            resolve(true);
        }
        ele.error = (e) => {
            reject(e);
        }
        ele.src = src;
    });
}
// - - - - - - - - - - - - - - - - - - - - - - - -
// JSODOC = {
//     "method": "promiseLoadJson",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load"
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Loads a json file and returns it via promise resolve",
//     "example": [
//         "PromiseLoadJson('./data/config.json')",
//         ".then((data)=>{ log(data); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC
export function promiseLoadJson(url) {
    // Might extend someday, ref link if you do or old xhr function or both
    // https://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        let method = "GET";
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}
// JSODOC = {
//     "method": "promiseLoadScript",
//     "params": [
//         {
//             "name": "src",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load"
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Loads a JavaScript file and attaches it to the document head",
//     "example": [
//         "promiseLoadScript('./includes/js/onDemandFile1.js')",
//         ".then(()=>{ log('loaded and attached'); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC
export function promiseLoadScript(src) {
    return new Promise(function (resolve, reject) {
        let head = document.getElementsByTagName("head")[0] || document.body;
        if (!head) {
            console.error("promiseLoadScript(): Unable to get DOM Head or DOM Body!");
            return;
        }
        let script = document.createElement("script");
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function (e) {
            script.innerHTML = e.target.responseText;
            document.documentElement.appendChild(script);
            resolve(true)
        }, false);
        xhr.open("GET", src);
        xhr.send();
    });
}
export class XHR {
    constructor() {
        //https://javascript.info/xmlhttprequest
        // var defs
        this.args = {
            url: false,
            method: false,
            data: false,
            dataType: false, // aka requestType this is either form or json xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            responseType: false, // for clientside processing response data type
            timeout: 0,
            onComplete: false,
            onError: false, // only triggers if the request couldn't be made at all
            onProgress: false,
            onCancel: false,
            username: false,
            password: false
        };
        this.url = false;
        this.urlParams = "";
        this.xhr = false;
        // Process arguments
        if (arguments[0] && typeof (arguments[0]) === "object") {
            for (let key in arguments[0]) {
                if (this.args.hasOwnProperty(key)) {
                    this.args[key] = arguments[0][key];
                }
            }
        }
        // console.log(this.args);
        // Validate
        let valid = true;
        if (this.args.url === false) {
            let msg = `XHR(): Usage error: Option "url" has not been set!
Please enter a valid url to make a request to!`;
            console.error(msg);
            valid = false;
            return false;
        }
        if (this.args.method === false) {
            let msg = `XHR(): Usage error: Option "method" has not been set!
Valid options are:
    POST,
    GET`;
            console.error(msg);
            valid = false;
            return false;
        }
        // log(this.args);
        let showDataTypeError = false;
        if (this.args.data !== false){
            if (this.args.dataType === false){
                showDataTypeError = true;
            } else {
                if (typeof(this.args.dataType) == "string"){
                    if (
                        this.args.dataType.toLowerCase() !== "json" &&
                        this.args.dataType.toLowerCase() !== "form" &&
                        this.args.dataType.toLowerCase() !== "text"){
                            showDataTypeError = true;
                    }
                }
            }
        }
        if (showDataTypeError) {
            let msg = `XHR(): Usage error: Invalid "dataType" has been set!
Valid options are:
    JSON        - send json string
    FORM        - send form object
    TEXT        - send url string
`;
            console.error(msg);
            valid = false;
            return false;
        }
        let showResponseTypeError = false;
        if (this.args.responseType === false){
            showResponseTypeError = true;
        } else {
            if (typeof(this.args.dataType) == "string"){
                if (
                    this.args.responseType.toLowerCase() != "text" &&
                    this.args.responseType.toLowerCase() != "document" &&
                    this.args.responseType.toLowerCase() != "json" &&
                    this.args.responseType.toLowerCase() != "arraybuffer" &&
                    this.args.responseType.toLowerCase() != "blob"){
                        showResponseTypeError = true;
                }
            }
        }
        if (showResponseTypeError) {
            let msg =
                `XHR(): Usage warning: Option "responseType" not set!
Valid options are:
    json \t\t\t JSON (parsed automatically)
    document \t\t XML Document (XPath etc),
    text \t\t\t string,
    arraybuffer \t ArrayBuffer for binary data,
    blob \t\t\t Blob for binary data,
`;
            console.error(msg);
            valid = false;
            return false;
        }
        if (this.args.onComplete === false) {
            let msg = `XHR(): Usage error: Option "onComplete" has not been set!
Your making a request but are not doing anything with the response? Make sure to supply an onComplete callback function.`;
            console.error(msg);
            valid = false;
            return false;
        }
        if (valid) {
            this.makeRequest();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    makeRequest() {
        this.xhr = new XMLHttpRequest();
        this.xhr.timeout = this.args.timeout;
        // GET
        // Append data variables to url string, only handle json, form and string
        // POST||PUT||DELETE||PATCH
        // If json send json object
        // If form send form object
        // If text send string
        if (this.args.method.toLowerCase() == "get") {
            // GET
            if (this.args.dataType !== false) {
                switch (this.args.dataType.toLowerCase()) {
                    case "text":
                        this.url = this.args.url + "?" + this.args.data;
                        break;
                    case "form":
                        this.url = this.args.url + "?";
                        for (var key of this.args.data.keys()) {
                            let v = this.args.data.get(key);
                            // console.log(v);
                            this.url = this.url + encodeURI(key) + "=" + encodeURI(v) + "&";
                        }
                        break;
                    case "json":
                        this.url = this.args.url + "?";
                        for (let key in this.args.data) {
                            // console.log(key);
                            // console.log(this.args.data[key]);
                            let v = this.args.data[key];
                            // log(key);
                            this.url = this.url + encodeURI(key) + "=" + encodeURI(v) + "&";
                        }
                        break;
                }
                // console.log("this.url = " + this.url);
            } else {
                this.url = this.args.url
            }
        } else {
            // POST || PUT || PATCH || DELETE
            this.url = this.args.url
        }
        // open
        if (this.args.username !== false && this.args.password !== false) {
            this.xhr.open(this.args.method, this.url, this.args.username, this.args.password);
        } else {
            this.xhr.open(this.args.method, this.url);
        }
        // responseType
        this.xhr.responseType = this.args.responseType;
        // Set requestHeader type aka dataType and send
        if (this.args.dataType !== false && typeof(this.args.dataType) == "string") {
            switch (this.args.dataType.toLowerCase()) {
                case "json":
                    this.xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    this.xhr.send(JSON.stringify(this.args.data));
                    break;
                case "form":
                    // for (var key of this.args.data.keys()) {
                    //     let v = this.args.data.get(key);
                    //     console.log(key + " = " + v);
                    // }
                    this.xhr.send(this.args.data);
                    break;
                case "text":
                    this.xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                    this.xhr.send(this.args.data);
                    break;
                default:
                    this.xhr.send();
                    break;
            }
        } else {
            this.xhr.send();
        }
        // Send
        // if (this.args.data !== false && this.args.dataType !== false){
        //     log("sending data");
        //     this.xhr.send(this.args.data);
        // } else {
        //     this.xhr.send();
        // }
        // Event Listeners
        this.xhr.addEventListener("progress", (e) => this.progressHandler(e), true);
        this.xhr.addEventListener("load", (e) => this.onLoadHandler(e), true);
        this.xhr.addEventListener("error", (e) => this.errorHandler(e), true);
        this.xhr.addEventListener("abort", (e) => this.errorHandler(e), true);
        this.xhr.addEventListener("timeout", (e) => this.errorHandler(e), true);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    errorHandler(e) {
        // console.log("XHR.errorHandler()");
        this.removeEventListeners();
        if (this.args.onError) {
            this.args.onError(e);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    progressHandler(e) {
        // console.log("XHR.progressHandler()");
        // if (e.lengthComputable) {
        //     console.log(`Received ${e.loaded} of ${e.total} bytes`);
        // } else {
        //     console.log(`Received ${e.loaded} bytes`); // no Content-Length
        // }
        // console.log(`Received ${event.loaded} of ${event.total}`);
        if (this.args.onProgress) {
            this.args.onProgress(e);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    onLoadHandler(e) {
        // console.log("XHR.onLoadHandler()");
        // console.log(`Done, got ${this.xhr.response.length} bytes`);
        // console.log(this.xhr.response);
        this.removeEventListeners();
        if (this.args.onComplete) {
            this.args.onComplete(e);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    getResponseHeader(name) {
        if (this.xhr) {
            return this.xhr.getResponseHeader(name);
        } else {
            return null;
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    getAllResponseHeaders() {
        if (this.xhr) {
            return this.xhr.getAllResponseHeaders();
        } else {
            return null;
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    getResponse() {
        if (this.xhr) {
            return this.xhr.response;
        } else {
            return null;
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    removeEventListeners() {
        this.xhr.removeEventListener("progress", (e) => this.progressHandler(e));
        this.xhr.removeEventListener("load", (e) => this.onLoadHandler(e));
        this.xhr.removeEventListener("error", (e) => this.errorHandler(e));
        this.xhr.removeEventListener("abort", (e) => this.errorHandler(e));
        this.xhr.removeEventListener("timeout", (e) => this.errorHandler(e));
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
}
// JSODOC = {
//     "method": "getRandomBoolean",
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Returns a random boolean.",
//     "example": [
//         "let randomBoolean = getRandomBoolean()"
//     ]
// } JSODOC
export function getRandomBoolean(){
    return Math.random() >= 0.5;
}
// JSODOC = {
//     "method": "getRandomFloat",
//     "params": [
//         {
//             "name": "min",
//             "type": "Number",
//             "required": true,
//             "info": "Min value."
//         },
//         {
//             "name": "max",
//             "type": "Number",
//             "required": true,
//             "info": "Max value."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Returns a number (float) between 2 numbers.",
//     "example": [
//         "let randomFloat = getRandomFloat(1.4,42.232)"
//     ]
// } JSODOC
export function getRandomFloat(min, max) {
    // let r = from + (Math.random()* (to*2));
    return (Math.random() * (max - min) + min);
};

// JSODOC = {
//     "method": "getRandomInt",
//     "params": [
//         {
//             "name": "min",
//             "type": "Number",
//             "required": true,
//             "info": "Min value."
//         },
//         {
//             "name": "max",
//             "type": "Number",
//             "required": true,
//             "info": "Max value."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Returns a number (int) between 2 numbers.",
//     "example": [
//         "let randomInt = getRandomInt(0,100)"
//     ]
// } JSODOC
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getRandomThatIsNot(min,max,not){
    let r = not; let lim = 100; let runs = 0;
    while (r===not && runs < lim){
        runs++;
        r = getRandomInt(min,max);
    }
    if (runs>=lim){
        return false;
    } else {
        return r;
    }
}
// JSODOC = {
//     "method": "getRange",
//     "params": [
//         {
//             "name": "value 1",
//             "type": "Number",
//             "required": true,
//             "info": "Value 1."
//         },
//         {
//             "name": "Value 2",
//             "type": "Number",
//             "required": true,
//             "info": "Value 2."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Returns absolute value of the range between 2 numbers.",
//     "example": [
//         "let range = getRange(0,100)"
//     ]
// } JSODOC
export function getRange(a,b){
    return Math.max(a, b) - Math.min(a, b);
}
export function getWeightedRandom(odds, iterations) {
    if (!odds) {
        odds = [
            0.68, // 0
            0.69, // 1
            0.698, // 2
            0.6909, // 3
            0.68, // 4
            0.58, // 5
            0.57, // 6
            0.56, // 7
            0.4, // 8
            0.3, // 9
        ];
    }
    let weights = [];
    let r = 0;
    let iMax = 0;
    let wMax = 0;
    for (let i in odds) {
        if (!weights[i]) {
            weights[i] = 0;
        }
        for (let x = 0; x < iterations; x++) {
            r = Math.random();
            //log(r.toFixed(3) + "   " + odds[i].toFixed(3));
            if (r <= odds[i]) {
                weights[i] += odds[i];
            }
        }
        if (weights[i] > wMax) {
            wMax = weights[i];
            iMax = i;
        }
    }
    //log(weights);
    //log("wMax = " + wMax + "   iMax = " + iMax);
    return iMax;
};
/**
 * @function: getWeightedRandom(odds, iterations)
 * @desc: Get a weighted random based on odds and iterations
 * @param odds array: array of odds
 * @param iterations number: number of iterations to run on each number test
 * @link: https://codepen.io/AllForTheCode/pen/RyvWjZ
 */
// JSODOC = {
//     "method": "isEven",
//     "params": [
//         {
//             "name": "n",
//             "type": "Number",
//             "required": true,
//             "info": "Number to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Detects if a number is even or not.",
//     "example": [
//         "let even = isEven(3)"
//     ]
// } JSODOC
export function isEven(n) {
    return n % 2 === 0;
}

// JSODOC = {
//     "method": "isOdd",
//     "params": [
//         {
//             "name": "n",
//             "type": "Number",
//             "required": true,
//             "info": "Number to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Detects if a number is odd or not.",
//     "example": [
//         "let odd = isOdd(3)"
//     ]
// } JSODOC
export function isOdd(n) {
    return Math.abs(n % 2) === 1;
}
// JSODOC = {
//     "method": "normaliseRange",
//     "params": [
//         {
//             "name": "min",
//             "type": "Number",
//             "required": true,
//             "info": "Min value."
//         },
//         {
//             "name": "max",
//             "type": "Number",
//             "required": true,
//             "info": "Max value."
//         },
//         {
//             "name": "v",
//             "type": "Number",
//             "required": true,
//             "info": "Value to normalise."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Normalises a value to be between 0 and 1, based on a range between min and max. min being 0 and max being 1.",
//     "example": [
//         "let n1 = normaliseRange(0,100,50)",
//         "/* n1 = 0.5 */",
//         "let n2 = normaliseRange(0,100,200)",
//         "/* n2 = 1 */",
//         "let n3 = normaliseRange(0,100,-200)",
//         "/* n3 = 0 */"
//     ]
// } JSODOC
export function normaliseRange(min, max, v) {
    let range = max - min;
    let step = 1 / range;
    let r = (step * (v - min));
    if (v < min) {
        r = 0;
    } else if (v > max) {
        r = 1;
    }
    return r;
}

// JSODOC = {
//     "method": "parseArrayToFloat",
//     "params": [
//         {
//             "name": "arr",
//             "type": "Array",
//             "required": true,
//             "info": "Array to parse."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Parses each entry in the supplied array with Math.float and returns it.",
//     "example": [
//         "let floatParsedArray = parseArrayToFloat(arr)"
//     ]
// } JSODOC
export function parseArrayToFloat(arr) {
    let converted;
    for (let i = 0; i < arr.length; i++) {
        converted = parseFloat(arr[i]);
        if (isNaN(converted)){
            arr[i] = 0;
        } else {
            arr[i] = converted;
        }
    }
    return arr;
}

// JSODOC = {
//     "method": "parseArrayToInt",
//     "params": [
//         {
//             "name": "arr",
//             "type": "Array",
//             "required": true,
//             "info": "Array to parse."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Parses each entry in the supplied array with Math.int and returns it.",
//     "example": [
//         "let intParsedArray = parseArrayToInt(arr)"
//     ]
// } JSODOC
export function parseArrayToInt(arr) {
    let converted;
    for (let i = 0; i < arr.length; i++) {
        converted = parseInt(arr[i]);
        if (isNaN(converted)){
            arr[i] = 0;
        } else {
            arr[i] = converted;
        }
    }
    return arr;
}
// JSODOC = {
//     "method": "roundTo",
//     "params": [
//         {
//             "name": "v",
//             "type": "Number",
//             "required": true,
//             "info": "Value to round."
//         },
//         {
//             "name": "dec",
//             "type": "Number",
//             "required": true,
//             "info": "Number of decimal places to round to."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Rounds a value to a set number of decimal places.",
//     "example": [
//         "let r = roundTo(3.142,2)"
//     ]
// } JSODOC
export function roundTo(v, dec) {
    return +(Math.round(Number(v + "e+" + dec)) + "e-" + dec);
}

export class FPSMonitor {
    // WARNING: export class will not work for transpile to IE11 (DELETE CLASS IF YOU STILL NEED aftc-modules or use SRC file includes)
    // NOTE: Alternatively use aftc.js for ES5 - npm i aftc.js
    constructor(ele) {
        this.dom = {
            fps: false
        }
        this.fpsStack = false;
        this.stackSize = 60;
        this.index = 0;
        this.last = 0;
        this.now = 0;
        this.delta = 0;
        this.currentFrameFps = 0;
        this.total = 0;
        this.averageFps = 0;
        this.i = 0;
        if (ele){
            this.dom.fps = ele;
        }
        this.fpsStack = new Float32Array(this.stackSize);
        this.update();
    }
    update(){
        this.now = performance.now();
        this.delta = (this.now - this.last) / 1000;
        this.currentFrameFps = 1/this.delta;
        // log("currentFrameFps = " + this.currentFrameFps);
        this.fpsStack[this.index] = this.currentFrameFps;
        this.total = 0;
        for(this.i=0; this.i < this.stackSize; this.i++){
            this.total += this.fpsStack[this.i];
        }
        this.averageFps = Math.round( this.total/this.stackSize );
        if (this.dom.fps){
            this.dom.fps.innerText = this.averageFps;
        }
        this.last = this.now;
        this.index++;
        if (this.index >= this.stackSize){
            this.index = 0;
        }
        requestAnimationFrame(()=>{
            this.update();
        });
    }
    getFps(){
        return this.averageFps;
    }
}

// JSODOC = {
//     "method": "getGUID",
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a GUI string.",
//     "example": [
//         "let guid = getGUID()"
//     ]
// } JSODOC
export function getGUID() {
    function Amiga() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return Amiga() + Amiga() + '-' + Amiga() + '-' + Amiga() + '-' +
        Amiga() + '-' + Amiga() + Amiga() + Amiga();
}
// JSODOC = {
//     "method": "getUID",
//     "params": [
//         {
//             "name": "len",
//             "type": "Number",
//             "required": true,
//             "info": "Length of the unique id to generate."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Generates a unique id. NOTE: Max length of 34.",
//     "example": [
//         "let uid = getUID(12)"
//     ]
// } JSODOC
export function getUID(len) {
    if (len > 34){
        console.error("getUID(length): Limit error: Length must be 34 or lower");
    } else {
        return Math.random().toString(36).substr(2, len);
    }
}
// JSODOC = {
//     "method": "isAlphaNumeric",
//     "params": [
//         {
//             "name": "v",
//             "type": "String|Number",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is alphanumeric or not.",
//     "example": [
//         "let an = isAlphaNumeric('a43-')"
//     ]
// } JSODOC
export function isAlphaNumeric(v) {
    return !(/\W/.test(v));
}
// JSODOC = {
//     "method": "isArray",
//     "params": [
//         {
//             "name": "input",
//             "type": "*",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is an array or not.",
//     "example": [
//         "let check = isArray(4)"
//     ]
// } JSODOC
export function isArray(input) {
    return !!input && input.constructor === Array;
    //return arr.constructor === Array;
}
// JSODOC = {
//     "method": "isBool",
//     "params": [
//         {
//             "name": "input",
//             "type": "*",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is a boolean or not.",
//     "example": [
//         "let check = isBool(4)"
//     ]
// } JSODOC
export function isBool(input) {
    if (typeof (input) === "boolean") {
        return true;
    } else {
        return false;
    }
}
// JSODOC = {
//     "method": "isBoolean",
//     "params": [
//         {
//             "name": "input",
//             "type": "*",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is a boolean or not.",
//     "example": [
//         "let check = isBoolean(4)"
//     ]
// } JSODOC
export function isBoolean(input) {
    if (typeof (input) === "boolean") {
        return true;
    } else {
        return false;
    }
}
// JSODOC = {
//     "method": "isNumber",
//     "params": [
//         {
//             "name": "n",
//             "type": "*",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is number or not.",
//     "example": [
//         "let check = isNumber('a')"
//     ]
// } JSODOC
export function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
// JSODOC = {
//     "method": "isNumeric",
//     "params": [
//         {
//             "name": "n",
//             "type": "*",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is numeric or not.",
//     "example": [
//         "let check = isNumeric('a')"
//     ]
// } JSODOC
export function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
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
// JSODOC = {
//     "method": "cutStringTo",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "String to cut."
//         },
//         {
//             "name": "len",
//             "type": "Number",
//             "required": true,
//             "info": "Number of characters to return / Length of string to return."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a string at the desired length.",
//     "example": [
//         "let cutString = cutStringTo('abcd',2)"
//     ]
// } JSODOC
export function cutStringTo(input, len) {
    return input.substring(0, len);
}
// JSODOC = {
//     "method": "escapeHTML",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "String to escape html tags."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a string that has the standard html tags escaped.",
//     "example": [
//         "let newString = escapeHTML('<b>some html</b>')"
//     ]
// } JSODOC
export function escapeHTML(str) {
    if (typeof (str) != "string") { console.error("escape(arg): usage error: arg needs to be a string!"); return false; }
    let replacements = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "\"": "&quot;",
        "`": "&#039;"
    };
    return str.replace(/[<>&"]/g, function (character) {
        return replacements[character];
    });
}
// JSODOC = {
//     "method": "getAnchor",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "info": "String to get anchor from."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns the anchor from a url string.",
//     "example": [
//         "let anchor = getAnchor(url)"
//     ]
// } JSODOC
export function getAnchor(url) {
    if (!url) { url = window.location.href; }
    let anchorAvailable = isInString("#", url);
    if (anchorAvailable) {
        return url.slice(url.lastIndexOf('#') + 1);
    } else {
        return false;
    }
}
// JSODOC = {
//     "method": "getCleanJSONString",
//     "params": [
//         {
//             "name": "s",
//             "type": "String",
//             "required": true,
//             "info": "JSON String to parse."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Attempts to clean up special characters in a JSON string and make it JSON valid.",
//     "example": [
//         "let newString = getCleanJSONString(oldString)"
//     ]
// } JSODOC
export function getCleanJSONString (s) {
    // preserve newlines, etc - use valid JSON
    s = s.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f");
    // remove non-printable and other non-valid JSON chars
    s = s.replace(/[\u0000-\u0019]+/g, "");
    return s;
}
// JSODOC = {
//     "method": "getFileExtension",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to get the file extension from."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Attempts to get the file extension from a supplied string.",
//     "example": [
//         "let ext = getFileExtension(path)"
//     ]
// } JSODOC
export function getFileExtension(str) {
    return str.slice((str.lastIndexOf(".") - 1 >>> 0) + 2);
    // return (str.match(/(?:.+..+[^\/]+$)/ig) != null) ? str.split('.').slice(-1) : 'null';
}
// JSODOC = {
//     "method": "getLastPartOfUrl",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "info": "The url string to get the last part from."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns the last segment of a url split by slashes.",
//     "example": [
//         "let lastSegment = getLastPartOfUrl(url)"
//     ]
// } JSODOC
export function getLastPartOfUrl(url) {
    if (!url) {
        url = window.location.href;
    }
    let part = url.substring(url.lastIndexOf('/') + 1);
    return part;
}
// JSODOC = {
//     "method": "getRandomString",
//     "params": [
//         {
//             "name": "len",
//             "type": "Number",
//             "required": true,
//             "info": "The length of the random string to generate."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a random string of letters A-Z a-z of a specified length.",
//     "example": [
//         "let randomLetterString = getRandomString(256)"
//     ]
// } JSODOC
export function getRandomString(len) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

// JSODOC = {
//     "method": "getStringBetween",
//     "params": [
//         {
//             "name": "source",
//             "type": "String",
//             "required": true,
//             "info": "The length to parse."
//         },
//         {
//             "name": "start",
//             "type": "String",
//             "required": true,
//             "info": "The starting string marker in the source string."
//         },
//         {
//             "name": "end",
//             "type": "String",
//             "required": true,
//             "info": "The ending string marker in the source string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns the string between a start and end string marker matches from the source string.",
//     "example": [
//         "let strBetween = getStringBetween(sourceString,'start-marker','end-marker')"
//     ]
// } JSODOC
export function getStringBetween(source, start, end) {
    return source.split(start).pop().split(end).shift().trim();
}
// JSODOC = {
//     "method": "getStringBetween2",
//     "params": [
//         {
//             "name": "source",
//             "type": "String",
//             "required": true,
//             "info": "The length to parse."
//         },
//         {
//             "name": "start",
//             "type": "String",
//             "required": true,
//             "info": "The starting string marker in the source string."
//         },
//         {
//             "name": "end",
//             "type": "String",
//             "required": true,
//             "info": "The ending string marker in the source string."
//         }
//     ],
//     "returns": {
//         "type": "Array",
//         "info": "Max 500 results"
//     },
//     "info": "Returns an array of all the strings found between a start and end markers. Max of 500 items in array returned.",
//     "example": [
//         "let found = getStringsBetween2(sourceString,'start-marker','end-marker')"
//     ]
// } JSODOC
export function getStringBetween2(str, start, end) {
    let orig = str;
    let results = [];
    // log(orig);
    // log("--------");
    function getBetween() {
        // log("CHECKING: " + str);
        let startMatchIndex = str.indexOf(start); // Find start match
        // log("startMatchIndex: " + startMatchIndex);
        if (startMatchIndex === -1) { return false; }
        let startCutIndex = start.length + startMatchIndex; // calc start cut index
        // log("startCutIndex: " + startCutIndex);
        str = str.substring(startCutIndex, str.length); // LTrim to start cut index
        // log("CUT: " + str);
        let endMatchIndex = str.indexOf(end); // find end match index
        // log("endMatchIndex: " + endMatchIndex);
        if (endMatchIndex === -1) { return false; }
        let between = str.substring(0, endMatchIndex); // get string between
        // log("between: " + between);
        let endCutIndex = end.length + endMatchIndex;
        //log("endCutIndex: " + endCutIndex);
        str = str.substring(endCutIndex, str.length); // cut off end string
        //log("FINAL: " + str);
        return between;
    }
    let lim = 500; // Want to loop forever? 500 seems like a reasonable limit
    let pos = 0;
    let result = true;
    while (pos <= lim && result != false) {
        pos++;
        result = getBetween();
        if (result) {
            //log("between["+i+"] = " + result);
            results.push(result);
            //log("");
        }
    }
    return results;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * @function: getStringsBetween(str,start,end)
 * @desc: Gets all strings between two other strings (multi match)
 * @param string str: input string to check
 * @param string start: start string marker
 * @param string end: end string marker
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */
// JSODOC = {
//     "method": "getWordCount",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to count word from."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Returns the number of words in a string based on spaces.",
//     "example": [
//         "let wordCount = getWordCount(sourceString)"
//     ]
// } JSODOC
export function getWordCount(str) {
    return str.split(/\S+/).length - 1;
}
// JSODOC = {
//     "method": "inString",
//     "params": [
//         {
//             "name": "needle",
//             "type": "String",
//             "required": true,
//             "info": "The string to find."
//         },
//         {
//             "name": "haystack",
//             "type": "String",
//             "required": true,
//             "info": "The string to search."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Looks for a string in a string.",
//     "example": [
//         "let stringFound = inString(needle,haystack)"
//     ]
// } JSODOC
export function inString(needle,haystack) { return haystack.indexOf(needle) !== -1; }
// JSODOC = {
//     "method": "isInString",
//     "params": [
//         {
//             "name": "needle",
//             "type": "String",
//             "required": true,
//             "info": "The string to find."
//         },
//         {
//             "name": "haystack",
//             "type": "String",
//             "required": true,
//             "info": "The string to search."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Looks for a string in a string.",
//     "example": [
//         "let stringFound = isInString(needle,haystack)"
//     ]
// } JSODOC
export function isInString(find,source) { return source.indexOf(find) !== -1; }
// JSODOC = {
//     "method": "lTrimBy",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to find."
//         },
//         {
//             "name": "by",
//             "type": "Number",
//             "required": true,
//             "info": "The number of characters to trim from the left (start) of a string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Trims a string from the left (start) by a specified number of characters.",
//     "example": [
//         "let trimmedString = lTrimBy(str,4)"
//     ]
// } JSODOC
export function lTrimBy(str, by) {
    return str.substring(by, str.length);
}
// JSODOC = {
//     "method": "regExReplaceAll",
//     "params": [
//         {
//             "name": "needle",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace."
//         },
//         {
//             "name": "rep",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace the needle (found) string with."
//         },
//         {
//             "name": "haystack",
//             "type": "String",
//             "required": true,
//             "info": "The string to parse."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Uses regex to replace all instances of a string in a string with what you specify.",
//     "example": [
//         "let newString = regExReplaceAll(needle, rep, haystack)"
//     ]
// } JSODOC
export function regExReplaceAll(needle, rep, haystack) {
    const special = ["-", "[", "]", "/", "{", "}", "(", ")", "*", "+", "?", ".", "\\", "^", "$", "|"];
    if (needle.length == 1) {
        if (isInArray(needle, special)) {
            needle = "\\" + needle;
        }
    }
    const searchRegExp = new RegExp(needle, 'g');
    return haystack.replace(searchRegExp, rep);
}
// JSODOC = {
//     "method": "removeFileFromPath",
//     "params": [
//         {
//             "name": "path",
//             "type": "String",
//             "required": true,
//             "info": "The file path to process."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Removes the file from a file path.",
//     "example": [
//         "let path = removeFileFromPath(fullPath)"
//     ]
// } JSODOC
export function removeFileFromPath(path) {
    //let pa = '/this/is/a/folder/aFile.txt';
    let r = /[^\/]*$/;
    path = path.replace(r, '');
    return path;
}
// JSODOC = {
//     "method": "replaceAll",
//     "params": [
//         {
//             "name": "needle",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace."
//         },
//         {
//             "name": "replace",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace the needle (found) string with."
//         },
//         {
//             "name": "haystack",
//             "type": "String",
//             "required": true,
//             "info": "The string to parse."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Uses a split join method to replace all occurrences of a string. See regExReplaceAll for an alternate method.",
//     "example": [
//         "let newString1 = replaceAll(needle, repWith, haystack)",
//         "let newString2 = regExReplaceAll(needle, repWith, haystack)"
//     ]
// } JSODOC
export function replaceAll(needle,replace,haystack){
    return haystack.split(needle).join(replace);
}
// JSODOC = {
//     "method": "replaceDoubleBackSlash",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to process."
//         },
//         {
//             "name": "rep",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace double back slashes with."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Replaces double back slashes in a string via regex with your specified string.",
//     "example": [
//         "let processedString = replaceDoubleBackSlash(str,replaceWith)"
//     ]
// } JSODOC
export function replaceDoubleBackSlash(str,rep){
    return str.replace(/\\\\/g, rep); // replaces all occurances of \\ with rep
}
// JSODOC = {
//     "method": "replaceDoubleForwardSlash",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to process."
//         },
//         {
//             "name": "rep",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace double forward slashes with."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Replaces double forward slashes in a string via regex with your specified string.",
//     "example": [
//         "let processedString = replaceDoubleForwardSlash(str,replaceWith)"
//     ]
// } JSODOC
export function replaceDoubleForwardSlash(str,rep){
    return str.replace(/\/\//g, rep); // replaces all occurances of // with rep
}
// JSODOC = {
//     "method": "rTrimBy",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to find."
//         },
//         {
//             "name": "trimBy",
//             "type": "Number",
//             "required": true,
//             "info": "The number of characters to trim from the right (end) of a string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Trims a string from the right (end) by a specified number of characters.",
//     "example": [
//         "let trimmedString = rTrimBy(str,4)"
//     ]
// } JSODOC
export function rTrimBy(str, trimBy) {
    return (str.substring(0, str.length - trimBy));
}
// JSODOC = {
//     "method": "trimStringBy",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to find."
//         },
//         {
//             "name": "trimBy",
//             "type": "Number",
//             "required": true,
//             "info": "The number of characters to trim from the right (end) of a string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Trims a string from the right (end) by a specified number of characters.",
//     "example": [
//         "let trimmedString = trimStringBy(str,4)"
//     ]
// } JSODOC
export function trimStringBy(str, trimBy) {
    return (str.substring(0, str.length - trimBy));
}
// JSODOC = {
//     "method": "ucFirst",
//     "params": [
//         {
//             "name": "s",
//             "type": "String",
//             "required": true,
//             "info": "The string to make the first letter upper case."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Makes the first letter of a string uppercase.",
//     "example": [
//         "let ucFirstString = ucFirst('hello')"
//     ]
// } JSODOC
export function ucFirst(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}
// JSODOC = {
//     "class": "SwipeHandler",
//     "params": [
//         {
//             "type": "object",
//             "def": [
//                 { "name": "onSwipeLeft", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe left is detected." },
//                 { "name": "onSwipeRight", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe right is detected." },
//                 { "name": "onSwipeUp", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe up is detected." },
//                 { "name": "onSwipeDown", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe down is detected." },
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
            onSwipeUp: false,
            onSwipeDown: false,
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

// JSODOC = {
//     "method": "isEmail",
//     "params": [
//         {
//             "name": "email",
//             "type": "String",
//             "required": true,
//             "info": "The email string to validate."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Validates an email address via regex.",
//     "example": [
//         "let isValidEmail = isEmail('darcey.lloyd@gmail.com')"
//     ]
// } JSODOC
export function isEmail (email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// JSODOC = {
//     "method": "promiseAttachVideo",
//     "params": [
//         {
//             "name": "video",
//             "type": "Video",
//             "required": true,
//             "info": "The video to attach to."
//         },
//         {
//             "name": "src",
//             "type": "String",
//             "required": true,
//             "info": "The src of the video file to attach to the video element or video javascript instance."
//         }
//     ],
//     "returns": {
//         "type": "Promise with object with props {width,height,duration}"
//     },
//     "info": "Attaches a video file to a video and once it's meta data is available it will resolve the promise. Useful for getting width, height and duration.",
//     "example": [
//         "promiseAttachVideo(vid,vidSrc)",
//         "then((res)=>{ console.log('video attached and ready') })"
//     ]
// } JSODOC
export function promiseAttachVideo(video, src) {
    return new Promise((resolve, reject) => {
        video.addEventListener("loadedmetadata", (e) => {
            let width = video.videoWidth;
            let height = video.videoWidth;
            let duration = video.duration;
            resolve({
                width, height, duration
            });
        }, false);
        video.addEventListener("error", (e) => {
            reject(e);
            throw (e);
        }, false);
        video.src = src;
    });
}
// JSODOC = {
//     "method": "promiseVideoEnd",
//     "params": [
//         {
//             "name": "video",
//             "type": "Video",
//             "required": true,
//             "info": "The video to attach to."
//         }
//     ],
//     "returns": {
//         "type": "Promise resolve on video end"
//     },
//     "info": "Returns a promise resolve on video end.",
//     "example": [
//         "promiseVideoEnd(vid)",
//         "then((res)=>{ console.log('video playback complete') })"
//     ]
// } JSODOC
export function promiseVideoEnd(video) {
    return new Promise((resolve, reject) => {
        video.addEventListener('ended', (e) => {
            resolve(e);
        });
    });
}
