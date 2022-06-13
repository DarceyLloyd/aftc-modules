import { AFTCPreloader } from "aftc-modules/src/io/AFTCPreloader.js";
import { AnimationFrameStack } from "aftc-modules/src/aftc/AnimationFrameStack.js";
import { appendTo } from "aftc-modules/src/debug/appendTo.js";
import { argsToObject } from "aftc-modules/src/conversion/argsToObject.js";
import { arrayClear } from "aftc-modules/src/array/arrayClear.js";
import { arrayContains } from "aftc-modules/src/array/arrayContains.js";
import { arrayEmpty } from "aftc-modules/src/array/arrayEmpty.js";
import { arrayGetMax } from "aftc-modules/src/array/arrayGetMax.js";
import { arrayGetMin } from "aftc-modules/src/array/arrayGetMin.js";
import { arrayRemoveIndex } from "aftc-modules/src/array/arrayRemoveIndex.js";
import { arrayRemoveValue } from "aftc-modules/src/array/arrayRemoveValue.js";
import { arrayShuffle } from "aftc-modules/src/array/arrayShuffle.js";
import { arrayShuffle2 } from "aftc-modules/src/array/arrayShuffle2.js";
import { attachDebug } from "aftc-modules/src/debug/attachDebug.js";
import { boolToInt } from "aftc-modules/src/conversion/boolToInt.js";
import { boolToString } from "aftc-modules/src/conversion/boolToString.js";
import { boolToYesNo } from "aftc-modules/src/conversion/boolToYesNo.js";
import { cutStringTo } from "aftc-modules/src/string/cutStringTo.js";
import { debugTo } from "aftc-modules/src/debug/debugTo.js";
import { Logger } from "aftc-modules/src/debug/Logger.js";
import { degToRad } from "aftc-modules/src/conversion/degToRad.js";
import { escapeHTML } from "aftc-modules/src/string/escapeHTML.js";
import { FPSMonitor } from "aftc-modules/src/misc/FPSMonitor.js";
import { getAnchor } from "aftc-modules/src/string/getAnchor.js";
import { getBrowser } from "aftc-modules/src/browser/getBrowser.js";
import { getBrowserX } from "aftc-modules/src/browser/getBrowserX.js";
import { getBrowserY } from "aftc-modules/src/browser/getBrowserY.js";
import { getCleanJSONString } from "aftc-modules/src/string/getCleanJSONString.js";
import { getCookie } from "aftc-modules/src/cookies/getCookie.js";
import { getDaysBetween } from "aftc-modules/src/datetime/getDaysBetween.js";
import { getElementOffsetTop } from "aftc-modules/src/element/getElementOffsetTop.js";
import { getElementPosition } from "aftc-modules/src/dom/getElementPosition.js";
import { getFileExtension } from "aftc-modules/src/string/getFileExtension.js";
import { getGUID } from "aftc-modules/src/misc/getGUID.js";
import { getLastPartOfUrl } from "aftc-modules/src/string/getLastPartOfUrl.js";
import { getMySQLDateTimeString } from "aftc-modules/src/datetime/getMySQLDateTimeString.js";
import { getOS } from "aftc-modules/src/detection/getOS.js";
import { getRandomBoolean } from "aftc-modules/src/math/getRandomBoolean.js";
import { getRandomFloat } from "aftc-modules/src/math/getRandomFloat.js";
import { getRandomInt } from "aftc-modules/src/math/getRandomInt.js";
import { getRandomString } from "aftc-modules/src/string/getRandomString.js";
import { getRandomThatIsNot } from "aftc-modules/src/math/getRandomThatIsNot.js"; // TODO JSODOC
import { getRange } from "aftc-modules/src/math/getRange.js";
import { getStringBetween } from "aftc-modules/src/string/getStringBetween.js";
import { getStringBetween2 } from "aftc-modules/src/string/getStringBetween2.js";
import { getUID } from "aftc-modules/src/misc/getUID.js";
import { getUKDate } from "aftc-modules/src/datetime/getUKDate.js";
import { getUKDateTime } from "aftc-modules/src/datetime/getUKDateTime.js";
import { getUKDateFromDbDateTime } from "aftc-modules/src/datetime/getUKDateFromDbDateTime.js";
import { getUKDateTimeFromDbDateTime } from "aftc-modules/src/datetime/getUKDateTimeFromDbDateTime.js";
import { getUSDate } from "aftc-modules/src/datetime/getUSDate.js";
import { getWeightedRandom } from "aftc-modules/src/math/getWeightedRandom.js";
import { getWordCount } from "aftc-modules/src/string/getWordCount.js";
import { limitNoOfWords } from "aftc-modules/src/form/limitNoOfWords.js";
import { hasClass } from "aftc-modules/src/element/hasClass.js";
import { hexToRgb } from "aftc-modules/src/conversion/hexToRgb.js";
import { inertiaTo } from "aftc-modules/src/animation/inertiaTo.js";
import { inString } from "aftc-modules/src/string/inString.js";
import { isAlphaNumeric } from "aftc-modules/src/misc/isAlphaNumeric.js";
import { isAndroid } from "aftc-modules/src/detection/isAndroid.js";
import { isArray } from "aftc-modules/src/misc/isArray.js";
import { isBool } from "aftc-modules/src/misc/isBool.js";
import { isBoolean } from "aftc-modules/src/misc/isBoolean.js";
import { isChrome } from "aftc-modules/src/detection/isChrome.js";
import { isDom } from "aftc-modules/src/dom/isDom.js";
import { isEdge } from "aftc-modules/src/detection/isEdge.js";
import { isElement } from "aftc-modules/src/dom/isElement.js";
import { isElement2 } from "aftc-modules/src/dom/isElement2.js";
import { isEmail } from "aftc-modules/src/validation/isEmail.js";
import { isEven } from "aftc-modules/src/math/isEven.js";
import { isFireFox } from "aftc-modules/src/detection/isFireFox.js";
import { isInArray } from "aftc-modules/src/array/isInArray.js";
import { isInString } from "aftc-modules/src/string/isInString.js";
import { isInViewport } from "aftc-modules/src/browser/isInViewport.js";
import { isIOS } from "aftc-modules/src/detection/isIOS.js";
import { isMobile } from "aftc-modules/src/detection/isMobile.js";
import { isNumber } from "aftc-modules/src/misc/isNumber.js";
import { isNumeric } from "aftc-modules/src/misc/isNumeric.js";
import { isOdd } from "aftc-modules/src/math/isOdd.js";
import { isOpera } from "aftc-modules/src/detection/isOpera.js";
import { isSafari } from "aftc-modules/src/detection/isSafari.js";
import { isStringInArray } from "aftc-modules/src/array/isStringInArray.js";
import { ApiRequest } from "aftc-modules/src/io/ApiRequest.js";
import { loadAndAttachImage } from "aftc-modules/src/io/loadAndAttachImage.js";
import { loadCss } from "aftc-modules/src/io/loadCss.js";
import { loadJson } from "aftc-modules/src/io/loadJson.js";
import { loadScript } from "aftc-modules/src/io/loadScript.js";
import { log } from "aftc-modules/src/debug/log.js";
import { logTo } from "aftc-modules/src/debug/logTo.js";
import { lTrimBy } from "aftc-modules/src/string/lTrimBy.js";
import { MouseScrollHandler } from "aftc-modules/src/mouse/MouseScrollHandler.js";
import { normaliseRange } from "aftc-modules/src/math/normaliseRange.js";
import { numToHex } from "aftc-modules/src/conversion/numToHex.js";
import { objectToObject } from "aftc-modules/src/conversion/objectToObject.js";
import { onReady } from "aftc-modules/src/events/onReady.js";
import { parseArrayToFloat } from "aftc-modules/src/math/parseArrayToFloat.js";
import { parseArrayToInt } from "aftc-modules/src/math/parseArrayToInt.js";
import { promiseAttachVideo } from "aftc-modules/src/video/promiseAttachVideo.js";
import { promiseLoadCss } from "aftc-modules/src/io/promiseLoadCss.js";
import { promiseLoadImage } from "aftc-modules/src/io/promiseLoadImage.js";
import { promiseLoadJson } from "aftc-modules/src/io/promiseLoadJson.js";
import { promiseLoadScript } from "aftc-modules/src/io/promiseLoadScript.js";
import { promiseVideoEnd } from "aftc-modules/src/video/promiseVideoEnd.js";
import { radToDeg } from "aftc-modules/src/conversion/radToDeg.js";
import { regExReplaceAll } from "aftc-modules/src/string/regExReplaceAll.js";
import { removeFileFromPath } from "aftc-modules/src/string/removeFileFromPath.js";
import { replaceAll } from "aftc-modules/src/string/replaceAll.js";
import { replaceDoubleBackSlash } from "aftc-modules/src/string/replaceDoubleBackSlash.js";
import { replaceDoubleForwardSlash } from "aftc-modules/src/string/replaceDoubleForwardSlash.js";
import { rgbToHex } from "aftc-modules/src/conversion/rgbToHex.js";
import { rgbToHex2 } from "aftc-modules/src/conversion/rgbToHex2.js";
import { roundTo } from "aftc-modules/src/math/roundTo.js";
import { rTrimBy } from "aftc-modules/src/string/rTrimBy.js";
import { setCookie } from "aftc-modules/src/cookies/setCookie.js";
import { setHTML } from "aftc-modules/src/element/setHTML.js";
import { stringToBool } from "aftc-modules/src/conversion/stringToBool.js";
import { SwipeHandler } from "aftc-modules/src/touch/SwipeHandler.js";
import { trimStringBy } from "aftc-modules/src/string/trimStringBy.js";
import { ucFirst } from "aftc-modules/src/string/ucFirst.js";
import { XHR } from "aftc-modules/src/io/XHR.js";


export {
    AFTCPreloader,
    AnimationFrameStack,
    appendTo,
    argsToObject,
    arrayClear,
    arrayContains,
    arrayEmpty,
    arrayGetMax,
    arrayGetMin,
    arrayRemoveIndex,
    arrayRemoveValue,
    arrayShuffle,
    arrayShuffle2,
    attachDebug,
    boolToInt,
    boolToString,
    boolToYesNo,
    cutStringTo,
    debugTo,
    Logger,
    degToRad,
    escapeHTML,
    FPSMonitor,
    getAnchor,
    getBrowser,
    getBrowserX,
    getBrowserY,
    getCleanJSONString,
    getCookie,
    getDaysBetween,
    getElementOffsetTop,
    getElementPosition,
    getFileExtension,
    getGUID,
    getLastPartOfUrl,
    getMySQLDateTimeString,
    getOS,
    getRandomBoolean,
    getRandomFloat,
    getRandomInt,
    getRandomString,
    getRandomThatIsNot,
    getRange,
    getStringBetween,
    getStringBetween2,
    getUID,
    getUKDate,
    getUKDateTime,
    getUKDateFromDbDateTime,
    getUKDateTimeFromDbDateTime,
    getUSDate,
    getWeightedRandom,
    getWordCount,
    limitNoOfWords,
    hasClass,
    hexToRgb,
    inertiaTo,
    inString,
    isAlphaNumeric,
    isAndroid,
    isArray,
    isBool,
    isBoolean,
    isChrome,
    isDom,
    isEdge,
    isElement,
    isElement2,
    isEmail,
    isEven,
    isFireFox,
    isInArray,
    isInString,
    isInViewport,
    isIOS,
    isMobile,
    isNumber,
    isNumeric,
    isOdd,
    isOpera,
    isSafari,
    isStringInArray,
    ApiRequest,
    loadAndAttachImage,
    loadCss,
    loadJson,
    loadScript,
    log,
    logTo,
    lTrimBy,
    MouseScrollHandler,
    normaliseRange,
    numToHex,
    objectToObject,
    onReady,
    parseArrayToFloat,
    parseArrayToInt,
    promiseAttachVideo,
    promiseLoadCss,
    promiseLoadImage,
    promiseLoadJson,
    promiseLoadScript,
    promiseVideoEnd,
    radToDeg,
    regExReplaceAll,
    removeFileFromPath,
    replaceAll,
    replaceDoubleBackSlash,
    replaceDoubleForwardSlash,
    rgbToHex,
    rgbToHex2,
    roundTo,
    rTrimBy,
    setCookie,
    setHTML,
    stringToBool,
    SwipeHandler,
    trimStringBy,
    ucFirst,
    XHR
}