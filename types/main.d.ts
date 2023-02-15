declare module "animation/inertiaTo" {
    export function inertiaTo(current: any, target: any, amount: any): any;
}
declare module "array/arrayClear" {
    export function arrayClear(arr: any): void;
}
declare module "array/arrayContains" {
    export function arrayContains(needle: any, haystack: any): boolean;
}
declare module "array/arrayEmpty" {
    export function arrayEmpty(arr: any): void;
}
declare module "array/arrayGetMax" {
    export function arrayGetMax(arr: any): number;
}
declare module "array/arrayGetMin" {
    export function arrayGetMin(arr: any): number;
}
declare module "array/arrayRemoveIndex" {
    export function arrayRemoveIndex(arr: any, index: any): void;
}
declare module "array/arrayRemoveValue" {
    export function arrayRemoveValue(arr: any, value: any): any;
}
declare module "array/arrayShuffle" {
    export function arrayShuffle(arr: any): any;
}
declare module "array/arrayShuffle2" {
    export function arrayShuffle2(a: any): any;
}
declare module "array/isArrayInString" {
    export function isArrayInString(input: any, arr: any): any;
}
declare module "array/isInArray" {
    export function isInArray(needle: any, haystack: any): boolean;
}
declare module "array/isStringInArray" {
    export function isStringInArray(needle: any, haystack: any): boolean;
}
declare module "browser/getBrowser" {
    export function getBrowser(): string;
}
declare module "browser/getBrowserX" {
    export function getBrowserX(): number;
}
declare module "browser/getBrowserY" {
    export function getBrowserY(): number;
}
declare module "browser/isInViewport" {
    export function isInViewport(el: any): boolean;
}
declare module "conversion/argsToObject" {
    export function argsToObject(src: any, dest: any, strict?: boolean): void;
}
declare module "conversion/boolToInt" {
    export function boolToInt(bool: any): 1 | 0 | "error";
}
declare module "conversion/boolToString" {
    export function boolToString(bool: any): "error" | "true" | "false";
}
declare module "conversion/boolToYesNo" {
    export function boolToYesNo(b: any): "error" | "yes" | "no";
}
declare module "conversion/degToRad" {
    export function degToRad(input: any): number;
}
declare module "conversion/hexToRgb" {
    export function hexToRgb(hex: any): {
        r: number;
        g: number;
        b: number;
    } | null;
}
declare module "conversion/numToHex" {
    export function numToHex(num: any): any;
}
declare module "conversion/objectToObject" {
    export function objectToObject(src: any, dest: any, strict?: boolean): void;
}
declare module "conversion/radToDeg" {
    export function radToDeg(input: any): number;
}
declare module "conversion/rgbToHex" {
    export function rgbToHex(r: any, g: any, b: any): string;
}
declare module "conversion/rgbToHex2" {
    export function rgbToHex2(r: any, g: any, b: any): string;
}
declare module "conversion/rgbToHex3" {
    export function rgbToHex3(r: any, g: any, b: any): number;
}
declare module "conversion/stringToBool" {
    export function stringToBool(str: any): boolean;
}
declare module "cookies/getCookie" {
    export function getCookie(name: any): string | null;
}
declare module "cookies/listCookies" {
    export function listCookies(): void;
}
declare module "cookies/setCookie" {
    export function setCookie(name: any, value: any, mins: any): void;
}
declare module "datetime/getDaysBetween" {
    export function getDaysBetween(startDateTime: any, endDateTime: any): number;
}
declare module "datetime/getMySQLDateTimeString" {
    export function getMySQLDateTimeString(): string;
}
declare module "datetime/getUKDate" {
    export function getUKDate(dte: any, separator?: string): string;
}
declare module "datetime/getUKDateFromDbDateTime" {
    export function getUKDateFromDbDateTime(dte: any, separator?: string): string;
}
declare module "datetime/getUKDateTime" {
    export function getUKDateTime(dte: any, separator?: string): string;
}
declare module "datetime/getUKDateTimeFromDbDateTime" {
    export function getUKDateTimeFromDbDateTime(dte: any, separator?: string): string;
}
declare module "datetime/getUSDate" {
    export function getUSDate(dte: any, separator?: string): string;
}
declare module "debug/Logger" {
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
declare module "debug/appendTo" {
    export function appendTo(elementOrId: any, msg: any, endOfLine?: string): false | undefined;
}
declare module "debug/attachDebug" {
    export function attachDebug(no: any, position: any, ele: any): HTMLDivElement;
}
declare module "debug/debugTo" {
    export function debugTo(index: any, str: any): void;
}
declare module "debug/log" {
    export function log(...args: any[]): void;
    export function logDisable(): void;
    export function logEnable(): void;
}
declare module "debug/logTo" {
    export function logTo(elementOrId: any, msg: any, append?: boolean, endOfLine?: string): false | undefined;
}
declare module "debug/warn" {
    export function warn(...args: any[]): void;
}
declare module "detection/getDeviceType" {
    export function getDeviceType(): "desktop" | "tablet" | "mobile";
}
declare module "detection/getOS" {
    export function getOS(): string | null;
}
declare module "detection/isAndroid" {
    export function isAndroid(): boolean;
}
declare module "detection/isChrome" {
    export function isChrome(): boolean;
}
declare module "detection/isEdge" {
    export function isEdge(): boolean;
}
declare module "detection/isFireFox" {
    export function isFireFox(): boolean;
}
declare module "detection/isIOS" {
    export function isIOS(): boolean;
}
declare module "detection/isMobile" {
    export function isMobile(): boolean;
}
declare module "detection/isOpera" {
    export function isOpera(): boolean;
}
declare module "detection/isSafari" {
    export function isSafari(): boolean;
}
declare module "detection/isTouchDevice" {
    export function isTouchDevice(): any;
}
declare module "dom/getElementOffsetTop" {
    export function getElementOffsetTop(ele: any): number | false;
}
declare module "dom/getElementPosition" {
    export function getElementPosition(el: any): {
        top: any;
        left: any;
    };
    export function getElementPos(el: any): {
        left: number;
        top: number;
    };
}
declare module "dom/hasClass" {
    export function hasClass(elementOrId: any, c: any): any;
}
declare module "dom/isDom" {
    export function isDom(obj: any): boolean;
}
declare module "dom/isElement" {
    export function isElement(ele: any): boolean;
}
declare module "dom/isElement2" {
    export function isElement2(ele: any): boolean;
}
declare module "dom/setHTML" {
    export function setHTML(elementOrId: any, str: any, mode?: string): void;
}
declare module "events/onReady" {
    export function onReady(fn: any): void;
}
declare module "form/limitNoOfWords" {
    export function limitNoOfWords(str: any, maxWords: any): {
        output: string;
        remaining: number;
    };
}
declare module "form/setOptionSelectedIndex" {
    export function setOptionSelectedIndex(selectElement: any, selectedValue: any): void;
}
declare module "image/imageToCanvas" {
    export function imageToCanvas(src: any): Promise<any>;
}
declare module "io/ApiRequest" {
    export class ApiRequest {
        get(route: any): Promise<any>;
        post(route: any, data: any, onSuccess: any, onError: any): Promise<void>;
        patch(route: any, data: any, onSuccess: any, onError: any): Promise<void>;
    }
}
declare module "io/XHR" {
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
declare module "io/fetchHtml" {
    export function fetchHtml(url: any): Promise<string>;
}
declare module "io/fetchJson" {
    export function getJson(url: any): Promise<any>;
}
declare module "io/loadAndAttachImage" {
    export function loadAndAttachImage(imgElement: any, src: any): Promise<any>;
}
declare module "io/loadCss" {
    export function promiseLoadCss(href: string): Promise<boolean>;
}
declare module "io/loadHTML" {
    export function loadHTML(url: string): Promise<string>;
}
declare module "io/loadJson" {
    export function loadJson(url: string): Promise<any>;
}
declare module "io/loadScript" {
    export function loadScript(src: any, onComplete: any, onProgress: any): void;
}
declare module "io/promiseLoadCss" {
    export function promiseLoadCss(href: any): Promise<any>;
}
declare module "io/promiseLoadImage" {
    export function promiseLoadImage(ele: any, src: any): Promise<any>;
}
declare module "io/promiseLoadJson" {
    export function promiseLoadJson(url: any): Promise<any>;
}
declare module "io/promiseLoadScript" {
    export function promiseLoadScript(src: any): Promise<any>;
}
declare module "math/getRandomBoolean" {
    export function getRandomBoolean(): boolean;
}
declare module "math/getRandomFloat" {
    export function getRandomFloat(min: any, max: any): any;
}
declare module "math/getRandomInt" {
    export function getRandomInt(min: any, max: any): any;
}
declare module "math/getRandomThatIsNot" {
    export function getRandomThatIsNot(min: any, max: any, not: any): any;
}
declare module "math/getRange" {
    export function getRange(a: any, b: any): number;
}
declare module "math/getWeightedRandom" {
    export function getWeightedRandom(odds: any, iterations: any): number;
}
declare module "math/isEven" {
    export function isEven(n: any): boolean;
}
declare module "math/isOdd" {
    export function isOdd(n: any): boolean;
}
declare module "math/normaliseRange" {
    export function normaliseRange(min: any, max: any, v: any): number;
}
declare module "math/parseArrayToFloat" {
    export function parseArrayToFloat(arr: any): any;
}
declare module "math/parseArrayToInt" {
    export function parseArrayToInt(arr: any): any;
}
declare module "math/roundTo" {
    export function roundTo(v: any, dec: any): number;
}
declare module "misc/FPSMonitor" {
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
declare module "misc/getGUID" {
    export function getGUID(): string;
}
declare module "misc/getUID" {
    export function getUID(len: any): string | undefined;
}
declare module "misc/isAlphaNumeric" {
    export function isAlphaNumeric(v: any): boolean;
}
declare module "misc/isArray" {
    export function isArray(input: any): boolean;
}
declare module "misc/isBool" {
    export function isBool(input: any): boolean;
}
declare module "misc/isBoolean" {
    export function isBoolean(input: any): boolean;
}
declare module "misc/isNumber" {
    export function isNumber(n: any): boolean;
}
declare module "misc/isNumeric" {
    export function isNumeric(n: any): boolean;
}
declare module "misc/sleep" {
    export function sleep(ms: any): Promise<any>;
}
declare module "mouse/MouseScrollHandler" {
    export class MouseScrollHandler {
        constructor(onScrollUp: any, onScrollDown: any);
        direction: boolean;
        onScrollUp: any;
        onScrollDown: any;
        scrollHandler(e: any): void;
    }
}
declare module "object/getObjectEntryByKey" {
    export function getObjectPropByKey(obj: any, key: string): any;
}
declare module "string/cutStringTo" {
    export function cutStringTo(input: any, len: any): any;
}
declare module "string/escapeHTML" {
    export function escapeHTML(str: any): string | false;
}
declare module "string/getAnchor" {
    export function getAnchor(url: any): any;
}
declare module "string/getCleanJSONString" {
    export function getCleanJSONString(s: any): any;
}
declare module "string/getFileExtension" {
    export function getFileExtension(str: any): any;
}
declare module "string/getLastPartOfUrl" {
    export function getLastPartOfUrl(url: any): any;
}
declare module "string/getRandomString" {
    export function getRandomString(len: any): string;
}
declare module "string/getStringBetween" {
    export function getStringBetween(source: any, start: any, end: any): any;
}
declare module "string/getStringBetween2" {
    export function getStringBetween2(str: any, start: any, end: any): boolean[];
}
declare module "string/getWordCount" {
    export function getWordCount(str: any): number;
}
declare module "string/inString" {
    export function inString(needle: any, haystack: any): boolean;
}
declare module "string/isInString" {
    export function isInString(find: any, source: any): boolean;
}
declare module "string/lTrimBy" {
    export function lTrimBy(str: any, by: any): any;
}
declare module "string/rTrimBy" {
    export function rTrimBy(str: any, trimBy: any): any;
}
declare module "string/regExReplaceAll" {
    export function regExReplaceAll(needle: any, rep: any, haystack: any): any;
}
declare module "string/removeFileFromPath" {
    export function removeFileFromPath(path: any): any;
}
declare module "string/replaceAll" {
    export function replaceAll(needle: any, replace: any, haystack: any): any;
}
declare module "string/replaceDoubleBackSlash" {
    export function replaceDoubleBackSlash(str: any, rep: any): any;
}
declare module "string/replaceDoubleForwardSlash" {
    export function replaceDoubleForwardSlash(str: any, rep: any): any;
}
declare module "string/trimStringBy" {
    export function trimStringBy(str: any, trimBy: any): any;
}
declare module "string/ucFirst" {
    export function ucFirst(s: any): string;
}
declare module "touch/SwipeHandler" {
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
declare module "url/doesUrlKeyExist" {
    export const doesUrlKeyExist: (key: string) => boolean;
}
declare module "url/getRoute" {
    export function getRoute(url: any): any;
}
declare module "url/getUrlKeyValue" {
    export const getUrlKeyValue: (key: string) => string | null;
}
declare module "validation/isEmail" {
    export function isEmail(email: string): boolean;
}
declare module "video/promiseAttachVideo" {
    export function promiseAttachVideo(video: any, src: any): Promise<any>;
}
declare module "video/promiseVideoEnd" {
    export function promiseVideoEnd(video: any): Promise<any>;
}
