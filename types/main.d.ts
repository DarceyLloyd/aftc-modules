declare module "aftc-modules/src/animation/inertiaTo" {
    export function inertiaTo(current: any, target: any, amount: any): any;
}
declare module "aftc-modules/src/array/arrayClear" {
    export function arrayClear(arr: any): void;
}
declare module "aftc-modules/src/array/arrayContains" {
    export function arrayContains(needle: any, haystack: any): boolean;
}
declare module "aftc-modules/src/array/arrayEmpty" {
    export function arrayEmpty(arr: any): void;
}
declare module "aftc-modules/src/array/arrayGetMax" {
    export function arrayGetMax(arr: any): number;
}
declare module "aftc-modules/src/array/arrayGetMin" {
    export function arrayGetMin(arr: any): number;
}
declare module "aftc-modules/src/array/arrayRemoveIndex" {
    export function arrayRemoveIndex(arr: any, index: any): void;
}
declare module "aftc-modules/src/array/arrayRemoveValue" {
    export function arrayRemoveValue(arr: any, value: any): any;
}
declare module "aftc-modules/src/array/arrayShuffle" {
    export function arrayShuffle(arr: any): any;
}
declare module "aftc-modules/src/array/arrayShuffle2" {
    export function arrayShuffle2(a: any): any;
}
declare module "aftc-modules/src/array/isArrayInString" {
    export function isArrayInString(input: any, arr: any): any;
}
declare module "aftc-modules/src/array/isInArray" {
    export function isInArray(needle: any, haystack: any): boolean;
}
declare module "aftc-modules/src/array/isStringInArray" {
    export function isStringInArray(needle: any, haystack: any): boolean;
}
declare module "aftc-modules/src/browser/getBrowser" {
    export function getBrowser(): string;
}
declare module "aftc-modules/src/browser/getBrowserX" {
    export function getBrowserX(): number;
}
declare module "aftc-modules/src/browser/getBrowserY" {
    export function getBrowserY(): number;
}
declare module "aftc-modules/src/browser/isInViewport" {
    export function isInViewport(el: any): boolean;
}
declare module "aftc-modules/src/conversion/argsToObject" {
    export function argsToObject(src: any, dest: any, strict?: boolean): void;
}
declare module "aftc-modules/src/conversion/boolToInt" {
    export function boolToInt(bool: any): 1 | 0 | "error";
}
declare module "aftc-modules/src/conversion/boolToString" {
    export function boolToString(bool: any): "error" | "true" | "false";
}
declare module "aftc-modules/src/conversion/boolToYesNo" {
    export function boolToYesNo(b: any): "error" | "yes" | "no";
}
declare module "aftc-modules/src/conversion/degToRad" {
    export function degToRad(input: any): number;
}
declare module "aftc-modules/src/conversion/hexToRgb" {
    export function hexToRgb(hex: any): {
        r: number;
        g: number;
        b: number;
    } | null;
}
declare module "aftc-modules/src/conversion/numToHex" {
    export function numToHex(num: any): any;
}
declare module "aftc-modules/src/conversion/objectToObject" {
    export function objectToObject(src: any, dest: any, strict?: boolean): void;
}
declare module "aftc-modules/src/conversion/radToDeg" {
    export function radToDeg(input: any): number;
}
declare module "aftc-modules/src/conversion/rgbToHex" {
    export function rgbToHex(r: any, g: any, b: any): string;
}
declare module "aftc-modules/src/conversion/rgbToHex2" {
    export function rgbToHex2(r: any, g: any, b: any): string;
}
declare module "aftc-modules/src/conversion/rgbToHex3" {
    export function rgbToHex3(r: any, g: any, b: any): number;
}
declare module "aftc-modules/src/conversion/stringToBool" {
    export function stringToBool(str: any): boolean;
}
declare module "aftc-modules/src/cookies/getCookie" {
    export function getCookie(name: any): string | null;
}
declare module "aftc-modules/src/cookies/CookieManager" {
    export function CookieManager(): void;
}
declare module "aftc-modules/src/cookies/listCookies" {
    export function listCookies(): void;
}
declare module "aftc-modules/src/cookies/setCookie" {
    export function setCookie(name: any, value: any, mins: any): void;
}
declare module "aftc-modules/src/datetime/getDaysBetween" {
    export function getDaysBetween(startDateTime: any, endDateTime: any): number;
}
declare module "aftc-modules/src/datetime/getMySQLDateTimeString" {
    export function getMySQLDateTimeString(): string;
}
declare module "aftc-modules/src/datetime/getUKDate" {
    export function getUKDate(dte: any, separator?: string): string;
}
declare module "aftc-modules/src/datetime/getUKDateFromDbDateTime" {
    export function getUKDateFromDbDateTime(dte: any, separator?: string): string;
}
declare module "aftc-modules/src/datetime/getUKDateTime" {
    export function getUKDateTime(dte: any, separator?: string): string;
}
declare module "aftc-modules/src/datetime/getUKDateTimeFromDbDateTime" {
    export function getUKDateTimeFromDbDateTime(dte: any, separator?: string): string;
}
declare module "aftc-modules/src/datetime/getUSDate" {
    export function getUSDate(dte: any, separator?: string): string;
}
declare module "aftc-modules/src/debug/Logger" {
    export class Logger {
        enabled: boolean;
        enable(): void;
        disable(): void;
        enableAll(): void;
        enableGlobally(): void;
        disableAll(): void;
        disableGlobally(): void;
        log(arg: any): void;
        warn(arg: any): void;
        error(arg: any): void;
    }
}
declare module "aftc-modules/src/debug/appendTo" {
    export function appendTo(elementOrId: any, msg: any, endOfLine?: string): false | undefined;
}
declare module "aftc-modules/src/debug/attachDebug" {
    export function attachDebug(no: any, position: any, ele: any): HTMLDivElement;
}
declare module "aftc-modules/src/debug/debugTo" {
    export function debugTo(index: any, str: any): void;
}
declare module "aftc-modules/src/debug/log" {
    export function log(...args: any[]): void;
    export function logDisable(): void;
    export function logEnable(): void;
}
declare module "aftc-modules/src/debug/logTo" {
    export function logTo(elementOrId: any, msg: any, append?: boolean, endOfLine?: string): false | undefined;
}
declare module "aftc-modules/src/debug/warn" {
    export function warn(...args: any[]): void;
}
declare module "aftc-modules/src/detection/getDeviceType" {
    export function getDeviceType(): "desktop" | "tablet" | "mobile";
}
declare module "aftc-modules/src/detection/getOS" {
    export function getOS(): string | null;
}
declare module "aftc-modules/src/detection/isAndroid" {
    export function isAndroid(): boolean;
}
declare module "aftc-modules/src/detection/isChrome" {
    export function isChrome(): boolean;
}
declare module "aftc-modules/src/detection/isEdge" {
    export function isEdge(): boolean;
}
declare module "aftc-modules/src/detection/isFireFox" {
    export function isFireFox(): boolean;
}
declare module "aftc-modules/src/detection/isIOS" {
    export function isIOS(): boolean;
}
declare module "aftc-modules/src/detection/isMobile" {
    export function isMobile(): boolean;
}
declare module "aftc-modules/src/detection/isOpera" {
    export function isOpera(): boolean;
}
declare module "aftc-modules/src/detection/isSafari" {
    export function isSafari(): boolean;
}
declare module "aftc-modules/src/detection/isTouchDevice" {
    export function isTouchDevice(): any;
}
declare module "aftc-modules/src/dom/getElementOffsetTop" {
    export function getElementOffsetTop(ele: any): number | false;
}
declare module "aftc-modules/src/dom/getElementPosition" {
    export function getElementPosition(el: any): {
        top: any;
        left: any;
    };
    export function getElementPos(el: any): {
        left: number;
        top: number;
    };
}
declare module "aftc-modules/src/dom/hasClass" {
    export function hasClass(elementOrId: any, c: any): any;
}
declare module "aftc-modules/src/dom/isDom" {
    export function isDom(obj: any): boolean;
}
declare module "aftc-modules/src/dom/isElement" {
    export function isElement(ele: any): boolean;
}
declare module "aftc-modules/src/dom/isElement2" {
    export function isElement2(ele: any): boolean;
}
declare module "aftc-modules/src/dom/setHTML" {
    export function setHTML(elementOrId: any, str: any, mode?: string): void;
}
declare module "aftc-modules/src/events/onReady" {
    export function onReady(fn: any): void;
}
declare module "aftc-modules/src/form/limitNoOfWords" {
    export function limitNoOfWords(str: any, maxWords: any): {
        output: string;
        remaining: number;
    };
}
declare module "aftc-modules/src/form/setOptionSelectedIndex" {
    export function setOptionSelectedIndex(selectElement: any, selectedValue: any): void;
}
declare module "aftc-modules/src/image/imageToCanvas" {
    export function imageToCanvas(src: any): Promise<any>;
}
declare module "aftc-modules/src/io/ApiRequest" {
    export class ApiRequest {
        get(route: any): Promise<any>;
        post(route: any, data: any, onSuccess: any, onError: any): Promise<void>;
        patch(route: any, data: any, onSuccess: any, onError: any): Promise<void>;
    }
}
declare module "aftc-modules/src/io/XHR" {
    export class XHR {
        constructor(...args: any[]);
        args: {
            url: boolean;
            method: boolean;
            data: boolean;
            dataType: boolean;
            responseType: boolean;
            timeout: number;
            onComplete: boolean;
            onError: boolean;
            onProgress: boolean;
            onCancel: boolean;
            username: boolean;
            password: boolean;
        };
        url: boolean;
        urlParams: string;
        xhr: boolean;
        makeRequest(): void;
        errorHandler(e: any): void;
        progressHandler(e: any): void;
        onLoadHandler(e: any): void;
        getResponseHeader(name: any): any;
        getAllResponseHeaders(): any;
        getResponse(): any;
        removeEventListeners(): void;
    }
}
declare module "aftc-modules/src/io/fetchHtml" {
    export function fetchHtml(url: any): Promise<string>;
}
declare module "aftc-modules/src/io/fetchJson" {
    export function getJson(url: any): Promise<any>;
}
declare module "aftc-modules/src/io/loadAndAttachImage" {
    export function loadAndAttachImage(imgElement: any, src: any): Promise<any>;
}
declare module "aftc-modules/src/io/loadCss" {
    export function promiseLoadCss(href: string): Promise<boolean>;
}
declare module "aftc-modules/src/io/loadHTML" {
    export function loadHTML(url: string): Promise<string>;
}
declare module "aftc-modules/src/io/loadJson" {
    export function loadJson(url: string): Promise<any>;
}
declare module "aftc-modules/src/io/loadScript" {
    export function loadScript(src: any, onComplete: any, onProgress: any): void;
}
declare module "aftc-modules/src/io/promiseLoadCss" {
    export function promiseLoadCss(href: any): Promise<any>;
}
declare module "aftc-modules/src/io/promiseLoadImage" {
    export function promiseLoadImage(ele: any, src: any): Promise<any>;
}
declare module "aftc-modules/src/io/promiseLoadJson" {
    export function promiseLoadJson(url: any): Promise<any>;
}
declare module "aftc-modules/src/io/promiseLoadScript" {
    export function promiseLoadScript(src: any): Promise<any>;
}
declare module "aftc-modules/src/math/getRandomBoolean" {
    export function getRandomBoolean(): boolean;
}
declare module "aftc-modules/src/math/getRandomFloat" {
    export function getRandomFloat(min: any, max: any): any;
}
declare module "aftc-modules/src/math/getRandomInt" {
    export function getRandomInt(min: any, max: any): any;
}
declare module "aftc-modules/src/math/getRandomThatIsNot" {
    export function getRandomThatIsNot(min: any, max: any, not: any): any;
}
declare module "aftc-modules/src/math/getRange" {
    export function getRange(a: any, b: any): number;
}
declare module "aftc-modules/src/math/getWeightedRandom" {
    export function getWeightedRandom(odds: any, iterations: any): number;
}
declare module "aftc-modules/src/math/isEven" {
    export function isEven(n: any): boolean;
}
declare module "aftc-modules/src/math/isOdd" {
    export function isOdd(n: any): boolean;
}
declare module "aftc-modules/src/math/normaliseRange" {
    export function normaliseRange(min: any, max: any, v: any): number;
}
declare module "aftc-modules/src/math/parseArrayToFloat" {
    export function parseArrayToFloat(arr: any): any;
}
declare module "aftc-modules/src/math/parseArrayToInt" {
    export function parseArrayToInt(arr: any): any;
}
declare module "aftc-modules/src/math/roundTo" {
    export function roundTo(v: any, dec: any): number;
}
declare module "aftc-modules/src/misc/FPSMonitor" {
    export class FPSMonitor {
        constructor(ele: any);
        dom: {
            fps: boolean;
        };
        fpsStack: Float32Array;
        stackSize: number;
        index: number;
        last: number;
        now: number;
        delta: number;
        currentFrameFps: number;
        total: number;
        averageFps: number;
        i: number;
        update(): void;
        getFps(): number;
    }
}
declare module "aftc-modules/src/misc/getGUID" {
    export function getGUID(): string;
}
declare module "aftc-modules/src/misc/getUID" {
    export function getUID(len: any): string | undefined;
}
declare module "aftc-modules/src/misc/isAlphaNumeric" {
    export function isAlphaNumeric(v: any): boolean;
}
declare module "aftc-modules/src/misc/isArray" {
    export function isArray(input: any): boolean;
}
declare module "aftc-modules/src/misc/isBool" {
    export function isBool(input: any): boolean;
}
declare module "aftc-modules/src/misc/isBoolean" {
    export function isBoolean(input: any): boolean;
}
declare module "aftc-modules/src/misc/isNumber" {
    export function isNumber(n: any): boolean;
}
declare module "aftc-modules/src/misc/isNumeric" {
    export function isNumeric(n: any): boolean;
}
declare module "aftc-modules/src/misc/sleep" {
    export function sleep(ms: any): Promise<any>;
}
declare module "aftc-modules/src/mouse/MouseScrollHandler" {
    export class MouseScrollHandler {
        constructor(onScrollUp: any, onScrollDown: any);
        direction: boolean;
        onScrollUp: any;
        onScrollDown: any;
        scrollHandler(e: any): void;
    }
}
declare module "aftc-modules/src/object/getObjectEntryByKey" {
    export function getObjectPropByKey(obj: any, key: string): any;
}
declare module "aftc-modules/src/string/cutStringTo" {
    export function cutStringTo(input: any, len: any): any;
}
declare module "aftc-modules/src/string/escapeHTML" {
    export function escapeHTML(str: any): string | false;
}
declare module "aftc-modules/src/string/getAnchor" {
    export function getAnchor(url: any): any;
}
declare module "aftc-modules/src/string/getCleanJSONString" {
    export function getCleanJSONString(s: any): any;
}
declare module "aftc-modules/src/string/getFileExtension" {
    export function getFileExtension(str: any): any;
}
declare module "aftc-modules/src/string/getLastPartOfUrl" {
    export function getLastPartOfUrl(url: any): any;
}
declare module "aftc-modules/src/string/getRandomString" {
    export function getRandomString(len: any): string;
}
declare module "aftc-modules/src/string/getStringBetween" {
    export function getStringBetween(source: any, start: any, end: any): any;
}
declare module "aftc-modules/src/string/getStringBetween2" {
    export function getStringBetween2(str: any, start: any, end: any): boolean[];
}
declare module "aftc-modules/src/string/getWordCount" {
    export function getWordCount(str: any): number;
}
declare module "aftc-modules/src/string/inString" {
    export function inString(needle: any, haystack: any): boolean;
}
declare module "aftc-modules/src/string/isInString" {
    export function isInString(find: any, source: any): boolean;
}
declare module "aftc-modules/src/string/lTrimBy" {
    export function lTrimBy(str: any, by: any): any;
}
declare module "aftc-modules/src/string/rTrimBy" {
    export function rTrimBy(str: any, trimBy: any): any;
}
declare module "aftc-modules/src/string/regExReplaceAll" {
    export function regExReplaceAll(needle: any, rep: any, haystack: any): any;
}
declare module "aftc-modules/src/string/removeFileFromPath" {
    export function removeFileFromPath(path: any): any;
}
declare module "aftc-modules/src/string/replaceAll" {
    export function replaceAll(needle: any, replace: any, haystack: any): any;
}
declare module "aftc-modules/src/string/replaceDoubleBackSlash" {
    export function replaceDoubleBackSlash(str: any, rep: any): any;
}
declare module "aftc-modules/src/string/replaceDoubleForwardSlash" {
    export function replaceDoubleForwardSlash(str: any, rep: any): any;
}
declare module "aftc-modules/src/string/trimStringBy" {
    export function trimStringBy(str: any, trimBy: any): any;
}
declare module "aftc-modules/src/string/ucFirst" {
    export function ucFirst(s: any): string;
}
declare module "aftc-modules/src/touch/SwipeHandler" {
    export class SwipeHandler {
        constructor(...args: any[]);
        args: {
            onSwipeLeft: boolean;
            onSwipeRight: boolean;
            onSwipeUp: boolean;
            onSwipeDown: boolean;
            horizontalTolerance: number;
            verticalTolerance: number;
            swipeThrottleTimeout: number;
        };
        eventTimer: boolean;
        ready: boolean;
        touchStartX: number;
        touchEndX: number;
        touchStartY: number;
        touchEndY: number;
        currentX: number;
        currentY: number;
        direction: boolean;
        distX: number;
        distY: number;
        swipeDetected: boolean;
        swipeDirection: string;
        handleTouchStart(e: any): void;
        handleTouchMove(e: any): void;
        fireEvent(): void;
        clearTimer(): void;
        argsToObject(args: any, obj: any, strict?: boolean): void;
    }
}
declare module "aftc-modules/src/url/doesUrlKeyExist" {
    export const doesUrlKeyExist: (key: string) => boolean;
}
declare module "aftc-modules/src/url/getRoute" {
    export function getRoute(url: any): any;
}
declare module "aftc-modules/src/url/getUrlKeyValue" {
    export const getUrlKeyValue: (key: string) => string | null;
}
declare module "aftc-modules/src/validation/isEmail" {
    export function isEmail(email: string): boolean;
}
declare module "aftc-modules/src/video/promiseAttachVideo" {
    export function promiseAttachVideo(video: any, src: any): Promise<any>;
}
declare module "aftc-modules/src/video/promiseVideoEnd" {
    export function promiseVideoEnd(video: any): Promise<any>;
}
