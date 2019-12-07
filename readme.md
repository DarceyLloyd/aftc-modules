# <b>AFTC-MODULES.js</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## A collection of usefull everyday utilities / functions.


<h3><b>Find AFTC-MODULES.JS useful? Please Donate...</b></h3>
[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


 <hr>
 <br>




 ## <b>aftc-modules.js</b> v1.0.30<br>
 <b>The ES6 / Modules version of aftc.js? Full migration is in progress but every repo got to start somewhere.</b>

 ```
 npm i aftc-modules
 ```






### <b>Installation</b>
```
npm i aftc-modules
```
<br>
<hr>

Full docs coming soon, quick list of available functions:
- onReady(fn); // when the dom is ready
- getBrowserY(); // returns viewport y position
- getBrowserX(); // returns viewport x position
- normaliseRange(min,max,value); // will take min and and max and current value and return it as a value based on 0 to 1
- roundTo(value,decimals);
- attachDebug(noOfElementsToAttach,elementToAttachTo); returns array of elements
- log(arg); // no more console.log, just log
- logTo(elementOrId,arg); // log to an element
- inertiaTo(current,target,amount); // inertia movement to a target based on amount
- isInViewport(element); // is element in view?
- getElementPosition(element); // gets an elements position on the page {top,left}
- argsToObject(arguments[0],object,strict:boolean)
- isElement(ele);
- isElement2(ele);
- isStringInArray(needle, haystack);
- arrayContains(needle, haystack);
- isInArray(needle, haystack) {
- arrayEmpty(arr)
- arrayClear(arr)
- getMaxFromArray(arr)
- arrayGetMax(arr) {
- arrayMax(arr) {
- getMinFromArray(arr) {
- arrayGetMin(arr) {
- arrayMin(arr) {
- arrayShuffle(arr) {
- arrayShuffle2(a) {
- isInString(find,source)
- inString(find,source)
- isEven(n)
- isOdd(n)
- isAlphaNumeric(input)
- isDOM(obj)
- isBoolean(input)
- isBool(input)
- isNumeric(n)
- isNumber(n)
- isArray(input)
- getRandomInt(min, max)
- getRandomBoolean()
- getRandomThatsNot(min,max,not)
- getRandomFloat(min, max)
- getRandomString(len)
- getUID(len)
- getGUID()
- getWeightedRandom(odds, iterations)
- limitLengthInWords(str, maxWords)
- cleanJSONString (s)
- escapeHTML(str)
- cutStringTo(s, len)
- lTrimBy(str, by)
- trimStringBy(str, trimBy)
- rTrimBy(str, trimBy)
- getFileExtension(input)
- getFileExtension2(input)
- getLastPartOfUrl(url)
- removeFileFromPath(path)
- getAnchorFromUrl(url)
- getStringBetween(str, start, end)
- getStringsBetween(str, start, end)
- radToDeg(input)
- rad2deg(arg)
- degToRad(input)
- deg2rad(arg)
- toHex(num)
- boolToString (bool)
- boolToYesNo (bool)
- stringToBool (str)
- parseArrayToFloat(arr)
- parseArrayToInt(arr)
- rgb2Hex (r, g, b)
- rgbToHex (r, g, b)
- hexToRgb (hex)
- hex2Rgb (hex)
- getDaysBetween (startDateTime, endDateTime)
- getUKDateFromDate(dte)
- getUSDateFromDate(dte)
- getUkDateFromDbDateTime (input)
- getUkDateTimeFromDbDateTime  (input)
- getSQLDateTimeString ()
- isEmail (email)
- isMobile()
- isAndroid()
- iOS()
- isFireFox()
- isChrome()
- isEdge()
- isSafari()
- isIE()
- isOpera()
- getIEVersion()
- getBrowser()
- getOS(testUserAgent)
- setHTML(elementOrId, str)
- getElementOffsetTop(elementId)
- XHR()

