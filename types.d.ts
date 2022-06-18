declare module "src/animation/inertiaTo" {
    export function inertiaTo(current: any, target: any, amount: any): any;
}
declare module "src/array/arrayClear" {
    export function arrayClear(arr: any): void;
}
declare module "src/array/arrayContains" {
    export function arrayContains(needle: any, haystack: any): boolean;
}
declare module "src/array/arrayEmpty" {
    export function arrayEmpty(arr: any): void;
}
declare module "src/array/arrayGetMax" {
    export function arrayGetMax(arr: any): any;
}
declare module "src/array/arrayGetMin" {
    export function arrayGetMin(arr: any): any;
}
declare module "src/array/arrayRemoveIndex" {
    export function arrayRemoveIndex(arr: any, index: any): void;
}
declare module "src/array/arrayRemoveValue" {
    export function arrayRemoveValue(arr: any, value: any): any;
}
declare module "src/array/arrayShuffle" {
    export function arrayShuffle(arr: any): any;
}
declare module "src/array/arrayShuffle2" {
    export function arrayShuffle2(a: any): any;
}
declare module "src/array/isArrayInString" {
    export function isArrayInString(input: any, arr: any): any;
}
declare module "src/array/isInArray" {
    export function isInArray(needle: any, haystack: any): boolean;
}
declare module "src/array/isStringInArray" {
    export function isStringInArray(needle: any, haystack: any): boolean;
}
declare module "src/browser/getBrowser" {
    export function getBrowser(): string;
}
declare module "src/browser/getBrowserX" {
    export function getBrowserX(): number;
}
declare module "src/browser/getBrowserY" {
    export function getBrowserY(): number;
}
declare module "src/browser/isInViewport" {
    export function isInViewport(el: any): boolean;
}
declare module "src/conversion/argsToObject" {
    export function argsToObject(src: any, dest: any, strict?: boolean): void;
}
declare module "src/conversion/boolToInt" {
    export function boolToInt(bool: any): "error" | 1 | 0;
}
declare module "src/conversion/boolToString" {
    export function boolToString(bool: any): "error" | "true" | "false";
}
declare module "src/conversion/boolToYesNo" {
    export function boolToYesNo(b: any): "error" | "yes" | "no";
}
declare module "src/conversion/degToRad" {
    export function degToRad(input: any): number;
}
declare module "src/conversion/hexToRgb" {
    export function hexToRgb(hex: any): {
        r: number;
        g: number;
        b: number;
    };
}
declare module "src/conversion/numToHex" {
    export function numToHex(num: any): any;
}
declare module "src/conversion/objectToObject" {
    export function objectToObject(src: any, dest: any, strict?: boolean): void;
}
declare module "src/conversion/radToDeg" {
    export function radToDeg(input: any): number;
}
declare module "src/conversion/rgbToHex" {
    export function rgbToHex(r: any, g: any, b: any): string;
}
declare module "src/conversion/rgbToHex2" {
    export function rgbToHex2(r: any, g: any, b: any): string;
}
declare module "src/conversion/stringToBool" {
    export function stringToBool(str: any): boolean;
}
declare module "src/cookies/getCookie" {
    export function getCookie(name: any): string;
}
declare module "src/cookies/setCookie" {
    export function setCookie(cname: any, cvalue: any, exdays: any): void;
}
declare module "src/datetime/getDaysBetween" {
    export function getDaysBetween(startDateTime: any, endDateTime: any): number;
}
declare module "src/datetime/getMySQLDateTimeString" {
    export function getMySQLDateTimeString(): string;
}
declare module "src/datetime/getUKDate" {
    export function getUKDate(dte: any, separator?: string): string;
}
declare module "src/datetime/getUKDateFromDbDateTime" {
    export function getUKDateFromDbDateTime(dte: any, separator?: string): string;
}
declare module "src/datetime/getUKDateTime" {
    export function getUKDateTime(dte: any, separator?: string): string;
}
declare module "src/datetime/getUKDateTimeFromDbDateTime" {
    export function getUKDateTimeFromDbDateTime(dte: any, separator?: string): string;
}
declare module "src/datetime/getUSDate" {
    export function getUSDate(dte: any, separator?: string): string;
}
declare module "src/debug/AttachLazyLogging" {
    export default function AttachLazyLogging(): void;
}
declare module "src/debug/Logger" {
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
declare module "src/debug/appendTo" {
    export function appendTo(elementOrId: any, msg: any, endOfLine?: string): boolean;
}
declare module "src/debug/attachDebug" {
    export function attachDebug(no: any, position: any, ele: any): HTMLDivElement;
}
declare module "src/debug/debugTo" {
    export function debugTo(index: any, str: any): void;
}
declare module "src/debug/log" {
    export function log(...args: any[]): void;
    export function logDisable(): void;
    export function logEnable(): void;
}
declare module "src/debug/logTo" {
    export function logTo(elementOrId: any, msg: any, append?: boolean, endOfLine?: string): boolean;
}
declare module "src/detection/getOS" {
    export function getOS(): string;
}
declare module "src/detection/isAndroid" {
    export function isAndroid(): boolean;
}
declare module "src/detection/isChrome" {
    export function isChrome(): boolean;
}
declare module "src/detection/isEdge" {
    export function isEdge(): boolean;
}
declare module "src/detection/isFireFox" {
    export function isFireFox(): boolean;
}
declare module "src/detection/isIOS" {
    export function isIOS(): boolean;
}
declare module "src/detection/isMobile" {
    export function isMobile(): boolean;
}
declare module "src/detection/isOpera" {
    export function isOpera(): boolean;
}
declare module "src/detection/isSafari" {
    export function isSafari(): boolean;
}
declare module "src/dom/getElementPosition" {
    export function getElementPosition(el: any): {
        top: any;
        left: any;
    };
    export function getElementPos(el: any): {
        left: number;
        top: number;
    };
}
declare module "src/dom/isDom" {
    export function isDom(obj: any): boolean;
}
declare module "src/dom/isElement" {
    export function isElement(ele: any): boolean;
}
declare module "src/dom/isElement2" {
    export function isElement2(ele: any): boolean;
}
declare module "src/element/getElementOffsetTop" {
    export function getElementOffsetTop(ele: any): number | false;
}
declare module "src/element/hasClass" {
    export function hasClass(elementOrId: any, c: any): any;
}
declare module "src/element/setHTML" {
    export function setHTML(elementOrId: any, str: any, mode?: string): string;
}
declare module "src/events/onReady" {
    export function onReady(fn: any): void;
}
declare module "src/form/limitNoOfWords" {
    export function limitNoOfWords(str: any, maxWords: any): {
        output: string;
        remaining: number;
    };
}
declare module "src/form/setOptionSelectedIndex" {
    export function setOptionSelectedIndex(selectElement: any, selectedValue: any): void;
}
declare module "src/image/imageToCanvas" {
    export function imageToCanvas(src: any): Promise<any>;
}
declare module "src/io/ApiRequest" {
    export class ApiRequest {
        get(route: any): Promise<any>;
        post(route: any, data: any, onSuccess: any, onError: any): Promise<void>;
        patch(route: any, data: any, onSuccess: any, onError: any): Promise<void>;
    }
}
declare module "src/io/XHR" {
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
declare module "src/io/fetchHtml" {
    export function fetchHtml(url: any): Promise<string>;
}
declare module "src/io/fetchJson" {
    export function fetchJson(url: any): Promise<any>;
}
declare module "src/io/loadAndAttachImage" {
    export function loadAndAttachImage(imgElement: any, src: any): any;
}
declare module "src/io/loadCss" {
    export function loadCss(href: any, onComplete: any): void;
}
declare module "src/io/loadJson" {
    export function loadJson(url: any, onComplete: any, onError: any): void;
}
declare module "src/io/loadScript" {
    export function loadScript(src: any, onComplete: any, onProgress: any): void;
}
declare module "src/io/promiseLoadCss" {
    export function promiseLoadCss(href: any): any;
}
declare module "src/io/promiseLoadImage" {
    export function promiseLoadImage(ele: any, src: any): any;
}
declare module "src/io/promiseLoadJson" {
    export function promiseLoadJson(url: any): any;
}
declare module "src/io/promiseLoadScript" {
    export function promiseLoadScript(src: any): any;
}
declare module "src/math/getRandomBoolean" {
    export function getRandomBoolean(): boolean;
}
declare module "src/math/getRandomFloat" {
    export function getRandomFloat(min: any, max: any): any;
}
declare module "src/math/getRandomInt" {
    export function getRandomInt(min: any, max: any): any;
}
declare module "src/math/getRandomThatIsNot" {
    export function getRandomThatIsNot(min: any, max: any, not: any): any;
}
declare module "src/math/getRange" {
    export function getRange(a: any, b: any): number;
}
declare module "src/math/getWeightedRandom" {
    export function getWeightedRandom(odds: any, iterations: any): number;
}
declare module "src/math/isEven" {
    export function isEven(n: any): boolean;
}
declare module "src/math/isOdd" {
    export function isOdd(n: any): boolean;
}
declare module "src/math/normaliseRange" {
    export function normaliseRange(min: any, max: any, v: any): number;
}
declare module "src/math/parseArrayToFloat" {
    export function parseArrayToFloat(arr: any): any;
}
declare module "src/math/parseArrayToInt" {
    export function parseArrayToInt(arr: any): any;
}
declare module "src/math/roundTo" {
    export function roundTo(v: any, dec: any): number;
}
declare module "src/misc/FPSMonitor" {
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
declare module "src/misc/getGUID" {
    export function getGUID(): string;
}
declare module "src/misc/getUID" {
    export function getUID(len: any): string;
}
declare module "src/misc/isAlphaNumeric" {
    export function isAlphaNumeric(v: any): boolean;
}
declare module "src/misc/isArray" {
    export function isArray(input: any): boolean;
}
declare module "src/misc/isBool" {
    export function isBool(input: any): boolean;
}
declare module "src/misc/isBoolean" {
    export function isBoolean(input: any): boolean;
}
declare module "src/misc/isNumber" {
    export function isNumber(n: any): boolean;
}
declare module "src/misc/isNumeric" {
    export function isNumeric(n: any): boolean;
}
declare module "src/misc/sleep" {
    export function sleep(ms: any): Promise<any>;
}
declare module "src/mouse/MouseScrollHandler" {
    export class MouseScrollHandler {
        constructor(onScrollUp: any, onScrollDown: any);
        direction: boolean;
        onScrollUp: any;
        onScrollDown: any;
        scrollHandler(e: any): void;
    }
}
declare module "src/string/cutStringTo" {
    export function cutStringTo(input: any, len: any): any;
}
declare module "src/string/escapeHTML" {
    export function escapeHTML(str: any): string | false;
}
declare module "src/string/getAnchor" {
    export function getAnchor(url: any): any;
}
declare module "src/string/getCleanJSONString" {
    export function getCleanJSONString(s: any): any;
}
declare module "src/string/getFileExtension" {
    export function getFileExtension(str: any): any;
}
declare module "src/string/getLastPartOfUrl" {
    export function getLastPartOfUrl(url: any): any;
}
declare module "src/string/getRandomString" {
    export function getRandomString(len: any): string;
}
declare module "src/string/getStringBetween" {
    export function getStringBetween(source: any, start: any, end: any): any;
}
declare module "src/string/getStringBetween2" {
    export function getStringBetween2(str: any, start: any, end: any): boolean[];
}
declare module "src/string/getWordCount" {
    export function getWordCount(str: any): number;
}
declare module "src/string/inString" {
    export function inString(needle: any, haystack: any): boolean;
}
declare module "src/string/isInString" {
    export function isInString(find: any, source: any): boolean;
}
declare module "src/string/lTrimBy" {
    export function lTrimBy(str: any, by: any): any;
}
declare module "src/string/rTrimBy" {
    export function rTrimBy(str: any, trimBy: any): any;
}
declare module "src/string/regExReplaceAll" {
    export function regExReplaceAll(needle: any, rep: any, haystack: any): any;
}
declare module "src/string/removeFileFromPath" {
    export function removeFileFromPath(path: any): any;
}
declare module "src/string/replaceAll" {
    export function replaceAll(needle: any, replace: any, haystack: any): any;
}
declare module "src/string/replaceDoubleBackSlash" {
    export function replaceDoubleBackSlash(str: any, rep: any): any;
}
declare module "src/string/replaceDoubleForwardSlash" {
    export function replaceDoubleForwardSlash(str: any, rep: any): any;
}
declare module "src/string/trimStringBy" {
    export function trimStringBy(str: any, trimBy: any): any;
}
declare module "src/string/ucFirst" {
    export function ucFirst(s: any): string;
}
declare module "src/touch/SwipeHandler" {
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
declare module "src/validation/isEmail" {
    export function isEmail(email: any): boolean;
}
declare module "src/video/promiseAttachVideo" {
    export function promiseAttachVideo(video: any, src: any): any;
}
declare module "src/video/promiseVideoEnd" {
    export function promiseVideoEnd(video: any): any;
}
