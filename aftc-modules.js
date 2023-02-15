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
export function arrayRemoveIndex(arr,index){
    arr.splice(index,1);
}

export function arrayRemoveValue(arr, value) {
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
export function isArrayInString(input, arr) {
    return arr.some(substring=>input.includes(substring));
}

export function isInArray(needle, haystack) {
    if (haystack.indexOf(needle) > -1) { return true; } else { return false; }
}
export function isStringInArray(needle, haystack) {
    return (new RegExp('(' + haystack.join('|').replace(/\./g, '\\.') + ')$')).test(needle);
}

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
export function getBrowserX() {
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
export function degToRad(input) { return input * (Math.PI / 180); }
export function hexToRgb(hex) {
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
export function rgbToHex (r, g, b) {
    return ((r << 16) | (g << 8) | b).toString(16);
}

export function rgbToHex2 (r, g, b) {
    function getHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    let hex = "#" + getHex(r) + getHex(g) + getHex(b);
    hex = hex.toUpperCase();
    return hex;
}
export function rgbToHex3(r, g, b) {
    // clamp and convert to hex
    let hr = Math.max(0, Math.min(255, Math.round(r))).toString(16);
    let hg = Math.max(0, Math.min(255, Math.round(g))).toString(16);
    let hb = Math.max(0, Math.min(255, Math.round(b))).toString(16);
    let hexString = "0x" +
      (hr.length < 2 ? "0" : "") + hr +
      (hg.length < 2 ? "0" : "") + hg +
      (hb.length < 2 ? "0" : "") + hb;
    return +hexString;
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
export function listCookies() {
 var c = document.cookie.split(';');
 for (var i = 1 ; i <= c.length; i++) {
  console.log(c[i-1])
 }
}
export function setCookie(name, value, mins) {
 // https://javascript.info/cookie
 // var d = new Date();
 // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
 // var expires = "expires=" + d.toUTCString();
 let d = new Date();
 d.setTime(d.getTime()+(mins*60*1000));
 let expires = "; expires="+d.toGMTString();
 document.cookie = name + "=" + value + ";" + expires + ";samesite=strict;secure:true;path=/";
}
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

export function getUKDate(dte,separator="-"){
    let output = "";
    if (typeof (dte) === "string") {
        // console.warn(dte);
        let dateTimeSplit = dte.split(' ');
        let dateSplit = dateTimeSplit[0].split(separator);
        // log(dateSplit);
        output = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0];
    } else {
        output = dte.getDay() + separator + (dte.getMonth() + 1) + separator + dte.getFullYear();
    }
    return output;
}
export function getUKDateFromDbDateTime(dte,separator="-") {
    // "2016-04-08 21:11:59" to UK date
    let output = "";
    if (typeof (dte) === "string") {
        // console.warn(dte);
        let dateTimeSplit = dte.split(' ');
        let dateSplit = dateTimeSplit[0].split(separator);
        // log(dateSplit);
        output = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0];
    } else {
        output = dte.getDay() + separator + (dte.getMonth() + 1) + separator + dte.getFullYear();
    }
    return output;
}
export function getUKDateTime(dte,separator="-"){
    let output = "";
    let formatTimeValue = (v)=>{
        if (v<10){
            return "0" + v;
        } else {
            return v;
        }
    }
    if (typeof (dte) === "string") {
        let dateTimeSplit = dte.split(' ');
        let dateSplit = dateTimeSplit[0].split(separator);
        if (dateTimeSplit.length > 1) {
            let TimeParts = dateTimeSplit[1].split(":");
            let Time = TimeParts[0] + ":" + TimeParts[1];
            output = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0] + " " + TimeParts[0] + ":" + TimeParts[1] + ":" + TimeParts[2];
        } else {
            output = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0];
        }
        // log(dateSplit);
    } else {
        output = dte.getDay() + separator + (dte.getMonth() + 1) + separator + dte.getFullYear();
        output = output + " " + formatTimeValue(dte.getHours()) + ":" + formatTimeValue(dte.getMinutes()) + ":" + formatTimeValue(dte.getSeconds())
    }
    return output;
}
export function getUKDateTimeFromDbDateTime(dte,separator="-") {
    // "2016-04-08 21:11:59" to UK date time
    let output = "";
    let formatTimeValue = (v)=>{
        if (v<10){
            return "0" + v;
        } else {
            return v;
        }
    }
    if (typeof (dte) === "string") {
        let dateTimeSplit = dte.split(' ');
        let dateSplit = dateTimeSplit[0].split(separator);
        if (dateTimeSplit.length > 1) {
            let TimeParts = dateTimeSplit[1].split(":");
            let Time = TimeParts[0] + ":" + TimeParts[1];
            output = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0] + " " + TimeParts[0] + ":" + TimeParts[1] + ":" + TimeParts[2];
        } else {
            output = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0];
        }
        // log(dateSplit);
    } else {
        output = dte.getDay() + separator + (dte.getMonth() + 1) + separator + dte.getFullYear();
        output = output + " " + formatTimeValue(dte.getHours()) + ":" + formatTimeValue(dte.getMinutes()) + ":" + formatTimeValue(dte.getSeconds())
    }
    return output;
}
export function getUSDate(dte,separator="-"){
    let output = dte.getFullYear() + separator + (dte.getMonth()+1) + separator + (dte.getDay()+1)
    return output;
}
export class Logger {
    // Var defs
    enabled = true;
    // NOTE: Global override can be achieved with
    // window.AFTCConsoleLogger.enable = true
    // - - - - - - - - - - - - -
    constructor() {
        if (!window.AFTCConsoleLogger) {
            window.AFTCConsoleLogger = {
                enabledAll: false,
                disableAll: false
            }
        }
    }
    // - - - - - - - - - - - - -
    enable() {
        this.enabled = true;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -
    disable() {
        this.enabled = false;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -
    enableAll() {
        if (window.AFTCConsoleLogger) {
            window.AFTCConsoleLogger.enabledAll = true;
            window.AFTCConsoleLogger.disableAll = false;
        } else {
            window.AFTCConsoleLogger = {
                enabledAll:true,
                disableAll:false,
            }
        }
    }
    enableGlobally() {
        this.enableAll();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -
    disableAll() {
        if (window.AFTCConsoleLogger) {
            window.AFTCConsoleLogger.enabledAll = false;
            window.AFTCConsoleLogger.disableAll = true;
        } else {
            window.AFTCConsoleLogger = {
                enabledAll:false,
                disableAll:true,
            }
        }
    }
    disableGlobally() {
        this.disableAll();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -
    log(arg) {
        if (window.AFTCConsoleLogger.disableAll === true) {
            return
        } else if (this.enabled === true || window.AFTCConsoleLogger.enableAll === true) {
            console.log(arg);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -
    warn(arg) {
        if (window.AFTCConsoleLogger.disableAll === true) {
            return
        } else if (this.enabled === true || window.AFTCConsoleLogger.enableAll === true) {
            console.warn(arg);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -
    error(arg) {
        if (window.AFTCConsoleLogger.disableAll === true) {
            return
        } else if (this.enabled === true || window.AFTCConsoleLogger.enableAll === true) {
            console.error(arg);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -
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
export function debugTo(index, str) {
    if (window.aftcDebug) {
        if (window.aftcDebug[index]) {
            window.aftcDebug[index].innerHTML = str;
        }
    }
}
export function log(...args) {
    if (window.aftcLogEnabled === undefined){
        window.aftcLogEnabled = true;
    }
    if (window.aftcLogEnabled){
        console.log(...args);
    }
}
export function logDisable() {
    window.aftcLogEnabled = false;
}
export function logEnable() {
    window.aftcLogEnabled = true;
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

export function warn(...args) {
    if (window.aftcLogEnabled === undefined){
        window.aftcLogEnabled = true;
    }
    if (window.aftcLogEnabled){
        console.warn(...args);
    }
}

export const getDeviceType = () => {
    const ua = navigator.userAgent;
    //@ts-ignore
    if (!!window.MSInputMethodContext && !!document.documentMode) {
        // ie11
        return "desktop";
    }
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        return "mobile";
    }
    return "desktop";
};
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
export function isEdge () {
    //let isEdge = !isIE && !!window.StyleMedia; // Edge 20+
    let edge = false;
    if (/Edge|Edg\/\d./i.test(navigator.userAgent)) {
        edge = true;
    }
    return edge;
}
export function isFireFox () {
    // let is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    // return is_firefox;
    return (typeof InstallTrigger !== 'undefined');
}
export function isIOS() {
    let ua = navigator.userAgent;
    if (/iPad Simulator|iPhone Simulator|iPod Simulator|iPad|iPod|iPhone/i.test(ua)) {
        return true;
    } else {
        return false;
    }
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
    // return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        return true;
    } else {
        return false;
    }
}
export const isTouchDevice = () => {
    return navigator
      ? "ontouchstart" in window ||
      // @ts-ignore-disable-next-line
      (window.DocumentTouch && document instanceof window.DocumentTouch) ||
      navigator.maxTouchPoints ||
      false
      : false;
  };
  
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
export function isElement2(ele) {
    // works on major browsers back to IE7
    return ele instanceof Element;
}

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
    } 
}
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

export function setOptionSelectedIndex(selectElement, selectedValue) {
    for (let i = 0; i < selectElement.options.length; i++) {
        let option = selectElement.options[i];
        // console.log(option);
        if (option.value.toLocaleLowerCase() == selectedValue.toLocaleLowerCase()) {
            option.selected = true;
        }
    }
}

function imageToCanvasLoadImage(src, canvas, ctx){
    // https://stackoverflow.com/questions/55892083/javascript-load-image-into-offscreen-canvas-perform-webp-conversion
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = (e) => {
            // log(`Image loaded (${img.width} x ${img.height}): ${src}`)
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.width = img.width;
            ctx.height = img.height;
            ctx.drawImage(img, 0, 0);
            resolve(canvas);
        }
        img.onerror = reject(false);
        img.src = src;
    })
}
export async function imageToCanvas(src) {
    let canvas = document.createElement("canvas");
    let ctx = this.canvas.getContext("2d");
    return await imageToCanvasLoadImage(src, canvas, ctx)
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
export async function fetchHtml(url) {
    const response = await fetch(url);
    const text = await response.text();
    return text;
}
export async function getJson(url) {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    // console.warn(response);
    return await response.json();
}
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
async function loadCss(href) {
  try {
    const response = await fetch(href);
    if (response.ok) {
      const css = await response.text();
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = href;
      document.getElementsByTagName('head')[0].appendChild(link);
      return true;
    } else {
      throw new Error(`Failed to load ${href}: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function loadJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
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
export async function sleep(ms){
    return new Promise(resolve => setTimeout(() => resolve(true), ms));
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
export function cutStringTo(input, len) {
    return input.substring(0, len);
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
export function getFileExtension(str) {
    return str.slice((str.lastIndexOf(".") - 1 >>> 0) + 2);
    // return (str.match(/(?:.+..+[^\/]+$)/ig) != null) ? str.split('.').slice(-1) : 'null';
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

export function getStringBetween(source, start, end) {
    return source.split(start).pop().split(end).shift().trim();
}
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
export function getWordCount(str) {
    return str.split(/\S+/).length - 1;
}
export function inString(needle, haystack) {
    return haystack.indexOf(needle) !== -1;
}
export function isInString(find, source) {
    return source.indexOf(find) !== -1;
}
export function lTrimBy(str, by) {
    return str.substring(by, str.length);
}
export function rTrimBy(str, trimBy) {
    return (str.substring(0, str.length - trimBy));
}
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
export function removeFileFromPath(path) {
    //let pa = '/this/is/a/folder/aFile.txt';
    let r = /[^\/]*$/;
    path = path.replace(r, '');
    return path;
}
export function replaceAll(needle,replace,haystack){
    return haystack.split(needle).join(replace);
}
export function replaceDoubleBackSlash(str,rep){
    return str.replace(/\\\\/g, rep); // replaces all occurances of \\ with rep
}
export function replaceDoubleForwardSlash(str,rep){
    return str.replace(/\/\//g, rep); // replaces all occurances of // with rep
}
export function trimStringBy(str, trimBy) {
    return (str.substring(0, str.length - trimBy));
}
export function ucFirst(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}
import { Color } from "three";
export function hexToColor(hex) {
    hex = hex.replace("0x", "");
    hex = hex.replace("#", "");
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    // let result = hex.split("");
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    r = convert255(r);
    g = convert255(g);
    b = convert255(b);
    // return new Color(`"rgb(${r}, ${g}, ${b})"`);
    return new Color(r, g, b);
}
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

export const doesUrlKeyExist = (key) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.has(key);
  }
export function getRoute(url) {
    if (!url || url == null || url == undefined) {
        url = window.location.href;
    }
    return url.replace(/.*\/\/[^\/]*/, '')
}
export const getUrlKeyValue = (key) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const hasKey = urlParams.has(key);
    if (hasKey){
      return urlParams.get(key);
    } else {
      // console.warn(`doesUrlKeyExist(): Key: ${key} is not found...`);
      return undefined;
    }
  }
export function isEmail(email) {
    if (!email) {
        return false;
    }
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(trimmedEmail);
}

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
export function promiseVideoEnd(video) {
    return new Promise((resolve, reject) => {
        video.addEventListener('ended', (e) => {
            resolve(e);
        });
    });
}

