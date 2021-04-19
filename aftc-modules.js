// aftc-modules v1.7.5
// Author: Darcey@aftc.io
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
export function arrayClear(arr) {
    while (arr.length > 0) { arr.pop(); }
}

export function arrayContains(needle, haystack) {
    if (haystack.indexOf(needle) > -1) { return true; } else { return false; }
}
export function arrayEmpty(arr) {
    while (arr.length > 0) { arr.pop(); }
}
export function arrayGetMax(arr) {
    return Math.max.apply(Math, arr);
}


export function arrayGetMin(arr) {
    return Math.min.apply(Math, arr);
}
export function arrayMax(arr) {
    return Math.max.apply(Math, arr);
}
export function arrayMin(arr) {
    return Math.min.apply(Math, arr);
}
export function arrayRemoveIndex(arr,index){
    arr.splice(index,1);
}

export function arrayRemoveItem(arr, value) {
    return arr.filter(function(item){
        return item != value;
    });
}
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

export function arrayShuffle2(a) {
    let x, t, r = new Uint32Array(1);
    for (let i = 0, c = a.length - 1, m = a.length; i < c; i++ , m--) {
        crypto.getRandomValues(r);
        x = Math.floor(r / 65536 / 65536 * m) + i;
        t = a[i], a[i] = a[x], a[x] = t;
    }

    return a;
}
export function isInArray(needle, haystack) {
    if (haystack.indexOf(needle) > -1) { return true; } else { return false; }
}
export function isStringInArray(needle, haystack) {
    return (new RegExp('(' + haystack.join('|').replace(/\./g, '\\.') + ')$')).test(needle);
}

export function getBrowser () {
    let ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
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
export function getBrowserX(){
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    // let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    return x;
}


export function getBrowserY(){
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    // let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    return y;
}

export function isInViewport(el){
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;

    while(el.offsetParent) {
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

export function argsToObject(fArgs, obj, strict) {
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
};

/**
 * @function: argsToObject(fArgs, obj, strict)
 * @desc: Quick and easy args to object
 * @param args object: arguments (from the function structure, typically code will always be 'arguments'
 * @param obj object: object to parse into
 * @param strict boolean: console.warn any args that have been supplied that don't exist in args
 * @return: null
 * @alias: argsTo
 * @link: https://codepen.io/AllForTheCode/pen/PaqbKN
 */
export function boolToString (bool) {

    if (!bool || bool === undefined || typeof (bool) != "boolean") {
        console.log("AFTC.js: getBoolToString(str): Error - input is not a boolean!");
        return "error";
    }

    if (bool) {
        return "true";
    } else {
        return "false";
    }
}
export function boolToYesNo (b) {

    if (!b || b === undefined || typeof (b) != "boolean") {
        console.log("getYesNoFromBool(str): Error - input is not a boolean!");
        return "error";
    }

    if (b) {
        return "yes";
    } else {
        return "no";
    }
}
export function degToRad(input) { return input * (Math.PI / 180); }
export function hexToRgb (hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
export function numToHex (num) {
    return num.toString(16);
}
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
export function radToDeg(input) { return input * (180 / Math.PI); }
export function RGBToHex (r, g, b) {
    return ((r << 16) | (g << 8) | b).toString(16);
}

export function RGBToHex2 (r, g, b) {
    function getHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    let hex = "#" + getHex(r) + getHex(g) + getHex(b);
    hex = hex.toUpperCase();
    return hex;
}
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


export function getCookie(name) {
	//return .cookie(name);
	var keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|)');
	return keyValue ? keyValue[2] : null;
}
export function setCookie(cname, cvalue, exdays) {
	// var expires = new Date();
	// expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
	// document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// export function setCookie(name, value) {
// 	//document.cookie = name + "=" + value + "; expires=Thu, 18 Dec 2013 12:00:00 GMT";
// 	//.cookie(name, value, {expires:365,path:'/cookies'});
// 	var expires = new Date();
// 	expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
// 	document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
// }
export function getDaysBetween (startDateTime, endDateTime) {
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

export function getUKDate(dte){
    let output = dte.getDay() + "-" + (dte.getMonth()+1) + "-" + dte.getFullYear();
    return output;
}
export function getUkDateFromDbDateTime (input) {
    // "2016-04-08 21:11:59" to UK date
    if (input === "" || input === null) {
        return "no input";
    }
    let DateTime = input.split(" ");
    let DateParts = DateTime[0].split("-");
    let UKDate = DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0];
    return UKDate;
}
export function getUkDateTimeFromDbDateTime  (input) {
    // "2016-04-08 21:11:59" to UK date time
    let DateTime = input.split(" ");
    let DateParts = DateTime[0].split("-");
    let TimeParts = DateTime[1].split(":");
    let UKDate = DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0];
    let Time = TimeParts[0] + ":" + TimeParts[1];
    return (UKDate + " " + Time);
}
export function getUSDate(dte){
    let output = dte.getFullYear() + "-" + (dte.getMonth()+1) + "-" + (dte.getDay()+1)
    return output;
}
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


export function attachDebug(no, position, ele) {
    let ids = [];

    let debugContainer = document.createElement("div");
    debugContainer.id = "debug-container";
    debugContainer.style.zIndex = "999999";
    debugContainer.style.position = "fixed";
    
    if (!position){
        position = "left";
    }
    position = position.toLowerCase();

    if (position == "tl" || position == "l" || position == "left" || position == "top left") {
        debugContainer.style.left = "5px";
        debugContainer.style.top = "5px";
        debugContainer.style.textAlgin = "left";
    } else if (position == "tr" || position == "r" || position == "right" || position == "top right") {
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
export function debugTo(index, str) {
    if (window.aftcDebug) {
        if (window.aftcDebug[index]) {
            window.aftcDebug[index].innerHTML = str;
        }
    }
}
export function log(arg) {
    console.log(arg);
}

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


export function getIEVersion () {
    let match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    return match ? parseInt(match[1]) : undefined;
}
export function getOS(testAgent) {
    let userAgent;

    if (!testAgent){
        userAgent = navigator.userAgent || navigator.vendor || window.opera;
    } else {
        userAgent = testAgent;
    }

    userAgent = userAgent.toLowerCase();




    // Windows Phone must come first because its UA also contains "Android"!
    if (/windows phone/i.test(userAgent)) {
        return {
            os:"windows phone",
            userAgent:userAgent
        }
    }

    // Samsung Browser detection S8
    if (/samsungbrowser/i.test(userAgent)) {
        return {
            os:"android",
            userAgent:userAgent
        }
    }



    if (/android/i.test(userAgent)) {
        return {
            os:"android",
            userAgent:userAgent
        }
    }

    if (/ipad|iphone|ipod/i.test(userAgent)) {
        return {
            os:"ios",
            userAgent:userAgent
        }
    }



    // Windows Phone must come first because its UA also contains "Android"
    if (/win64|win32|win16|win95|win98|windows 2000|windows xp|msie|windows nt 6.3; trident|windows nt|windows/i.test(userAgent)) {
        return {
            os:"windows",
            userAgent:userAgent
        }
    }


    if (/os x/i.test(userAgent)) {
        return {
            os:"osx",
            userAgent:userAgent
        }
    }

    if (/macintosh|osx/i.test(userAgent)) {
        return {
            os:"osx",
            userAgent:userAgent
        }
    }

    if (/openbsd/i.test(userAgent)) {
        return {
            os:"open bsd",
            userAgent:userAgent
        }
    }


    if (/sunos/i.test(userAgent)) {
        return {
            os:"sunos",
            userAgent:userAgent
        }
    }






    if (/crkey/i.test(userAgent)) {
        return {
            os:"chromecast",
            userAgent:userAgent
        }
    }

    if (/appletv/i.test(userAgent)) {
        return {
            os:"apple tv",
            userAgent:userAgent
        }
    }

    if (/wiiu/i.test(userAgent)) {
        return {
            os:"nintendo wiiu",
            userAgent:userAgent
        }
    }

    if (/nintendo 3ds/i.test(userAgent)) {
        return {
            os:"nintendo 3ds",
            userAgent:userAgent
        }
    }

    if (/playstation/i.test(userAgent)) {
        return {
            os:"playstation",
            userAgent:userAgent
        }
    }

    if (/kindle/i.test(userAgent)) {
        return {
            os:"amazon kindle",
            userAgent:userAgent
        }
    }

    if (/ cros /i.test(userAgent)) {
        return {
            os:"chrome os",
            userAgent:userAgent
        }
    }



    if (/ubuntu/i.test(userAgent)) {
        return {
            os:"ubuntu",
            userAgent:userAgent
        }
    }


    if (/googlebot/i.test(userAgent)) {
        return {
            os:"google bot",
            userAgent:userAgent
        }
    }

    if (/bingbot/i.test(userAgent)) {
        return {
            os:"bing bot",
            userAgent:userAgent
        }
    }

    if (/yahoo! slurp/i.test(userAgent)) {
        return {
            os:"yahoo bot",
            userAgent:userAgent
        }
    }



    return {
        os: false,
        userAgent:userAgent
    };
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


export function isAndroid(){
    let ua = navigator.userAgent.toLowerCase();
    if (/windows phone/i.test(ua)) {
        return false;
    } else {
        let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
        return isAndroid;
    }
}

export function isChrome() {
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");

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
export function isEdge () {
    //let isEdge = !isIE && !!window.StyleMedia; // Edge 20+
    let edge = false;
    if (/Edge\/\d./i.test(navigator.userAgent)) {
        edge = true;
    }
    return edge;
}
export function isFireFox () {
    // let is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    // return is_firefox;
    return (typeof InstallTrigger !== 'undefined');
}
export function isIE () {
    // let is_ie = navigator.userAgent.toLowerCase().indexOf('MSIE') > -1;
    // return is_ie;
    // params.isIE = navigator.userAgent.match(/MSIE|Trident/);
    // params.isIE = document.documentMode; // IS9 and above
    return /*@cc_on!@*/false || !!document.documentMode; // Internet Explorer 6-11
}

export function isIOS() {
    let iDevices = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ];

    if (!!navigator.platform) {
        while (iDevices.length) {
            if (navigator.platform === iDevices.pop()){ return true; }
        }
    }

    return false;
}

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
/**
 * @function: isMobile()
 * @desc: Detects if the device you are using is a mobile or not
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/KRbLdm
 */
export function isOpera() {
    // let isChromium = window.chrome;
    // let isOpera = window.navigator.userAgent.indexOf("OPR") > -1 || window.navigator.userAgent.indexOf("Opera") > -1;
    // let isOpera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
    let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    return isOpera;
}
export function isSafari() {
    // let is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    // return is_safari;
    return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
}
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
export function isDOM(obj) {
    // this works for newer browsers
    try { return obj instanceof HTMLElement; }

        // this works for older browsers
    catch (e) {
        return (typeof obj === "object") &&
            (obj.nodeType === 1) && (typeof obj.style === "object") &&
            (typeof obj.ownerDocument === "object");
    }
};
export function isElement(o) {
    let answer = (
        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
    );

    if (answer != true) {
        return false;
    } else {
        return true;
    }
}
export function isElement2(element) {
    // works on major browsers back to IE7
    return element instanceof Element;
}

export function getElementOffsetTop(elementId) {
    let element = getElementById(elementId);
    let curtop = 0;
    if (element.hasOwnProperty("offsetParent")){
        do {
            curtop += element.offsetTop;
        } while (element = element.offsetParent);
        return parseFloat([curtop]);
    } else {
        return false;
    }
}
export function hasClass(elementOrId, c) {
    if (isElement(elementOrId)) {
        return elementOrId.classList.contains(c);
    } else {
        return getElementById(elementOrId).classList.contains(c);
    }
}
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
export class EventManager {
    // WARNING: export class will not work for transpile to IE11 (DELETE CLASS IF YOU STILL NEED aftc-modules or use SRC file includes)
    // NOTE: Alternatively use aftc.js for ES5 - npm i aftc.js
}

/** jso {
 * "Function": "EventManager.js",
 * "Description": "A centralised event stack where you can hook your functions / class's into for centralised quick and easy event application event handling.",
 * "Methods": [
 *      {
 *          "name": "list",
 *          "description": "Lists which events have been created and available for dispatch in the EventManager.",
  *          "returns": "console.log",
 *      },
 *      {
 *          "name": "add",
 *          "description": "Adds or creates a new event within the event manager and attached a callback function / listener object to be called on dispatch of this event.",
 *          "parameters": [
 *              {
 *                  "name": "eventName",
 *                  "required": "true",
 *                  "description": "The name of the event to add.",
 *              },
 *              {
 *                  "name": "callbackFunction",
  *                  "required": "true",
 *                  "description": "The listener object / function which gets called when the event is triggered.",
 *              },
 *          ],
 *      },
 *      {
 *          "name": "dispatch",
 *          "description": "Dispatches / Triggers an event by name from the EventManager.",
 *          "parameters": [
 *              {
 *                  "name": "eventName",
 *                  "required": "true",
 *                  "description": "The name of the event to dispatch.",
 *              }
 *          ],
 *      },
 *  ]
 * }
 */
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

export function getWordsFromString(str, maxWords) {
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

        argsToObject(arguments, this, true);

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
export class PromiseLoadJson {

    // Might extend someday, ref link if you do or old xhr function or both
    // https://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr

    constructor(url){

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
    
    

}
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
    // WARNING: export class will not work for transpile to IE11 (DELETE CLASS IF YOU STILL NEED aftc-modules or use SRC file includes)
    // NOTE: Alternatively use aftc.js for ES5 - npm i aftc.js (new XHR())


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
export function getRandomBoolean(){
    return Math.random() >= 0.5;
}
export function getRandomFloat(min, max) {
    // let r = from + (Math.random()* (to*2));
    return (Math.random() * (max - min) + min);
};

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getRandomThatsNot(min,max,not){
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
/**
 * @function: getRandomThatsNot(min,max,not)
 * @desc: returns a random int betwen your specified min and max values but never the not value
 * @param min number: the minimum your random number is allowed to go
 * @param max number: the maximum your random number is allowed to go
 * @alias: getRandom
 * @link: https://codepen.io/AllForTheCode/pen/yEBZNq
 */
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

export function isEven(n) {
    return n % 2 === 0;
}

export function isOdd(n) {
    return Math.abs(n % 2) === 1;
}
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

export function getGUID() {
    function Amiga() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return Amiga() + Amiga() + '-' + Amiga() + '-' + Amiga() + '-' +
        Amiga() + '-' + Amiga() + Amiga() + Amiga();
}
export function getUID(len) {
    if (len > 34){
        console.error("getUID(length): Limit error: Length must be 34 or lower");
    } else {
        return Math.random().toString(36).substr(2, len);
    }
}
export function isAlphaNumeric(v) {
    return !(/\W/.test(v));
}
export function isArray(input) {
    return !!input && input.constructor === Array;
    //return arr.constructor === Array;
}
export function isBool(input) {
    if (typeof (input) === "boolean") {
        return true;
    } else {
        return false;
    }
}
export function isBoolean(input) {
    if (typeof (input) === "boolean") {
        return true;
    } else {
        return false;
    }
}
export function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
export function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
export function cutStringTo(s, len) {
    return s.substring(0, len);
}
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
export function getAnchor(url) {
    if (!url) { url = window.location.href; }
    let anchorAvailable = isInString("#", url);
    if (anchorAvailable) {
        return url.slice(url.lastIndexOf('#') + 1);
    } else {
        return false;
    }
}
/**
 * @function: GetAnchor(url)
 * @desc: Get anchor from url
 * @param string url: The url to get the anchor from
 * @link:
 */
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
export function getFileExtension(input) {
    return input.slice((input.lastIndexOf(".") - 1 >>> 0) + 2);
    // return (input.match(/(?:.+..+[^\/]+$)/ig) != null) ? input.split('.').slice(-1) : 'null';

}
export function getLastPartOfUrl(url) {
    if (!url) {
        url = window.location.href;
    }
    let part = url.substring(url.lastIndexOf('/') + 1);
    return part;
}
export function getRandomString(len) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

export function getStringBetween(str, start, end) {
    return str.split(start).pop().split(end).shift().trim();
}
/**
 * @function: getStringBetween(input,start,end)
 * @desc: Gets a string between two other strings
 * @param string input: input string to check
 * @param string start: start string marker
 * @param string end: end string marker
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */
export function getStringsBetween2(str, start, end) {
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
    let lim = 500; // Want to loop forever? 500 seems like areasonable limit
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
export function getWordCount(str) {
    return str.split(/\S+/).length - 1;
}
export function inString(find,source) { return source.indexOf(find) !== -1; }
export function isInString(find,source) { return source.indexOf(find) !== -1; }
export function lTrimBy(str, by) {
    return str.substring(by, str.length);
}
export function regExReplaceAll(haystack, needle, rep) {
    const special = ["-", "[", "]", "/", "{", "}", "(", ")", "*", "+", "?", ".", "\\", "^", "$", "|"];
    if (needle.length == 1) {
        if (isInArray(needle, special)) {
            needle = "\\" + needle;
        }
    }
    const searchRegExp = new RegExp(needle, 'g');
    return haystack.replace(searchRegExp, rep);

}
export function removeFileFromPath(path) {
    //let pa = '/this/is/a/folder/aFile.txt';
    let r = /[^\/]*$/;
    path = path.replace(r, '');
    return path;
}
export function replaceAll(haystack,needle,replace){
    return haystack.split(needle).join(replace);
}
export function replaceDoubleBackSlash(str,rep){
    return str.replace(/\\\\/g, rep); // replaces all occurances of \\ with rep
}
export function replaceDoubleForwardSlash(str,rep){
    return str.replace(/\/\//g, rep); // replaces all occurances of // with rep
}
export function rTrimBy(str, trimBy) {
    return (str.substring(0, str.length - trimBy));
}
export function trimStringBy(str, trimBy) {
    return (str.substring(0, str.length - trimBy));
}
export function ucFirst(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}
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
export function isEmail (email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export class SwipeHandler {


    // - - - - - - - - - - - - - - - - - - - - - - - -


    constructor(onSwipeLeft, onSwipeRight) {
        // log("SwipeHandler(onSwipeLeft,onSwipeRight)");

        // vars
        this.onSwipeLeft = onSwipeLeft;
        this.onSwipeRight = onSwipeRight;
        this.onSwipeUp = onSwipeUp;
        this.onSwipeDown = onSwipeDown;

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
export class PromiseAttachVideo {


    constructor(video,src) {
        return new Promise((resolve, reject) => {
    
            video.addEventListener("loadedmetadata", (e) => {
                let width = video.videoWidth;
                let height = video.videoWidth;
                let duration = video.duration;
                resolve({
                    width,height,duration
                });
            }, false);

            video.addEventListener("error", (e) => {
                reject(e);
                throw (e);
            },false);
    
            video.src = src;  
        });
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

}
export class PromiseVideoEnd {

    constructor(video) {
        return new Promise((resolve, reject) => {
            video.addEventListener('ended', (e) => {
                resolve(e);
            }); 
        });
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

}


