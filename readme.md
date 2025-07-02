
# AFTC-MODULES v1.17.15
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## A collection of useful everyday utilities / functions for JavaScript & TypeScript.

### Find AFTC-MODULES useful? Please Donate...
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

---

## Latest changes
- Added VirtualDebug
- Various bug fixes and documentation generation bug fix
- removed `AttachKeysToVec3()` // TypeScript only
- removed `VisualDebug()` // TypeScript only (use `attachDebug` for JS projects)
- Optimised various functions and clean up
- Added `hexToColor` (THREE.Color)
- Added `doesUrlKeyExist(string)`
- Added `getUrlKeyValue(string)`
- Added `rgbToHex3`
- Added `convert255(124)`
- Updated `fetchJson(string)`
- Added `getDeviceType()`

---

### Want the ES5 (old) version?
You're looking for aftc.js. Visit: https://github.com/DarceyLloyd/AFTC.js

---

### Installation
```sh
npm i aftc-modules
```

---

## Available Methods & Classes:

- `inertiaTo(current, target, amount)`
- `arrayClear(arr)`
- `arrayContains(needle, haystack)`
- `arrayEmpty(arr)`
- `arrayGetMax(arr)`
- `arrayGetMin(arr)`
- `arrayRemoveIndex(arr, index)`
- `arrayRemoveValue(arr, value)`
- `arrayShuffle(arr)`
- `arrayShuffle2(arr)`
- `isArrayInString(input, arr)`
- `isInArray(needle, haystack)`
- `isStringInArray(needle, haystack)`
- `getBrowser()`
- `getBrowserX()`
- `getBrowserY()`
- `isInViewport(el)`
- `argsToObject({object}, {object}, strict)`
- `boolToInt(bool)`
- `boolToString(bool)`
- `boolToYesNo(bool)`
- `degToRad(input)`
- `hexToRgb(hex)`
- `numToHex(num)`
- `objectToObject({object}, {object}, strict)`
- `radToDeg(input)`
- `rgbToHex(r, g, b)`
- `rgbToHex2(r, g, b)`
- `rgbToHex3(r, g, b)`
- `stringToBool(str)`
- `getCookie(name)`
- `listCookies()`
- `setCookie(name, cvalue, exdays)`
- `getDaysBetween(startDateTime, endDateTime)`
- `getMySQLDateTimeString()`
- `getUKDate(dte, separator)`
- `getUKDateFromDbDateTime(dbDateString, separator)`
- `getUKDateTime(dte, separator)`
- `getUkDateTimeFromDbDateTime(dte, separator)`
- `getUSDate(dte, separator)`
- `appendTo(elementOrId, msg, endOfLine)`
- `attachDebug(no, position, ele)`
- `debugTo(index, str)`
- `log(arg)`
- `logDisable()`
- `logEnable()`
- `Logger()`
- `logTo(elementOrId, msg, append, endOfLine)`
- `warn(arg)`
- `getDeviceType()`
- `getOS()`
- `isAndroid()`
- `isChrome()`
- `isEdge()`
- `isFireFox()`
- `isIOS()`
- `isMobile()`
- `isSafari()`
- `isTouchDevice()`
- `getElementPos(ele)`
- `getElementPosition(el)`
- `getElementPos(el)`
- `hasClass(elementOrId, ele)`
- `isDOM(obj)`
- `isElement(ele)`
- `isElement2(ele)`
- `setHTML(elementOrId, str, mode)`
- `onReady(fn)`
- `wordCountFilter(str, maxWords)`
- `setOptionSelectedIndex(selectElement, selectedValue)`
- `imageToCanvas(url)`
- `fetchHtml(url)`
- `fetchJson(url)`
- `loadAndAttachImage(imgElement, src)`
- `loadScript(src, onComplete, onProgress)`
- `promiseLoadCss(href)`
- `promiseLoadImage(ele, src)`
- `promiseLoadJson(url)`
- `promiseLoadScript(src)`
- `getRandomBoolean()`
- `getRandomFloat(min, max)`
- `getRandomInt(min, max)`
- `getRange(value1, value2)`
- `isEven(n)`
- `isOdd(n)`
- `normaliseRange(min, max, v)`
- `parseArrayToFloat(arr)`
- `parseArrayToInt(arr)`
- `roundTo(v, dec)`
- `getGUID()`
- `getUID(len)`
- `isAlphaNumeric(v)`
- `isArray(input)`
- `isBool(input)`
- `isBoolean(input)`
- `isNumber(n)`
- `isNumeric(n)`
- `MouseScrollHandler(onScrollUp, onScrollDown)`
- `getObjectPropByKey({object}, key)`
- `cutStringTo(str, len)`
- `escapeHTML(str)`
- `getAnchor(url)`
- `getCleanJSONString(s)`
- `getFileExtension(str)`
- `getLastPartOfUrl(url)`
- `getRandomString(len)`
- `getStringBetween(source, start, end)`
- `getStringBetween2(source, start, end)`
- `getWordCount(str)`
- `inString(needle, haystack)`
- `isInString(needle, haystack)`
- `lTrimBy(str, by)`
- `regExReplaceAll(needle, rep, haystack)`
- `removeFileFromPath(path)`
- `replaceAll(needle, replace, haystack)`
- `replaceDoubleBackSlash(str, rep)`
- `replaceDoubleForwardSlash(str, rep)`
- `rTrimBy(str, trimBy)`
- `trimStringBy(str, trimBy)`
- `ucFirst(s)`
- `SwipeHandler({object})`
- `getRoute(url)`
- `promiseAttachVideo(video, src)`
- `promiseVideoEnd(video)`

---

# Documentation

## `inertiaTo(current, target, amount)`
### Information
Calculates the target value of inertia in a loop/requestAnimationFrame from one value to another at speed.

### Parameters
- **current**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Current value.
- **target**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Value to reach.
- **amount**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Inertia speed (dec/inc speed).

### Returns
- **Type:** `Number`

### Example
```javascript
let newX = inertiaTo(curX, targetX, 0.5);
```

---

## `arrayClear(arr)`
### Information
Clears an array.

### Parameters
- **arr**
    - **Type:** `array`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The array you want to clear / empty.

### Example
```javascript
arrayClear(myArray);
```

---

## `arrayContains(needle, haystack)`
### Information
Finds a needle in a haystack.

### Parameters
- **needle**
    - **Type:** `string`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** What you are looking for.
- **haystack**
    - **Type:** `array`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The array you want to search.

---

## `arrayEmpty(arr)`
### Information
Clears an array.

### Parameters
- **arr**
    - **Type:** `array`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The array you want to clear / empty.

### Example
```javascript
arrayEmpty(myArray);
```

---

## `arrayGetMax(arr)`
### Information
Gets the maximum value from the supplied array.

### Parameters
- **arr**
    - **Type:** `array`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The array you want to get the maximum value from.

### Returns
- **Type:** `Number`

### Example
```javascript
let max = arrayGetMax(myArray);
```

---

## `arrayGetMin(arr)`
### Information
Gets the minimum value from the supplied array.

### Parameters
- **arr**
    - **Type:** `array`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The array you want to get the minimum value from.

### Returns
- **Type:** `Number`

### Example
```javascript
let min = arrayGetMin(myArray);
```

---

## `arrayRemoveIndex(arr, index)`
### Information
Removes an index from the supplied array.

### Parameters
- **arr**
    - **Type:** `array`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The array you want to remove the index from.
- **index**
    - **Type:** `number`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The index which you want to remove.

### Returns
- **Type:** `Array`

### Example
```javascript
let newArray = arrayRemoveIndex(arr, index);
```

---

## `arrayRemoveValue(arr, value)`
### Information
Removes a value from the supplied array.

### Parameters
- **arr**
    - **Type:** `array`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The array you want to remove the value from.
- **value**
    - **Type:** `string` || `number`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The value which you want to remove from the array.

### Returns
- **Type:** `Array`

### Example
```javascript
let newArray = arrayRemoveValue(arr, value);
```

---

## `arrayShuffle(arr)`
### Information
Shuffles / Randomizes an array.

### Parameters
- **arr**
    - **Type:** `array`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The array you want to shuffle.

### Returns
- **Type:** `Array`

### Example
```javascript
let shuffledArray = arrayShuffle(myArray);
```

---

## `arrayShuffle2(arr)`
### Information
Shuffles / Randomizes an array (method 2).

### Parameters
- **arr**
    - **Type:** `array`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The array you want to shuffle.

### Returns
- **Type:** `Array`

### Example
```javascript
let shuffledArray = arrayShuffle2(myArray);
```

---

## `isArrayInString(input, arr)`
### Information
Searches if any string from an array is present in an input string.

### Parameters
- **input**
    - **Type:** `string`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** String you want to look for matches in.
- **arr**
    - **Type:** `array`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The array of strings you want to search for in the input string.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let found = isArrayInString("hello world", ["world", "foo"]); // true
```

---

## `isInArray(needle, haystack)`
### Information
Searches an array for a value.

### Parameters
- **needle**
    - **Type:** `*`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** What you are looking for.
- **haystack**
    - **Type:** `array`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The array you want to search.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let found = isInArray(needle, haystack);
```

---

## `isStringInArray(needle, haystack)`
### Information
Searches an array for a string.

### Parameters
- **needle**
    - **Type:** `string`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** String you are looking for.
- **haystack**
    - **Type:** `array`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The array you want to search.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let found = isStringInArray(needle, haystack);
```

---

## `getBrowser()`
### Information
Gets the name of the browser you are using (opera | chrome | safari | firefox | msie | trident | edge).

### Returns
- **Type:** `String`

### Example
```javascript
let browser = getBrowser();
```

---

## `getBrowserX()`
### Information
Gets the viewport width.

### Returns
- **Type:** `Number`

### Example
```javascript
let x = getBrowserX();
```

---

## `getBrowserY()`
### Information
Gets the viewport height.

### Returns
- **Type:** `Number`

### Example
```javascript
let y = getBrowserY();
```

---

## `isInViewport(el)`
### Information
Checks whether an element is in the viewport.

### Parameters
- **el**
    - **Type:** `Element`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The element you want to check.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let isInView = isInViewport(myElement);
```

---

## `argsToObject({object}, {object}, strict)`
### Information
Parses arguments to a destination object with strict or relaxed assigning features. Good for handling default options in functions or classes.

### Parameters
- **src**
    - **Type:** `Object`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The source object (e.g., `arguments[0]`).
- **dest**
    - **Type:** `Object`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The destination object to assign properties to.
- **strict**
    - **Type:** `Boolean`
    - **Required:** `false`
    - **Default:** `true`
    - **Info:** If `true`, warns about properties in `src` that don't exist in `dest`.

### Returns
- **Type:** `Object` (the modified destination object)

### Example
```javascript
/* Class based example */
class MyApp {
    constructor() {
        this.appArgs = { a: 0, b: 0 };
        argsToObject(arguments[0], this.appArgs, true);
    }
}

/*
 * Instantiation of your class.
 * NOTE: 'c' will trigger a warning if strict mode is enabled,
 * as it's not a defined property in this.appArgs.
 */
new MyApp({ a: 1, b: 3, c: 4 });
```

---

## `boolToInt(bool)`
### Information
Converts a boolean to an integer (1 or 0).

### Parameters
- **bool**
    - **Type:** `Boolean`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The boolean you wish to convert.

### Returns
- **Type:** `Number`

### Example
```javascript
let intValue = boolToInt(true); // 1
```

---

## `boolToString(bool)`
### Information
Converts a boolean to a string ('true' or 'false').

### Parameters
- **bool**
    - **Type:** `Boolean`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The boolean you wish to convert.

### Returns
- **Type:** `String`

### Example
```javascript
let strBool = boolToString(false); // 'false'
```

---

## `boolToYesNo(bool)`
### Information
Converts a boolean to a string ('yes' or 'no').

### Parameters
- **bool**
    - **Type:** `Boolean`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The boolean you wish to convert.

### Returns
- **Type:** `String`

### Example
```javascript
let answer = boolToYesNo(true); // 'yes'
```

---

## `degToRad(input)`
### Information
Converts degrees to radians.

### Parameters
- **input**
    - **Type:** `Number`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The degree value to convert.

### Returns
- **Type:** `Number`

### Example
```javascript
let radians = degToRad(180);
```

---

## `hexToRgb(hex)`
### Information
Converts a hex color string to an RGB object.

### Parameters
- **hex**
    - **Type:** `String`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** Hex color string (e.g., '#FFCC00').

### Returns
- **Object** or `null` if invalid.
    - **r**: `Number`
    - **g**: `Number`
    - **b**: `Number`

### Example
```javascript
let rgb = hexToRgb('#FFCC00'); // { r: 255, g: 204, b: 0 }
```

---

## `numToHex(num)`
### Information
Converts a number to a hexadecimal string.

### Parameters
- **num**
    - **Type:** `Number`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The number you want to convert.

### Returns
- **Type:** `String`

### Example
```javascript
let hex = numToHex(255); // 'ff'
```

---

## `objectToObject({object}, {object}, strict)`
### Information
Parses properties from a source object to a destination object with strict or relaxed assigning features.

### Parameters
- **src**
    - **Type:** `Object`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The source object.
- **dest**
    - **Type:** `Object`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The destination object.
- **strict**
    - **Type:** `Boolean`
    - **Required:** `false`
    - **Default:** `true`
    - **Info:** If `true`, warns about properties in `src` that don't exist in `dest`.

### Returns
- **Type:** `Object` (the modified destination object)

### Example
```javascript
/* Class based example */
class MyClass {
    constructor(options) {
        this.config = { a: 0, b: 0 };
        objectToObject(options, this.config, true);
    }
}

/*
 * Instantiation of your class.
 * NOTE: 'c' will trigger a warning if strict mode is enabled.
 */
new MyClass({ a: 1, b: 3, c: 4 });
```

---

## `radToDeg(input)`
### Information
Converts radians to degrees.

### Parameters
- **input**
    - **Type:** `Number`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The radian value to convert.

### Returns
- **Type:** `Number`

### Example
```javascript
let degrees = radToDeg(Math.PI); // 180
```

---

## `rgbToHex(r, g, b)`
### Information
Converts RGB values to a hex color string.

### Parameters
- **r**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Red value (0-255).
- **g**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Green value (0-255).
- **b**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Blue value (0-255).

### Returns
- **Type:** `String`

### Example
```javascript
let hex = rgbToHex(255, 100, 55); // '#ff6437'
```

---

## `rgbToHex2(r, g, b)`
### Information
Converts RGB values to a hex color string (Method 2).

### Parameters
- **r**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Red value (0-255).
- **g**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Green value (0-255).
- **b**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Blue value (0-255).

### Returns
- **Type:** `String`

### Example
```javascript
let hex = rgbToHex2(255, 100, 55);
```

---

## `rgbToHex3(r, g, b)`
### Information
Converts RGB values to a hex color string (Method 3).

### Parameters
- **r**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Red value (0-255).
- **g**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Green value (0-255).
- **b**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Blue value (0-255).

### Returns
- **Type:** `String`

### Example
```javascript
let hex = rgbToHex3(255, 100, 55);
```

---

## `stringToBool(str)`
### Information
Converts a string to a boolean. Recognizes 'true', 'yes', 'y', '1' as `true`.

### Parameters
- **str**
    - **Type:** `String`
    - **Required:** `true`
    - **Default:** `null`
    - **Info:** The string value you want to convert.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let answer1 = stringToBool('yes');   // true
let answer2 = stringToBool('y');     // true
let answer3 = stringToBool('1');     // true
let answer4 = stringToBool('no');    // false
let answer5 = stringToBool('n');     // false
let answer6 = stringToBool('0');     // false
```

---

## `getCookie(name)`
### Information
Fetches a cookie by name.

### Parameters
- **name**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The name of the cookie to retrieve.

### Returns
- **Type:** `String` (the cookie value, or an empty string if not found).

### Example
```javascript
let email = getCookie('email');
```

---

## `listCookies()`
### Information
Lists all available cookies as an object.

### Example
```javascript
console.log(listCookies());
```

---

## `setCookie(name, cvalue, exdays)`
### Information
Sets a cookie.

### Parameters
- **name**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The name of the cookie.
- **cvalue**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The value to store in the cookie.
- **exdays**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The number of days until the cookie expires.

### Example
```javascript
let name = 'email';
let value = 'darcey.lloyd@gmail.com';
let lifeInDays = 30;
setCookie(name, value, lifeInDays);
```

---

## `getDaysBetween(startDateTime, endDateTime)`
### Information
Gets the number of days between two dates.

### Parameters
- **startDateTime**
    - **Type:** `Date`
    - **Required:** `true`
    - **Info:** The start date.
- **endDateTime**
    - **Type:** `Date`
    - **Required:** `true`
    - **Info:** The end date.

### Returns
- **Type:** `Number`

### Example
```javascript
/* NOTE: Month is indexed at 0 */
let startDateTime = new Date(2020, 2, 26); // March 26, 2020
let endDateTime = new Date(2020, 3, 26); // April 26, 2020
let days = getDaysBetween(startDateTime, endDateTime);
```

---

## `getMySQLDateTimeString()`
### Information
Gets the current date and time as a MySQL-compatible DATETIME string.

### Returns
- **Type:** `String`

### Example
```javascript
let dte = getMySQLDateTimeString(); // e.g., '2023-10-27 10:30:00'
```

---

## `getUKDate(dte, separator)`
### Information
Gets a UK-formatted date string (DD-MM-YYYY) from a supplied date.

### Parameters
- **dte**
    - **Type:** `Date` || `String`
    - **Required:** `true`
    - **Info:** The date object or string.
- **separator**
    - **Type:** `String`
    - **Required:** `false`
    - **Default:** `-`
    - **Info:** The separator for date parts.

### Returns
- **Type:** `String`

### Example
```javascript
let ukDate = getUKDate(new Date(), '/'); // e.g., '27/10/2023'
```

---

## `getUKDateFromDbDateTime(dbDateString, separator)`
### Information
Gets a UK-formatted date string from a database datetime string.

### Parameters
- **dbDateString**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** A datetime string from a database (e.g., 'YYYY-MM-DD HH:MM:SS').
- **separator**
    - **Type:** `String`
    - **Required:** `false`
    - **Default:** `-`
    - **Info:** The separator for date parts.

### Returns
- **Type:** `String`

### Example
```javascript
let ukDate = getUKDateFromDbDateTime('2023-10-27 10:30:00'); // '27-10-2023'
```

---

## `getUKDateTime(dte, separator)`
### Information
Gets a UK-formatted date and time string from a supplied date.

### Parameters
- **dte**
    - **Type:** `Date` || `String`
    - **Required:** `true`
    - **Info:** The date object or string.
- **separator**
    - **Type:** `String`
    - **Required:** `false`
    - **Default:** `-`
    - **Info:** The separator for date parts.

### Returns
- **Type:** `String`

### Example
```javascript
let ukDateTime = getUKDateTime(new Date(), '/'); // e.g., '27/10/2023 10:30:00'
```

---

## `getUkDateTimeFromDbDateTime(dte, separator)`
### Information
Gets a UK-formatted date and time string from a database datetime string.

### Parameters
- **dte**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** A datetime string from a database.
- **separator**
    - **Type:** `String`
    - **Required:** `false`
    - **Default:** `-`
    - **Info:** The separator for date parts.

### Returns
- **Type:** `String`

### Example
```javascript
let ukDateTime = getUkDateTimeFromDbDateTime('2023-10-27 10:30:00'); // '27-10-2023 10:30:00'
```

---

## `getUSDate(dte, separator)`
### Information
Gets a US-formatted date string (MM-DD-YYYY) from a supplied date.

### Parameters
- **dte**
    - **Type:** `Date`
    - **Required:** `true`
    - **Info:** The date object.
- **separator**
    - **Type:** `String`
    - **Required:** `false`
    - **Default:** `-`
    - **Info:** The separator for date parts.

### Returns
- **Type:** `String`

### Example
```javascript
let usDate = getUSDate(new Date(), '/'); // e.g., '10/27/2023'
```

---

## `appendTo(elementOrId, msg, endOfLine)`
### Information
Appends a string to an element, with or without a `<br>` tag.

### Parameters
- **elementOrId**
    - **Type:** `Element` || `String`
    - **Required:** `true`
    - **Info:** The element or its ID.
- **msg**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to append.
- **endOfLine**
    - **Type:** `String`
    - **Required:** `false`
    - **Default:** `<br>`
    - **Info:** The string to append after the message. Set to `''` for no line break.

### Example
```javascript
appendTo('my-div', 'Hello World', '');
```

---

## `attachDebug(no, position, ele)`
### Information
Displays an on-screen debug panel to watch variables in real-time. Excellent for debugging animations, key events, etc. Click a row to copy its value. Use with `debugTo`.

### Parameters
- **no**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The number of debug rows to create.
- **position**
    - **Type:** `String` ('tl', 'top left', 'tr', 'top right', 'bl', 'btm left', 'br', 'btm right')
    - **Required:** `false`
    - **Default:** `'top left'`
    - **Info:** Position of the debug panel.
- **ele**
    - **Type:** `Element`
    - **Required:** `false`
    - **Default:** `document.body`
    - **Info:** The element to which the debug panel will be appended.

### Example
```javascript
attachDebug(3);
debugTo(0, 'hello world 1');
debugTo(1, 'hello world 2');
debugTo(2, 'hello world 3');
```

---

## `debugTo(index, str)`
### Information
Writes a string to a specific row in the on-screen debug panel.

### Parameters
- **index**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The debug row index (0-based) to write to.
- **str**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to display.

### Example
```javascript
// Assumes attachDebug(3) has been called
function onAnimate() {
    let x = getPositionX();
    debugTo(0, `Position X: ${x}`);
    requestAnimationFrame(onAnimate);
}
```

---

## `log(arg)`
### Information
A shortcut for `console.log`.

### Parameters
- **arg**
    - **Type:** `*`
    - **Required:** `true`
    - **Info:** The argument to pass to `console.log`.

### Example
```javascript
log('Once you use me, you will never stop using me');
let a = 4;
log('a = ' + a);
log(`a = ${a}`);
```

---

## `logDisable()`
### Information
Disables `log()` globally. Useful for keeping log statements in code without outputting to the console in production.

### Example
```javascript
log('You will see this in console');
logDisable();
log('You wont see this in console');
```

---

## `logEnable()`
### Information
Enables `log()` globally if it has been disabled.

### Example
```javascript
log('You will see this in console');
logDisable();
log('You wont see this in console');
logEnable();
log('You will see this in console');
```

---

## `Logger()`
### Information
A class-based logger that can be enabled/disabled on a per-instance or global basis.

### Methods
- `log(message)`
- `warn(message)`
- `error(message)`
- `enable()`
- `disable()`
- `enableAll()`
- `disableAll()`

### Example
```javascript
class MyComponent {
    constructor() {
        this.logger = new Logger();
        this.logger.log('This will not show by default.');

        this.logger.enable();
        this.logger.log('Hello from MyComponent!');
        this.logger.warn('This is a warning.');
    }
}
```

---

## `logTo(elementOrId, msg, append, endOfLine)`
### Information
Sets or appends a string to an element's content.

### Parameters
- **elementOrId**
    - **Type:** `Element` || `String`
    - **Required:** `true`
    - **Info:** The element or its ID.
- **msg**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to display.
- **append**
    - **Type:** `Boolean`
    - **Required:** `false`
    - **Default:** `false`
    - **Info:** If `true`, appends the message. If `false`, overwrites existing content.
- **endOfLine**
    - **Type:** `String`
    - **Required:** `false`
    - **Default:** `''`
    - **Info:** String to add after the message, e.g., `<br>`.

### Example
```javascript
// Overwrite content
logTo('my-div', 'First line.');
// Append content with a line break
logTo('my-div', 'Second line.', true, '<br>');
```

---

## `warn(arg)`
### Information
A shortcut for `console.warn`.

### Parameters
- **arg**
    - **Type:** `*`
    - **Required:** `true`
    - **Info:** The argument to pass to `console.warn`.

### Example
```javascript
warn('This is an important warning.');
```

---

## `getDeviceType()`
### Information
Returns the device type: 'mobile', 'tablet', or 'desktop'.

### Returns
- **Type:** `String`

### Example
```javascript
let deviceType = getDeviceType();
```

---

## `getOS()`
### Information
Gets the operating system.

### Returns
- **Type:** `String` ('Mac OS', 'iOS', 'Windows', 'Android', 'Linux', or 'Unknown')

### Example
```javascript
let os = getOS();
```

---

## `isAndroid()`
### Information
Detects if the OS is Android.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let test = isAndroid();
```

---

## `isChrome()`
### Information
Detects if the browser is Chrome.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let test = isChrome();
```

---

## `isEdge()`
### Information
Detects if the browser is Edge.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let test = isEdge();
```

---

## `isFireFox()`
### Information
Detects if the browser is Firefox.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let test = isFireFox();
```

---

## `isIOS()`
### Information
Detects if the OS is iOS.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let test = isIOS();
```

---

## `isMobile()`
### Information
Detects if the device is a mobile phone (based on user agent).

### Returns
- **Type:** `Boolean`

### Example
```javascript
let mobile = isMobile();
```

---

## `isSafari()`
### Information
Detects if the browser is Safari.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let test = isSafari();
```

---

## `isTouchDevice()`
### Information
Returns a boolean indicating if the device is touch-enabled.

### Returns
- **Type:** `Boolean`

### Example
```javascript
const isTouch = isTouchDevice();
```

---

## `getElementPos(el)`
### Information
Gets an element's position relative to the document.

### Parameters
- **el**
    - **Type:** `Element`
    - **Required:** `true`
    - **Info:** The element to get the position of.

### Returns
- **Object**
    - **left**: `Number` (x position)
    - **top**: `Number` (y position)

### Example
```javascript
let pos = getElementPos(myElement);
console.log(pos.left, pos.top);
```

---

## `getElementPosition(el)`
### Information
Gets an element's position. (Alias for `getElementPos`)

### Parameters
- **el**
    - **Type:** `Element`
    - **Required:** `true`
    - **Info:** The element to get the position of.

### Returns
- **Object** with `left` and `top` properties.

### Example
```javascript
let pos = getElementPosition(myElement);
```

---

## `hasClass(elementOrId, className)`
### Information
Checks if an element has a specific CSS class.

### Parameters
- **elementOrId**
    - **Type:** `Element` || `String`
    - **Required:** `true`
    - **Info:** The element or its ID.
- **className**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The class name to check for.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let classAttached = hasClass('my-div', 'selected');
```

---

## `isDOM(obj)`
### Information
Checks if an object is an HTMLElement.

### Parameters
- **obj**
    - **Type:** `Element` || `Object`
    - **Required:** `true`
    - **Info:** The object to check.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let result = isDOM(myElement);
```

---

## `isElement(ele)`
### Information
Checks if an object is an HTMLElement.

### Parameters
- **ele**
    - **Type:** `Element` || `Object`
    - **Required:** `true`
    - **Info:** The object to check.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let result = isElement(myElement);
```

---

## `isElement2(ele)`
### Information
Checks if an object is an HTMLElement (Method 2).

### Parameters
- **ele**
    - **Type:** `Element` || `Object`
    - **Required:** `true`
    - **Info:** The object to check.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let result = isElement2(myElement);
```

---

## `setHTML(elementOrId, str, mode)`
### Information
Sets an element's HTML content.

### Parameters
- **elementOrId**
    - **Type:** `Element` || `String`
    - **Required:** `true`
    - **Info:** The element or its ID.
- **str**
    - **Type:** `String` || `Number`
    - **Required:** `true`
    - **Info:** The content to put into the element.
- **mode**
    - **Type:** `String` ('set' | 'append' | 'prepend')
    - **Required:** `false`
    - **Default:** `'set'`
    - **Info:** The method for setting the HTML.

### Example
```javascript
setHTML('my-element-id', 'hello world'); // Overwrites
setHTML(myElement, '... and goodbye', 'append'); // Appends
```

---

## `onReady(fn)`
### Information
Executes a function when the DOM is fully loaded and ready.

### Parameters
- **fn**
    - **Type:** `Function`
    - **Required:** `true`
    - **Info:** The function to execute.

### Example
```javascript
onReady(() => {
	/* DOM is ready, do your thing */
});
```

---

## `wordCountFilter(str, maxWords)`
### Information
Truncates a string to a maximum number of words.

### Parameters
- **str**
    - **Type:** `String`
    - **Required:** `true`
- **maxWords**
    - **Type:** `Number`
    - **Required:** `true`

### Returns
- **Type:** `String`

### Example
```javascript
let source = "This is a very long sentence that needs to be shortened.";
let limitedSentence = wordCountFilter(source, 5); // "This is a very long..."
```

---

## `setOptionSelectedIndex(selectElement, selectedValue)`
### Information
Sets the selected option of an HTML `<select>` element by its value.

### Parameters
- **selectElement**
    - **Type:** `HTMLSelectElement`
    - **Required:** `true`
- **selectedValue**
    - **Type:** `String`
    - **Required:** `true`

### Example
```javascript
const mySelect = document.getElementById('my-select');
setOptionSelectedIndex(mySelect, 'option-value-2');
```

---

## `imageToCanvas(url)`
### Information
Loads an image and draws it onto a new canvas of matching dimensions.

### Parameters
- **url**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** Path/URL to the image.

### Returns
- **Type:** `Promise<HTMLCanvasElement>`

### Example
```javascript
async function processImage() {
    try {
        let canvas = await imageToCanvas('./assets/photo.webp');
        document.body.appendChild(canvas);
    } catch (e) {
        console.error("Failed to load image to canvas:", e);
    }
}
```

---

## `fetchHtml(url)`
### Information
Fetches an HTML file and returns its content as a string.

### Parameters
- **url**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** Path/URL to the file.

### Returns
- **Type:** `Promise<String>`

### Example
```javascript
let data = await fetchHtml('./pages/modal-user-content.html');
```

---

## `fetchJson(url)`
### Information
Fetches a JSON file and returns it as a parsed object.

### Parameters
- **url**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** Path/URL to the file.

### Returns
- **Type:** `Promise<Object>`

### Example
```javascript
let data = await fetchJson('./data/config.json');
```

---

## `loadAndAttachImage(imgElement, src)`
### Information
Loads an image into an `<img>` element.

### Parameters
- **imgElement**
    - **Type:** `HTMLImageElement`
    - **Required:** `true`
    - **Info:** The `<img>` element to load the image into.
- **src**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** Path/URL to the image file.

### Returns
- **Type:** `Promise<void>`

### Example
```javascript
const imgElement1 = document.getElementById('my-image');
loadAndAttachImage(imgElement1, './assets/images/products/001.jpg')
    .then(() => { console.log('Image loaded and attached'); })
    .catch((e) => { console.error(e); });
```

---

## `loadScript(src, onComplete, onProgress)`
### Information
Loads a JavaScript file and attaches it to the document's `<head>`.

### Parameters
- **src**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** Path/URL to the JS file.
- **onComplete**
    - **Type:** `Function`
    - **Required:** `false`
    - **Info:** Callback on successful load.
- **onProgress**
    - **Type:** `Function`
    - **Required:** `false`
    - **Info:** On-progress callback (if supported by the request).

### Example
```javascript
loadScript('./include/js/extra-script.js', () => {
    console.log('Script loaded!');
});
```

---

## `promiseLoadCss(href)`
### Information
Loads a CSS file and attaches it to the document's `<head>`.

### Parameters
- **href**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** Path/URL to the CSS file.

### Returns
- **Type:** `Promise<void>`

### Example
```javascript
promiseLoadCss('./include/css/extra-style.css')
    .then(() => { console.log('CSS loaded'); })
    .catch((e) => { console.error(e); });
```

---

## `promiseLoadImage(ele, src)`
### Information
Loads an image into an `<img>` element via a Promise.

### Parameters
- **ele**
    - **Type:** `HTMLImageElement`
    - **Required:** `true`
    - **Info:** The `<img>` element to load the image into.
- **src**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** Path/URL to the image file.

### Returns
- **Type:** `Promise<void>`

### Example
```javascript
const imgElement1 = document.getElementById('my-image');
promiseLoadImage(imgElement1, './assets/images/products/001.jpg')
    .then(() => { console.log('Image loaded'); })
    .catch((e) => { console.error(e); });
```

---

## `promiseLoadJson(url)`
### Information
Loads a JSON file and returns its content via a Promise.

### Parameters
- **url**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** Path/URL to the JSON file.

### Returns
- **Type:** `Promise<Object>`

### Example
```javascript
promiseLoadJson('./data/config.json')
    .then((data) => { console.log(data); })
    .catch((e) => { console.error(e); });
```

---

## `promiseLoadScript(src)`
### Information
Loads a JavaScript file and attaches it to the document's `<head>` via a Promise.

### Parameters
- **src**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** Path/URL to the JS file.

### Returns
- **Type:** `Promise<void>`

### Example
```javascript
promiseLoadScript('./includes/js/onDemandFile.js')
    .then(() => { console.log('Script loaded and attached'); })
    .catch((e) => { console.error(e); });
```

---

## `getRandomBoolean()`
### Information
Returns a random boolean (`true` or `false`).

### Returns
- **Type:** `Boolean`

### Example
```javascript
let randomBoolean = getRandomBoolean();
```

---

## `getRandomFloat(min, max)`
### Information
Returns a random floating-point number between two values.

### Parameters
- **min**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Minimum value.
- **max**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Maximum value.

### Returns
- **Type:** `Number`

### Example
```javascript
let randomFloat = getRandomFloat(1.4, 42.232);
```

---

## `getRandomInt(min, max)`
### Information
Returns a random integer between two values (inclusive).

### Parameters
- **min**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Minimum value.
- **max**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** Maximum value.

### Returns
- **Type:** `Number`

### Example
```javascript
let randomInt = getRandomInt(0, 100);
```

---

## `getRange(value1, value2)`
### Information
Returns the absolute difference (range) between two numbers.

### Parameters
- **value1**
    - **Type:** `Number`
    - **Required:** `true`
- **value2**
    - **Type:** `Number`
    - **Required:** `true`

### Returns
- **Type:** `Number`

### Example
```javascript
let range = getRange(10, -10); // 20
```

---

## `isEven(n)`
### Information
Checks if a number is even.

### Parameters
- **n**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The number to check.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let even = isEven(4); // true
```

---

## `isOdd(n)`
### Information
Checks if a number is odd.

### Parameters
- **n**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The number to check.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let odd = isOdd(3); // true
```

---

## `normaliseRange(min, max, v)`
### Information
Normalizes a value to a 0-1 range based on a min/max scale.

### Parameters
- **min**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The minimum value of the range (maps to 0).
- **max**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The maximum value of the range (maps to 1).
- **v**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The value to normalize.

### Returns
- **Type:** `Number`

### Example
```javascript
let n1 = normaliseRange(0, 100, 50);  // 0.5
let n2 = normaliseRange(0, 100, 200); // 1 (clamped)
let n3 = normaliseRange(0, 100, -50); // 0 (clamped)
```

---

## `parseArrayToFloat(arr)`
### Information
Parses each item in an array to a float.

### Parameters
- **arr**
    - **Type:** `Array`
    - **Required:** `true`
    - **Info:** The array to parse.

### Returns
- **Type:** `Array`

### Example
```javascript
let floatParsedArray = parseArrayToFloat(['1.1', '2.2', '3']); // [1.1, 2.2, 3]
```

---

## `parseArrayToInt(arr)`
### Information
Parses each item in an array to an integer.

### Parameters
- **arr**
    - **Type:** `Array`
    - **Required:** `true`
    - **Info:** The array to parse.

### Returns
- **Type:** `Array`

### Example
```javascript
let intParsedArray = parseArrayToInt(['1.1', '2.9', '3']); // [1, 2, 3]
```

---

## `roundTo(v, dec)`
### Information
Rounds a value to a specified number of decimal places.

### Parameters
- **v**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The value to round.
- **dec**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The number of decimal places.

### Returns
- **Type:** `Number`

### Example
```javascript
let r = roundTo(3.14159, 2); // 3.14
```

---

## `getGUID()`
### Information
Returns a GUID (Globally Unique Identifier) string.

### Returns
- **Type:** `String`

### Example
```javascript
let guid = getGUID();
```

---

## `getUID(len)`
### Information
Generates a unique ID of a specified length (max 34).

### Parameters
- **len**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The desired length of the unique ID.

### Returns
- **Type:** `String`

### Example
```javascript
let uid = getUID(12);
```

---

## `isAlphaNumeric(v)`
### Information
Checks if a string is alphanumeric (contains only letters and numbers).

### Parameters
- **v**
    - **Type:** `String` | `Number`
    - **Required:** `true`
    - **Info:** The value to check.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let an1 = isAlphaNumeric('a43'); // true
let an2 = isAlphaNumeric('a43-'); // false
```

---

## `isArray(input)`
### Information
Checks if the input is an array.

### Parameters
- **input**
    - **Type:** `*`
    - **Required:** `true`
    - **Info:** The value to check.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let check = isArray([]); // true
```

---

## `isBool(input)`
### Information
Checks if the input is a boolean.

### Parameters
- **input**
    - **Type:** `*`
    - **Required:** `true`
    - **Info:** The value to check.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let check = isBool(false); // true
```

---

## `isBoolean(input)`
### Information
Checks if the input is a boolean. (Alias for `isBool`)

### Parameters
- **input**
    - **Type:** `*`
    - **Required:** `true`
    - **Info:** The value to check.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let check = isBoolean(true); // true
```

---

## `isNumber(n)`
### Information
Checks if the input is a valid number.

### Parameters
- **n**
    - **Type:** `*`
    - **Required:** `true`
    - **Info:** The value to check.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let check1 = isNumber(42);    // true
let check2 = isNumber('42');  // true
let check3 = isNumber('a');   // false
```

---

## `isNumeric(n)`
### Information
Checks if the input is a valid number. (Alias for `isNumber`)

### Parameters
- **n**
    - **Type:** `*`
    - **Required:** `true`
    - **Info:** The value to check.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let check = isNumeric('42.5'); // true
```

---

## `MouseScrollHandler(onScrollUp, onScrollDown)`
### Information
A class to handle mouse wheel scroll events.

### Parameters
- **onScrollUp**
    - **Type:** `Function`
    - **Required:** `true`
    - **Info:** The function to call when the mouse wheel scrolls up.
- **onScrollDown**
    - **Type:** `Function`
    - **Required:** `true`
    - **Info:** The function to call when the mouse wheel scrolls down.

### Example
```javascript
function onScrollUpHandler() { console.log('Scrolled Up'); }
function onScrollDownHandler() { console.log('Scrolled Down'); }

new MouseScrollHandler(onScrollUpHandler, onScrollDownHandler);
```

---

## `getObjectPropByKey({object}, key)`
### Information
Returns a property from an object by its key (name).

### Parameters
- **obj**
    - **Type:** `Object`
    - **Required:** `true`
    - **Info:** The object to search within.
- **key**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The name of the property to retrieve.

### Returns
- **Type:** `any` (the value of the property, or `undefined` if not found)

### Example
```javascript
let myObj = { name: 'AFTC', colors: ['red', 'green'] };
let colorDefinitions = getObjectPropByKey(myObj, 'colors');
```

---

## `cutStringTo(str, len)`
### Information
Truncates a string to a specified length.

### Parameters
- **str**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to cut.
- **len**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The desired length of the returned string.

### Returns
- **Type:** `String`

### Example
```javascript
let cutString = cutStringTo('abcdefg', 4); // 'abcd'
```

---

## `escapeHTML(str)`
### Information
Escapes HTML special characters in a string.

### Parameters
- **str**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to escape.

### Returns
- **Type:** `String`

### Example
```javascript
let newString = escapeHTML('<b>some html</b>'); // '&lt;b&gt;some html&lt;/b&gt;'
```

---

## `getAnchor(url)`
### Information
Returns the anchor (hash part) from a URL string.

### Parameters
- **url**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The URL string.

### Returns
- **Type:** `String`

### Example
```javascript
let anchor = getAnchor('https://example.com/page#section2'); // 'section2'
```

---

## `getCleanJSONString(s)`
### Information
Attempts to clean special characters from a string to make it valid JSON.

### Parameters
- **s**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The JSON string to parse.

### Returns
- **Type:** `String`

### Example
```javascript
let newString = getCleanJSONString(oldString);
```

---

## `getFileExtension(str)`
### Information
Attempts to get the file extension from a file path string.

### Parameters
- **str**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The file path or name.

### Returns
- **Type:** `String`

### Example
```javascript
let ext = getFileExtension('path/to/my/image.jpeg'); // 'jpeg'
```

---

## `getLastPartOfUrl(url)`
### Information
Returns the last segment of a URL, split by '/'.

### Parameters
- **url**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The URL string.

### Returns
- **Type:** `String`

### Example
```javascript
let lastSegment = getLastPartOfUrl('https://domain.com/users/profile'); // 'profile'
```

---

## `getRandomString(len)`
### Information
Returns a random string of letters (A-Z, a-z) of a specified length.

### Parameters
- **len**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The length of the random string.

### Returns
- **Type:** `String`

### Example
```javascript
let randomLetterString = getRandomString(10);
```

---

## `getStringBetween(source, start, end)`
### Information
Returns the first substring found between start and end markers.

### Parameters
- **source**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to search within.
- **start**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The starting marker.
- **end**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The ending marker.

### Returns
- **Type:** `String`

### Example
```javascript
let str = getStringBetween('<div>hello</div>', '<div>', '</div>'); // 'hello'
```

---

## `getStringBetween2(source, start, end)`
### Information
Returns an array of all substrings found between start and end markers (max 500).

### Parameters
- **source**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to search within.
- **start**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The starting marker.
- **end**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The ending marker.

### Returns
- **Type:** `Array`

### Example
```javascript
let found = getStringBetween2('[a][b][c]', '[', ']'); // ['a', 'b', 'c']
```

---

## `getWordCount(str)`
### Information
Returns the number of words in a string (based on spaces).

### Parameters
- **str**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to count words from.

### Returns
- **Type:** `Number`

### Example
```javascript
let wordCount = getWordCount('Hello world, this is a test.'); // 6
```

---

## `inString(needle, haystack)`
### Information
Checks if a string exists within another string.

### Parameters
- **needle**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to find.
- **haystack**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to search.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let stringFound = inString('world', 'hello world'); // true
```

---

## `isInString(needle, haystack)`
### Information
Checks if a string exists within another string. (Alias for `inString`)

### Parameters
- **needle**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to find.
- **haystack**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to search.

### Returns
- **Type:** `Boolean`

### Example
```javascript
let stringFound = isInString('world', 'hello world'); // true
```

---

## `lTrimBy(str, by)`
### Information
Trims a specified number of characters from the left (start) of a string.

### Parameters
- **str**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to trim.
- **by**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The number of characters to trim.

### Returns
- **Type:** `String`

### Example
```javascript
let trimmedString = lTrimBy('__hello', 2); // 'hello'
```

---

## `regExReplaceAll(needle, rep, haystack)`
### Information
Uses regex to replace all instances of a substring.

### Parameters
- **needle**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The substring to replace.
- **rep**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The replacement string.
- **haystack**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to perform replacements on.

### Returns
- **Type:** `String`

### Example
```javascript
let newString = regExReplaceAll(' ', '_', 'hello world example'); // 'hello_world_example'
```

---

## `removeFileFromPath(path)`
### Information
Removes the filename from a file path, returning the directory path.

### Parameters
- **path**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The file path.

### Returns
- **Type:** `String`

### Example
```javascript
let dirPath = removeFileFromPath('/path/to/file.txt'); // '/path/to/'
```

---

## `replaceAll(needle, replace, haystack)`
### Information
Uses a split/join method to replace all occurrences of a substring.

### Parameters
- **needle**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The substring to replace.
- **replace**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The replacement string.
- **haystack**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to perform replacements on.

### Returns
- **Type:** `String`

### Example
```javascript
let newString = replaceAll(' ', '_', 'hello world example'); // 'hello_world_example'
```

---

## `replaceDoubleBackSlash(str, rep)`
### Information
Replaces double backslashes (`\\`) in a string with a replacement string.

### Parameters
- **str**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to process.
- **rep**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to replace `\\` with.

### Returns
- **Type:** `String`

### Example
```javascript
let processedString = replaceDoubleBackSlash('C:\\Users\\Test', '/'); // 'C:/Users/Test'
```

---

## `replaceDoubleForwardSlash(str, rep)`
### Information
Replaces double forward slashes (`//`) in a string with a replacement string.

### Parameters
- **str**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to process.
- **rep**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to replace `//` with.

### Returns
- **Type:** `String`

### Example
```javascript
let processedString = replaceDoubleForwardSlash('https://domain.com//path', '/'); // 'https:/domain.com/path'
```

---

## `rTrimBy(str, trimBy)`
### Information
Trims a specified number of characters from the right (end) of a string.

### Parameters
- **str**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to trim.
- **trimBy**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The number of characters to trim.

### Returns
- **Type:** `String`

### Example
```javascript
let trimmedString = rTrimBy('hello__', 2); // 'hello'
```

---

## `trimStringBy(str, trimBy)`
### Information
Trims a specified number of characters from the right (end) of a string. (Alias for `rTrimBy`)

### Parameters
- **str**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to trim.
- **trimBy**
    - **Type:** `Number`
    - **Required:** `true`
    - **Info:** The number of characters to trim.

### Returns
- **Type:** `String`

### Example
```javascript
let trimmedString = trimStringBy('hello__', 2); // 'hello'
```

---

## `ucFirst(s)`
### Information
Makes the first letter of a string uppercase.

### Parameters
- **s**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The string to modify.

### Returns
- **Type:** `String`

### Example
```javascript
let ucFirstString = ucFirst('hello'); // 'Hello'
```

---

## `SwipeHandler({object})`
### Information
A class for detecting swipe gestures (left, right, up, down).

### Parameters
- **Configuration Object**:
    - **onSwipeLeft**
        - **Type:** `Function`
        - **Required:** `false`
        - **Info:** Callback for a left swipe.
    - **onSwipeRight**
        - **Type:** `Function`
        - **Required:** `false`
        - **Info:** Callback for a right swipe.
    - **onSwipeUp**
        - **Type:** `Function`
        - **Required:** `false`
        - **Info:** Callback for an up swipe.
    - **onSwipeDown**
        - **Type:** `Function`
        - **Required:** `false`
        - **Info:** Callback for a down swipe.
    - **horizontalTolerance**
        - **Type:** `Number`
        - **Required:** `false`
        - **Default:** `50`
        - **Info:** Minimum horizontal distance (in pixels) to trigger a swipe.
    - **verticalTolerance**
        - **Type:** `Number`
        - **Required:** `false`
        - **Default:** `50`
        - **Info:** Minimum vertical distance (in pixels) to trigger a swipe.
    - **swipeThrottleTimeout**
        - **Type:** `Number`
        - **Required:** `false`
        - **Default:** `250`
        - **Info:** Milliseconds to wait before another swipe can be detected.

### Example
```javascript
new SwipeHandler({
    onSwipeLeft: () => console.log('Swiped Left!'),
    onSwipeRight: () => console.log('Swiped Right!')
});
```

---

## `getRoute(url)`
### Information
Returns a clean route string from a URL (removes domain, protocol, and query strings).

### Parameters
- **url**
    - **Type:** `String`
    - **Required:** `false`
    - **Info:** The URL to parse. If omitted, `window.location.href` is used.

### Returns
- **Type:** `String`

### Example
```javascript
// Assuming URL is 'https://domain.com/users/profile?id=123'
let currentRoute = getRoute(); // '/users/profile'

let usersRoute = getRoute('https://domain.com/users'); // '/users'
```

---

## `promiseAttachVideo(video, src)`
### Information
Attaches a video source to a `<video>` element and resolves a promise once metadata is loaded. Useful for getting dimensions and duration before playback.

### Parameters
- **video**
    - **Type:** `HTMLVideoElement`
    - **Required:** `true`
    - **Info:** The `<video>` element.
- **src**
    - **Type:** `String`
    - **Required:** `true`
    - **Info:** The video file source URL.

### Returns
- **Type:** `Promise<{width: number, height: number, duration: number}>`

### Example
```javascript
const vid = document.getElementById('my-video');
const vidSrc = './assets/video.mp4';

promiseAttachVideo(vid, vidSrc)
    .then((meta) => {
        console.log('Video ready:', meta); // { width: 1920, height: 1080, duration: 30.5 }
    });
```

---

## `promiseVideoEnd(video)`
### Information
Returns a promise that resolves when the video playback has ended.

### Parameters
- **video**
    - **Type:** `HTMLVideoElement`
    - **Required:** `true`
    - **Info:** The `<video>` element to monitor.

### Returns
- **Type:** `Promise<void>`

### Example
```javascript
const vid = document.getElementById('my-video');
vid.play();

promiseVideoEnd(vid)
    .then(() => {
        console.log('Video playback complete');
    });
```