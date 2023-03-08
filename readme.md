# AFTC-MODULES v1.17.14
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## A collection of useful everyday utilities / functions for JavaScript & TypeScript.


<h3>Find AFTC-MODULES useful? Please Donate...</h3>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


 
 



## Latest changes
- Added cookie manager
```
const cm:CookieManager = new CookieManager();
cm.set(key,value,expiryInSeconds)
cm.get(key)
cm.remove(key); // alias's del, rem
```
- Various bug fixes and documentation generation bug fix
- removed AttachKeysToVec3() // TypeScript only
- removed VisualDebug() // TypeScript only (use attachDebug for JS projects)
- optimised various functions and clean up
- added hexToColor (THREE.Color)
- added doesUrlKeyExist(string)
- added getUrlKeyValue(string)
- added rgbToHex3
- added convert255(124)
- updated fetchJson(string)
- added getDeviceType()






### Want the ES5 (old) version?
Your looking for aftc.js. Visit: https://github.com/DarceyLloyd/AFTC.js





### Installation
```
npm i aftc-modules
```




## Available Methods & Class's:


 - inertiaTo(current,target,amount)
 - arrayClear(arr)
 - arrayContains(needle,haystack)
 - arrayEmpty(arr)
 - arrayGetMax(arr)
 - arrayGetMin(arr)
 - arrayRemoveIndex(arr,index)
 - arrayRemoveValue(arr,value)
 - arrayShuffle(arr)
 - arrayShuffle2(arr)
 - isArrayInString(input,arr)
 - isInArray(needle,haystack)
 - isStringInArray(needle,haystack)
 - getBrowser()
 - getBrowserX()
 - getBrowserY()
 - isInViewport(el)
 - argsToObject({object},{object},strict)
 - boolToInt(bool)
 - boolToString(bool)
 - boolToYesNo(bool)
 - degToRad(input)
 - hexToRgb(hex)
 - numToHex(num)
 - objectToObject({object},{object},strict)
 - radToDeg(input)
 - rgbToHex(r,g,b)
 - rgbToHex2(r,g,b)
 - rgbToHex3(r,g,b)
 - stringToBool(str)
 - getCookie(name)
 - listCookies()
 - setCookie(name,cvalue,exdays)
 - getDaysBetween(startDateTime,endDateTime)
 - getMySQLDateTimeString()
 - getUKDate(dte,separator)
 - getUKDateFromDbDateTime(dbDateString,separator)
 - getUKDateTime(dte,separator)
 - getUkDateTimeFromDbDateTime(dte,separator)
 - getUSDate(dte,separator)
 - appendTo(elementOrId,msg,endOfLine)
 - attachDebug(no,position,ele)
 - debugTo(index,str)
 - log(arg)
 - logDisable()
 - logEnable()
 - Logger()
 - logTo(elementOrId,msg,append,endOfLine)
 - warn(arg)
 - getDeviceType()
 - getOS()
 - isAndroid()
 - isChrome()
 - isEdge()
 - isFireFox()
 - isIOS()
 - isMobile()
 - isOpera()
 - isSafari()
 - isTouchDevice()
 - getElementPos(ele)
 - getElementPosition(el)
 - getElementPos(el)
 - hasClass(elementOrId,ele)
 - isDOM(obj)
 - isElement(ele)
 - isElement2(ele)
 - setHTML(elementOrId,str,mode)
 - onReady(fn)
 - wordCountFilter(str,maxWords)
 - setOptionSelectedIndex(selectElement,selectedValue)
 - imageToCanvas(url)
 - fetchHtml(url)
 - fetchJson(url)
 - loadAndAttachImage(imgElement,src)
 - loadCss(href,onComplete)
 - loadJson(url,onComplete,onError)
 - loadScript(src,onComplete,onProgress)
 - promiseLoadCss(href)
 - promiseLoadImage(ele,src)
 - promiseLoadJson(url)
 - promiseLoadScript(src)
 - getRandomBoolean()
 - getRandomFloat(min,max)
 - getRandomInt(min,max)
 - getRange(value 1,Value 2)
 - isEven(n)
 - isOdd(n)
 - normaliseRange(min,max,v)
 - parseArrayToFloat(arr)
 - parseArrayToInt(arr)
 - roundTo(v,dec)
 - getGUID()
 - getUID(len)
 - isAlphaNumeric(v)
 - isArray(input)
 - isBool(input)
 - isBoolean(input)
 - isNumber(n)
 - isNumeric(n)
 - MouseScrollHandler(onScrollUp,onScrollDown)
 - getObjectPropByKey({object},key)
 - cutStringTo(str,len)
 - escapeHTML(str)
 - getAnchor(url)
 - getCleanJSONString(s)
 - getFileExtension(str)
 - getLastPartOfUrl(url)
 - getRandomString(len)
 - getStringBetween(source,start,end)
 - getStringBetween2(source,start,end)
 - getWordCount(str)
 - inString(needle,haystack)
 - isInString(needle,haystack)
 - lTrimBy(str,by)
 - regExReplaceAll(needle,rep,haystack)
 - removeFileFromPath(path)
 - replaceAll(needle,replace,haystack)
 - replaceDoubleBackSlash(str,rep)
 - replaceDoubleForwardSlash(str,rep)
 - rTrimBy(str,trimBy)
 - trimStringBy(str,trimBy)
 - ucFirst(s)
 - SwipeHandler({object})
 - doesUrlKeyExist(key)
 - getRoute(url)
 - getUrlKeyValue(key)
 - isEmail(email)
 - promiseAttachVideo(video,src)
 - promiseVideoEnd(video)










# Documentation

## inertiaTo(current,target,amount))
### Information
Calculates the target value of inertia in a loop/requestAnimationFrame from 1 value to another at speed.

### Parameters

- current
	- Type: Number
	- Required: true
	- Info: Current value.

- target
	- Type: Number
	- Required: true
	- Info: Value to reach.

- amount
	- Type: Number
	- Required: true
	- Info: Inertia speed (dec/inc speed).

### Example

```
let newX = inertiaTo(curX,targetX,0.5)
```




## arrayClear(arr))
### Information
Clears an array

### Parameters

- arr
	- Type: array
	- Required: true
	- Default: null
	- Info: The array you want to clear / empty

### Example

```
arrayClear(myArray)
```




## arrayContains(needle,haystack))
### Information
Finds a needle in a haystack.

### Parameters

- needle
	- Type: string
	- Required: true
	- Default: null
	- Info: What you are looking for.

- haystack
	- Type: array
	- Required: true
	- Default: null
	- Info: The array you want to search.





## arrayEmpty(arr))
### Information
Clears an array

### Parameters

- arr
	- Type: array
	- Required: true
	- Default: null
	- Info: The array you want to clear / empty

### Example

```
arrayEmpty(myArray)
```




## arrayGetMax(arr))
### Information
Gets the maximum value from the supplied array.

### Parameters

- arr
	- Type: array
	- Required: true
	- Default: null
	- Info: The array you want to get the maximum value within.

### Returns

- Type: Number
### Example

```
let max = arrayGetMax(myArray)
```




## arrayGetMin(arr))
### Information
Gets the minimum value from the supplied array.

### Parameters

- arr
	- Type: array
	- Required: true
	- Default: null
	- Info: The array you want to get the minimum value from.

### Returns

- Type: Number
### Example

```
let max = arrayGetMin(myArray)
```




## arrayRemoveIndex(arr,index))
### Information
Removes an index from the supplied array.

### Parameters

- arr
	- Type: array
	- Required: true
	- Default: null
	- Info: The array you want to remove the index from.

- index
	- Type: number
	- Required: true
	- Default: null
	- Info: The index which you want to remove.

### Returns

- Type: Array
### Example

```
let max = arrayRemoveIndex(arr,index)
```




## arrayRemoveValue(arr,value))
### Information
Removes a value from the supplied array.

### Parameters

- arr
	- Type: array
	- Required: true
	- Default: null
	- Info: The array you want to remove the value from.

- value
	- Type: string || number
	- Required: true
	- Default: null
	- Info: The value which you want to remove from the array.

### Returns

- Type: Array
### Example

```
let max = arrayRemoveValue(arr, value)
```




## arrayShuffle(arr))
### Information
Shuffles / Randomizes an array.

### Parameters

- arr
	- Type: array
	- Required: true
	- Default: null
	- Info: The array you want to shuffle.

### Returns

- Type: Array
### Example

```
let shuffledArray = arrayShuffle(myArray)
```




## arrayShuffle2(arr))
### Information
Shuffles / Randomizes an array (method 2).

### Parameters

- arr
	- Type: array
	- Required: true
	- Default: null
	- Info: The array you want to shuffle.

### Returns

- Type: Array
### Example

```
let shuffledArray = arrayShuffle2(myArray)
```




## isArrayInString(input,arr))
### Information
Searches the array for a string.

### Parameters

- input
	- Type: string
	- Required: true
	- Default: null
	- Info: String you want to look for matches in.

- arr
	- Type: array
	- Required: true
	- Default: null
	- Info: The array of strings you want to search for in input.

### Returns

- Type: Boolean
### Example

```
let found = isStringInArray(needle, haystack)
```




## isInArray(needle,haystack))
### Information
Searches the array for your value.

### Parameters

- needle
	- Type: *
	- Required: true
	- Default: null
	- Info: What you are looking for.

- haystack
	- Type: array
	- Required: true
	- Default: null
	- Info: The array you want to search.

### Returns

- Type: Boolean
### Example

```
let found = isInArray(needle, haystack)
```




## isStringInArray(needle,haystack))
### Information
Searches the array for a string.

### Parameters

- needle
	- Type: string
	- Required: true
	- Default: null
	- Info: String you are looking for.

- haystack
	- Type: array
	- Required: true
	- Default: null
	- Info: The array you want to search.

### Returns

- Type: Boolean
### Example

```
let found = isStringInArray(needle, haystack)
```




## getBrowser())
### Information
Gets the name of the browser you are using (opera | chrome | safari | firefox | msie | trident | edge).

### Returns

- Type: String
### Example

```
let browser = getBrowser()
```




## getBrowserX())
### Information
Gets the viewport x position.

### Returns

- Type: Number
### Example

```
let x = getBrowserX()
```




## getBrowserY())
### Information
Gets the viewport y position.

### Returns

- Type: Number
### Example

```
let x = getBrowserY()
```




## isInViewport(el))
### Information
Checks whether an element is in view.

### Parameters

- el
	- Type: element
	- Required: true
	- Default: null
	- Info: The element you want to check is in view

### Returns

- Type: Boolean
### Example

```
let isInView = isInViewport(myElement)
```




## argsToObject({object},{object},strict))
### Information
Parses arguments to an object of your choice with strict or relaxed assigning features (good for defaults and instantiation processing).

### Parameters

- src
	- Type: Object
	- Required: true
	- Default: null
	- Info: The object from the function or class. Eg: Use arguments[0] from constructor in a class. Or any object.

- dest
	- Type: Object
	- Required: true
	- Default: null
	- Info: The arguments object you wish to assign arguments to.

- strict
	- Type: Boolean
	- Required: false
	- Default: true
	- Info: Whether you want to enable strict assignments only. Enabling strict will warn users of the function that the argument supplied is not supported.

### Returns

- Type: Boolean
### Example

```
/* Class based example */
constructor(){
	this.appArgs = {a:0,b:0};
	argsToObject(arguments[0], this.appArgs, true)
}

/* Instantiation of your class (not the only use) */
NOTE: c if strict enabled will give a warning, this is a good thing prevents users from incorrectly using your class's or functions */

new MyApp({a:1,b:3,c:4});
```




## boolToInt(bool))
### Information
Converts a boolean to a number.

### Parameters

- bool
	- Type: Boolean
	- Required: true
	- Default: null
	- Info: The variable you wish to convert.

### Returns

- Type: Number
### Example

```
let strBool = boolToInt(isMobile)
```




## boolToString(bool))
### Information
Converts a boolean to a string of true || false.

### Parameters

- bool
	- Type: Boolean
	- Required: true
	- Default: null
	- Info: The variable you wish to convert.

### Returns

- Type: String
### Example

```
let strBool = boolToString(isMobile)
```




## boolToYesNo(bool))
### Information
Converts a boolean to a string of yes || no.

### Parameters

- bool
	- Type: Boolean
	- Required: true
	- Default: null
	- Info: The variable you wish to convert.

### Returns

- Type: String
### Example

```
let answer = boolToYesNo(boolAnswer)
```




## degToRad(input))
### Information
Converts degrees to radians.

### Parameters

- input
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number you want to convert.

### Returns

- Type: Number
### Example

```
let rad = degToRad(deg)
```




## hexToRgb(hex))
### Information
Converts hex color to an object with r,g,b props.

### Parameters

- hex
	- Type: String
	- Required: true
	- Default: null
	- Info: Hex color string eg #FFCC00

### Returns

- Object
	- r
		- Type: Number
	- g
		- Type: Number
	- b
		- Type: Number
### Example

```
let rgb = hexToRgb('#FFCC00')
```




## numToHex(num))
### Information
Converts a number to hexadecimal.

### Parameters

- num
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number you want to convert.

### Returns

- Type: String
### Example

```
let hex = numToHex(12)
```




## objectToObject({object},{object},strict))
### Information
Parses an object to another object of your choice with strict or relaxed assigning features (good for defaults and instantiation processing).

### Parameters

- src
	- Type: Object
	- Required: true
	- Default: null
	- Info: The source object. Eg: Use arguments[0] from constructor in a class.

- dest
	- Type: Object
	- Required: true
	- Default: null
	- Info: The target object you wish to assign arguments to.

- strict
	- Type: Boolean
	- Required: false
	- Default: true
	- Info: Whether you want to enable strict assignments only. Enabling strict will warn users of the function that the argument supplied is not supported.

### Returns

- Type: Boolean
### Example

```
/* Class based example */
constructor(){
	this.appArgs = {a:0,b:0};
	objectToObject(arguments[0], this.appArgs, true)
}

/* Instantiation of your class (not the only use) */
NOTE: c if strict enabled will give a warning, this is a good thing prevents users from incorrectly using your class's or functions */

new MyApp({a:1,b:3,c:4});
```




## radToDeg(input))
### Information
Converts radians to degrees.

### Parameters

- input
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number you want to convert.

### Returns

- Type: Number
### Example

```
let rad = radToDeg(deg)
```




## rgbToHex(r,g,b))
### Information
Converts an RGB value to a hex color value.

### Parameters

- r
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number you want to convert.

- g
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number you want to convert.

- b
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number you want to convert.

### Returns

- Type: String
### Example

```
let hex = RGBToHex(255,100,55);
```




## rgbToHex2(r,g,b))
### Information
Converts an RGB value to a hex color value (Method 2).

### Parameters

- r
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number you want to convert.

- g
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number you want to convert.

- b
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number you want to convert.

### Returns

- Type: String
### Example

```
let hex = rgbToHex2(255,100,55);
```




## rgbToHex3(r,g,b))
### Information
Converts an RGB value to a hex color value (Method 3).

### Parameters

- r
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number you want to convert.

- g
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number you want to convert.

- b
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number you want to convert.

### Returns

- Type: String
### Example

```
let hex = rgbToHex3(255,100,55);
```




## stringToBool(str))
### Information
Converts a String to Boolean.

### Parameters

- str
	- Type: String
	- Required: true
	- Default: null
	- Info: The value you want to convert.

### Returns

- Type: Boolean
### Example

```
let answer1 = stringToBool('yes');
let answer2 = stringToBool('y');
let answer3 = stringToBool('1');
let answer4 = stringToBool('no');
let answer5 = stringToBool('n');
let answer6 = stringToBool('0');
```




## getCookie(name))
### Information
Fetches a cookie by name.

### Parameters

- name
	- Type: String
	- Required: true
	- Default: null
	- Info: The name of the cookie you want to retrieve.

### Returns

- Type: String
### Example

```
let email = getCookie('email')
```




## listCookies())
### Information
Lists all available cookie.

### Example

```
listCookies()
```




## setCookie(name,cvalue,exdays))
### Information
Fetches a cookie by name.

### Parameters

- name
	- Type: String
	- Required: true
	- Default: null
	- Info: The name of the cookie you want to retrieve.

- cvalue
	- Type: String
	- Required: true
	- Default: null
	- Info: The value you want to put in the cookie.

- exdays
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number of days you want the cookie to expire in.

### Example

```
let name = 'email';
let value = 'darcey.lloyd@gmail.com';
let lifeInMins = 30;
setCookie(name,value,lifeInMins)
```




## getDaysBetween(startDateTime,endDateTime))
### Information
Gets the number of days between 2 dates.

### Parameters

- startDateTime
	- Type: Date
	- Required: true
	- Default: null
	- Info: The start date.

- endDateTime
	- Type: Date
	- Required: true
	- Default: null
	- Info: The end date.

### Returns

- Type: Number
### Example

```
/* NOTE: Month is indexed at 0 */

let startDateTime = new Date('2020,3,26')
let endDateTime = new Date('2020,3,26')
let days = getDaysBetween('startDateTime, endDateTime')
```




## getMySQLDateTimeString())
### Information
Gets the date as a mysql injectable string.

### Returns

- Type: String
### Example

```
let dte = getMySQLDateTimeString()
```




## getUKDate(dte,separator))
### Information
Gets a UK formatted date string from a supplied date.

### Parameters

- dte
	- Type: Date || String
	- Required: true
	- Default: null
	- Info: The date you wish to get the UK format date string from.

- separator
	- Type: String
	- Required: false
	- Default: -
	- Info: What the date string segments will be separated by.

### Returns

- Type: String
### Example

```
let ukDate = getUKDate(new Date(),'-')
```




## getUKDateFromDbDateTime(dbDateString,separator))
### Information
Gets a UK formatted date string from a supplied db date string.

### Parameters

- dbDateString
	- Type: Date || String
	- Required: true
	- Default: null
	- Info: This should be a datetime string from a db query.

- separator
	- Type: String
	- Required: false
	- Default: -
	- Info: What the date string segments will be separated by.

### Returns

- Type: String
### Example

```
let ukDate = getUkDateFromDbDateTime(dbDateString)
```




## getUKDateTime(dte,separator))
### Information
Gets a UK formatted date string from a supplied date.

### Parameters

- dte
	- Type: Date || String
	- Required: true
	- Default: null
	- Info: The date you wish to get the UK format date string from.

- separator
	- Type: String
	- Required: false
	- Default: -
	- Info: What the date string segments will be separated by.

### Returns

- Type: String
### Example

```
let ukDate = getUKDate(new Date(),'-')
```




## getUkDateTimeFromDbDateTime(dte,separator))
### Information
Gets a UK formatted date and time string from a supplied db date time string.

### Parameters

- dte
	- Type: String
	- Required: true
	- Default: null
	- Info: This should be a datetime string from a db query.

- separator
	- Type: String
	- Required: false
	- Default: -
	- Info: What the date string segments will be separated by.

### Returns

- Type: String
### Example

```
let ukDate = getUkDateTimeFromDbDateTime(dte)
```




## getUSDate(dte,separator))
### Information
Gets a US formatted date string from a supplied date.

### Parameters

- dte
	- Type: Date
	- Required: true
	- Default: null
	- Info: The date you wish to get the US format date string from.

- separator
	- Type: String
	- Required: false
	- Default: -
	- Info: What the date string segments will be separated by.

### Returns

- Type: String
### Example

```
let usDate = getUKDate(new Date(),'-')
```




## appendTo(elementOrId,msg,endOfLine))
### Information
Appends a string to an element, with or without a < BR > tag.

### Parameters

- elementOrId
	- Type: Element||ElementID
	- Required: true
	- Default: null
	- Info: The element or element id of the element you wish to append the string within.

- msg
	- Type: String
	- Required: true
	- Default: null
	- Info: The string you wish to append to the html element.

- endOfLine
	- Type: String
	- Required: false
	- Default: < br >
	- Info: The end of the string that will be appended to the element, set to '' if you dont want the < br >

### Example

```
appendTo(elementOrId,msg,'')
```




## attachDebug(no,position,ele))
### Information
Displays a visual debug list so you can watch variables change in real time (Most excellent for debug with keys, animations etc). Click row to inject that value into copy and paste buffer. See debugTo to use attachDebug, usage example below.

### Parameters

- no
	- Type: Number
	- Required: true
	- Default: null
	- Info: The number of debug elements you want available.

- position
	- Type: String (tl, top left, tr, top right, bl, btm left, br, btm right)
	- Required: true
	- Default: top left
	- Info: Position of the debug list.

- ele
	- Type: Element
	- Required: false
	- Default: document.body
	- Info: The debug list will be appended to this element

### Example

```
attachDebug(3)
debugTo(0,'hello world 1')
debugTo(1,'hello world 2')
debugTo(2,'hello world 3')
```




## debugTo(index,str))
### Information
Sets a visual debug element so you can visually track variables without the use of the console, excellent for working with the graphical side of things, animations, webgl etc.

### Parameters

- index
	- Type: Number
	- Required: true
	- Default: null
	- Info: The debug container index to write to (setup via attachDebug).

- str
	- Type: String
	- Required: true
	- Default: null
	- Info: The string you want to write to the debug container.

### Example

```
attachDebug(3)
debugTo(0,'hello world 1')
debugTo(1,'hello world 2')
debugTo(2,'hello world 3')
```




## log(arg))
### Information
Lazy version of console.log, no more typing console!

### Parameters

- arg
	- Type: *
	- Required: true
	- Default: null
	- Info: arg gets injected into console.log

### Example

```
log('Once you use me, you will never stop using me')
let a = 4;
log('a = ' + a)
log(`a = ${a}`)
```




## logDisable())
### Information
Disable log() globally. Good for keeping all your log commands without having to comment them out in your projects. You should really you should comment them all out for removal in the packaging process.

### Example

```
log('You will see this in console')
logDisable()
log('You wont see this in console')
```




## logEnable())
### Information
Enable log() globally. Good for keeping all your log commands without having to comment them out in your projects. You should really you should comment them all out for removal in the packaging process.

### Example

```
log('You will see this in console')
logDisable()
log('You wont see this in console')
logEnable()
log('You will see this in console')
```




## Logger())
### Information
A substitute for console.log, allowing you to keep your comments and enable them on a class by class or function by function basis, or globally on all class's or functions implemented in.

### Methods

- enable()
- disable()
- enableAll()
- disableAll()
- enableGlobally()
- disableGlobally()
### Example

```
this.logger = new Logger()
this.logger.log('hello world 1')
this.logger.warn('hello world 2')
this.logger.error('hello world 3')
this.logger.enable()
this.logger.disable()
this.logger.enableAll()
this.logger.disableAll()
```




## logTo(elementOrId,msg,append,endOfLine))
### Information
Appends a string to an element, with or without a < BR > tag.

### Parameters

- elementOrId
	- Type: Element||ElementID
	- Required: true
	- Default: null
	- Info: The element or element id of the element you wish to append the string within.

- msg
	- Type: String
	- Required: true
	- Default: null
	- Info: The string you wish to append to the html element.

- append
	- Type: Boolean
	- Required: false
	- Default: false
	- Info: Method of attaching the logging message, append (true) or prepend (false) aka top vs bottom.

- endOfLine
	- Type: String
	- Required: false
	- Default: 
	- Info: The end of the string that will be appended to the element, set to '< br >' if you want a line break

### Example

```
logTo(elementOrId,msg,true)
```




## warn(arg))
### Information
Lazy version of console.warn, no more typing console!

### Parameters

- arg
	- Type: *
	- Required: true
	- Default: null
	- Info: arg gets injected into console.warn

### Example

```
warn('Once you use me, you will never stop using me')
let a = 4;
warn('a = ' + a)
warn(`a = ${a}`)
```




## getDeviceType())
### Information
Returns the device type mobile || tablet || desktop

### Parameters

### Returns

- Type: String
### Example

```
let deviceType = getDeviceType()
```




## getOS())
### Information
Gets what OS is in use

### Returns

- Type: String (Mac OS, iOS, Windows, Android, Linux
### Example

```
let os = getOS()
```




## isAndroid())
### Information
Detects if Android or not.

### Returns

- Type: Boolean
### Example

```
let test = isAndroid()
```




## isChrome())
### Information
Detects if Chrome or not.

### Returns

- Type: Boolean
### Example

```
let test = isChrome()
```




## isEdge())
### Information
Detects if Edge or not.

### Returns

- Type: Boolean
### Example

```
let test = isEdge()
```




## isFireFox())
### Information
Detects if FireFox or not.

### Example

```
let test = isFireFox()
```




## isIOS())
### Information
Detects if iOS or not.

### Returns

- Type: Boolean
### Example

```
let test = isIOS()
```




## isMobile())
### Information
Detects if mobile or not.

### Returns

- Type: Boolean
### Example

```
let mobile = isMobile()
```




## isOpera())
### Information
Detects if Opera or not.

### Returns

- Type: Boolean
### Example

```
let test = isOpera()
```




## isSafari())
### Information
Detects if Safari or not.

### Returns

- Type: Boolean
### Example

```
let test = isSafari()
```




## isTouchDevice())
### Information
Returns boolean of whether the deivce is touch enabled.

### Parameters

### Returns

- Type: Boolean
### Example

```
const isTouchDevice = isTouchDevice()
```




## getElementPos(ele))
### Information
Gets an elements offset top position.

### Parameters

- ele
	- Type: Element
	- Required: true
	- Default: null
	- Info: Element to get the position of.

### Returns

- Type: Number
- Info: Returns fall if unable to get offsetTop

### Example

```
let pos = getElementOffsetTop(myElement)
```




## getElementPosition(el))
### Information
Gets an elements position.

### Parameters

- el
	- Type: Element
	- Required: true
	- Default: null
	- Info: Element to get the position of.

### Returns

### Example

```
let pos = getElementPosition(myElement)
```




## getElementPos(el))
### Information
Gets an elements position.

### Parameters

- el
	- Type: Element
	- Required: true
	- Default: null
	- Info: Element to get the position of.

### Returns

- Object
	- left
		- Type: Number
		- Info: x or left
	- top
		- Type: Number
		- Info: y or top
### Example

```
let pos = getElementPos(myElement)
```




## hasClass(elementOrId,ele))
### Information
Gets an elements offset top position.

### Parameters

- elementOrId
	- Type: Element||ElementID
	- Required: true
	- Default: null

- ele
	- Type: Element
	- Required: true
	- Default: null
	- Info: Element to get the position of.

### Returns

- Type: Boolean
### Example

```
let classAttached = hasClass(myElement,'selected')
```




## isDOM(obj))
### Information
Checks if object is HTMLElement.

### Parameters

- obj
	- Type: Element||Object
	- Required: true
	- Default: null
	- Info: Element / Object to check.

### Example

```
let result = isDOM(myElement)
```




## isElement(ele))
### Information
Checks if object is HTMLElement.

### Parameters

- ele
	- Type: Element||Object
	- Required: true
	- Default: null
	- Info: Element / Object to check.

### Example

```
let result = isElement(myElement)
```




## isElement2(ele))
### Information
Checks if object is HTMLElement (Method 2).

### Parameters

- ele
	- Type: Element||Object
	- Required: true
	- Default: null
	- Info: Element / Object to check.

### Example

```
let result = isElement2(myElement)
```




## setHTML(elementOrId,str,mode))
### Information
Set a an elements HTML content.

### Parameters

- elementOrId
	- Type: Element||ElementID
	- Required: true
	- Default: null
	- Info: The element or the element ID.

- str
	- Type: String||Number
	- Required: true
	- Default: null
	- Info: The content you want to put into the html element.

- mode
	- Type: String (set|append|prepend)
	- Required: false
	- Default: Set
	- Info: The method in which to set the HTML of the targeted element, set it clearing all content or to append or prepend you content.

### Example

```
setHTML(myElement,'hello world')
setHTML(myElement,'hello world','append')
setHTML(myElement,'hello world','prepend')

setHTML('my-element-id-1','hello world')
setHTML('my-element-id-2','hello world','append')
setHTML('my-element-id-3','hello world','prepend')
```




## onReady(fn))
### Information
Checks if the DOM is ready and then executes a function.

### Parameters

- fn
	- Type: Function
	- Required: true
	- Default: null

### Example

```
onReady(function()){
	/* DOM is ready, do your thing */
});

/* or */
onReady(() =>{
	/* DOM is ready, do your thing */
});
```




## wordCountFilter(str,maxWords))
### Information
Takes a string, checks it for number of words and returns the string but cuts it to the max number of words you set.

### Parameters

- str
	- Type: String
	- Required: true
	- Default: null

- maxWords
	- Type: Number
	- Required: true
	- Default: null

### Returns

- Object
### Example

```
let limitedSentence = wordCountFilter(source,20)
```




## setOptionSelectedIndex(selectElement,selectedValue))
### Information
Sets an option of HTML select element by value.

### Parameters

- selectElement
	- Type: HTML Select Element
	- Required: true

- selectedValue
	- Type: String
	- Required: true

### Example

```
let limitedSentence = wordCountFilter(source,20)
```




## imageToCanvas(url))
### Information
Loads an image and places it on a canvas of matching dimensions.

### Parameters

- url
	- Type: String
	- Required: true
	- Default: null
	- Info: Path/URL to the image to load and place on the canvas

### Returns

- Type: HTMLCanvasElement
### Example

```
let canvas1 = await imageToCanvas('./assets/photo.webp')
```




## fetchHtml(url))
### Information
Loads a html file and returns it as a string

### Parameters

- url
	- Type: String
	- Required: true
	- Default: null
	- Info: Path/URL to the file to load

### Returns

- Type: String
### Example

```
let data = await fetchHtml('./pages/modal-user-content.html')
```




## fetchJson(url))
### Information
Loads a json file and returns it as an object

### Parameters

- url
	- Type: String
	- Required: true
	- Default: null
	- Info: Path/URL to the file to load

### Returns

- Object
### Example

```
let data = await fetchJson('./data/config.json')
```




## loadAndAttachImage(imgElement,src))
### Information
Loads an image file and auto attaches it to the head section of the document.

### Parameters

- imgElement
	- Type: String
	- Required: false
	- Default: null
	- Info: Image element to load the image into.

- src
	- Type: String
	- Required: true
	- Default: null
	- Info: Path/URL to the file to load

### Returns

- Type: Promise
### Example

```
loadAndAttachImage(imgElement1,'./assets/images/products/001.jpg')
.then(()=>{ log('loaded and attached'); })
.catch((e)=>{ log(e); })
```




## loadCss(href,onComplete))
### Information
Loads a css file and auto attaches it to the head section of the document.

### Parameters

- href
	- Type: String
	- Required: true
	- Default: null
	- Info: Path/URL to the css file to load

- onComplete
	- Type: Function
	- Required: false
	- Default: null
	- Info: On complete callback

### Example

```
loadCss('./include/css/style-sheet-5.css',onStyleSheet5Loaded)
```




## loadJson(url,onComplete,onError))
### Information
Loads a JSON file and returns it via the onComplete callback function.

### Parameters

- url
	- Type: String
	- Required: true
	- Default: null
	- Info: Path/URL to the file to load.

- onComplete
	- Type: Function
	- Required: false
	- Default: null
	- Info: On complete callback, sends json response back as a parameter.

- onError
	- Type: Function
	- Required: false
	- Default: null
	- Info: On error callback function handler

### Example

```
loadJson('./data/config.json',onLoadedHandler)
```




## loadScript(src,onComplete,onProgress))
### Information
Loads a JavaScript file and auto attaches it to the head section of the document.

### Parameters

- src
	- Type: String
	- Required: true
	- Default: null
	- Info: Path/URL to the js file to load

- onComplete
	- Type: Function
	- Required: false
	- Default: null
	- Info: On complete callback

- onProgress
	- Type: Function
	- Required: false
	- Default: null
	- Info: On progress callback, sends back the percentage loaded

### Example

```
loadScript('./include/js/script-5.js',onLoadedHandler)
```




## promiseLoadCss(href))
### Information
Loads a css file and auto attaches it to the head section of the document.

### Parameters

- href
	- Type: String
	- Required: true
	- Default: null
	- Info: Path/URL to the css file to load

### Returns

- Type: Promise
### Example

```
promiseLoadCss('./include/css/style-sheet-5.css')
.then(()=>{ log('loaded'); })
.catch((e)=>{ log(e); })
```




## promiseLoadImage(ele,src))
### Information
Loads an image file and auto attaches it to the head section of the document.

### Parameters

- ele
	- Type: String
	- Required: false
	- Default: null
	- Info: Image element to load the image into.

- src
	- Type: String
	- Required: true
	- Default: null
	- Info: Path/URL to the file to load

### Returns

- Type: Promise
### Example

```
PromiseLoadImage(imgElement1,'./assets/images/products/001.jpg')
.then(()=>{ log('loaded and attached'); })
.catch((e)=>{ log(e); })
```




## promiseLoadJson(url))
### Information
Loads a json file and returns it via promise resolve

### Parameters

- url
	- Type: String
	- Required: true
	- Default: null
	- Info: Path/URL to the file to load

### Returns

- Type: Promise
### Example

```
PromiseLoadJson('./data/config.json')
.then((data)=>{ log(data); })
.catch((e)=>{ log(e); })
```




## promiseLoadScript(src))
### Information
Loads a JavaScript file and attaches it to the document head

### Parameters

- src
	- Type: String
	- Required: true
	- Default: null
	- Info: Path/URL to the file to load

### Returns

- Type: Promise
### Example

```
promiseLoadScript('./includes/js/onDemandFile1.js')
.then(()=>{ log('loaded and attached'); })
.catch((e)=>{ log(e); })
```




## getRandomBoolean())
### Information
Returns a random boolean.

### Returns

- Type: Boolean
### Example

```
let randomBoolean = getRandomBoolean()
```




## getRandomFloat(min,max))
### Information
Returns a number (float) between 2 numbers.

### Parameters

- min
	- Type: Number
	- Required: true
	- Info: Min value.

- max
	- Type: Number
	- Required: true
	- Info: Max value.

### Returns

- Type: Number
### Example

```
let randomFloat = getRandomFloat(1.4,42.232)
```




## getRandomInt(min,max))
### Information
Returns a number (int) between 2 numbers.

### Parameters

- min
	- Type: Number
	- Required: true
	- Info: Min value.

- max
	- Type: Number
	- Required: true
	- Info: Max value.

### Returns

- Type: Number
### Example

```
let randomInt = getRandomInt(0,100)
```




## getRange(value 1,Value 2))
### Information
Returns absolute value of the range between 2 numbers.

### Parameters

- value 1
	- Type: Number
	- Required: true
	- Info: Value 1.

- Value 2
	- Type: Number
	- Required: true
	- Info: Value 2.

### Returns

- Type: Number
### Example

```
let range = getRange(0,100)
```




## isEven(n))
### Information
Detects if a number is even or not.

### Parameters

- n
	- Type: Number
	- Required: true
	- Info: Number to check.

### Returns

- Type: Boolean
### Example

```
let even = isEven(3)
```




## isOdd(n))
### Information
Detects if a number is odd or not.

### Parameters

- n
	- Type: Number
	- Required: true
	- Info: Number to check.

### Returns

- Type: Boolean
### Example

```
let odd = isOdd(3)
```




## normaliseRange(min,max,v))
### Information
Normalises a value to be between 0 and 1, based on a range between min and max. min being 0 and max being 1.

### Parameters

- min
	- Type: Number
	- Required: true
	- Info: Min value.

- max
	- Type: Number
	- Required: true
	- Info: Max value.

- v
	- Type: Number
	- Required: true
	- Info: Value to normalise.

### Returns

- Type: Number
### Example

```
let n1 = normaliseRange(0,100,50)
/* n1 = 0.5 */
let n2 = normaliseRange(0,100,200)
/* n2 = 1 */
let n3 = normaliseRange(0,100,-200)
/* n3 = 0 */
```




## parseArrayToFloat(arr))
### Information
Parses each entry in the supplied array with Math.float and returns it.

### Parameters

- arr
	- Type: Array
	- Required: true
	- Info: Array to parse.

### Returns

- Type: Array
### Example

```
let floatParsedArray = parseArrayToFloat(arr)
```




## parseArrayToInt(arr))
### Information
Parses each entry in the supplied array with Math.int and returns it.

### Parameters

- arr
	- Type: Array
	- Required: true
	- Info: Array to parse.

### Returns

- Type: Array
### Example

```
let intParsedArray = parseArrayToInt(arr)
```




## roundTo(v,dec))
### Information
Rounds a value to a set number of decimal places.

### Parameters

- v
	- Type: Number
	- Required: true
	- Info: Value to round.

- dec
	- Type: Number
	- Required: true
	- Info: Number of decimal places to round to.

### Returns

- Type: Number
### Example

```
let r = roundTo(3.142,2)
```




## getGUID())
### Information
Returns a GUI string.

### Returns

- Type: String
### Example

```
let guid = getGUID()
```




## getUID(len))
### Information
Generates a unique id. NOTE: Max length of 34.

### Parameters

- len
	- Type: Number
	- Required: true
	- Info: Length of the unique id to generate.

### Returns

- Type: String
### Example

```
let uid = getUID(12)
```




## isAlphaNumeric(v))
### Information
Checks if the input is alphanumeric or not.

### Parameters

- v
	- Type: String|Number
	- Required: true
	- Info: Param to check.

### Returns

- Type: Boolean
### Example

```
let an = isAlphaNumeric('a43-')
```




## isArray(input))
### Information
Checks if the input is an array or not.

### Parameters

- input
	- Type: *
	- Required: true
	- Info: Param to check.

### Returns

- Type: Boolean
### Example

```
let check = isArray(4)
```




## isBool(input))
### Information
Checks if the input is a boolean or not.

### Parameters

- input
	- Type: *
	- Required: true
	- Info: Param to check.

### Returns

- Type: Boolean
### Example

```
let check = isBool(4)
```




## isBoolean(input))
### Information
Checks if the input is a boolean or not.

### Parameters

- input
	- Type: *
	- Required: true
	- Info: Param to check.

### Returns

- Type: Boolean
### Example

```
let check = isBoolean(4)
```




## isNumber(n))
### Information
Checks if the input is number or not.

### Parameters

- n
	- Type: *
	- Required: true
	- Info: Param to check.

### Returns

- Type: Boolean
### Example

```
let check = isNumber('a')
```




## isNumeric(n))
### Information
Checks if the input is numeric or not.

### Parameters

- n
	- Type: *
	- Required: true
	- Info: Param to check.

### Returns

- Type: Boolean
### Example

```
let check = isNumeric('a')
```




## MouseScrollHandler(onScrollUp,onScrollDown))
### Information
Nukes the moon.

### Link
<a href='jsonData.link' target='_blank'>https://aftc.io</a>

### Parameters

- onScrollUp
	- Type: Function
	- Required: true
	- Default: null
	- Info: The function to call when mouse wheel scroll up is detected

- onScrollDown
	- Type: Function
	- Required: true
	- Default: null
	- Info: The function to call when mouse wheel scroll down is detected

### Example

```
new MouseScrollHandler(onScrollUpHandler,onScrollDownHandler);
```




## getObjectPropByKey({object},key))
### Information
Returns the /property of the supplied object by name/key.

### Parameters

- obj
	- Type: Object
	- Required: true
	- Info: The object you want to get the property in.

- key
	- Type: String
	- Required: true
	- Info: The name of the property in the object you want to fetch.

### Returns

- Type: Any
### Example

```
let colourDefinitions = getObjectPropByKey(myObj,'colours')
```




## cutStringTo(str,len))
### Information
Returns a string at the desired length.

### Parameters

- str
	- Type: String
	- Required: true
	- Info: String to cut.

- len
	- Type: Number
	- Required: true
	- Info: Number of characters to return / Length of string to return.

### Returns

- Type: String
### Example

```
let cutString = cutStringTo('abcd',2)
```




## escapeHTML(str))
### Information
Returns a string that has the standard html tags escaped.

### Parameters

- str
	- Type: String
	- Required: true
	- Info: String to escape html tags.

### Returns

- Type: String
### Example

```
let newString = escapeHTML('some html')
```




## getAnchor(url))
### Information
Returns the anchor from a url string.

### Parameters

- url
	- Type: String
	- Required: true
	- Info: String to get anchor from.

### Returns

- Type: String
### Example

```
let anchor = getAnchor(url)
```




## getCleanJSONString(s))
### Information
Attempts to clean up special characters in a JSON string and make it JSON valid.

### Parameters

- s
	- Type: String
	- Required: true
	- Info: JSON String to parse.

### Returns

- Type: String
### Example

```
let newString = getCleanJSONString(oldString)
```




## getFileExtension(str))
### Information
Attempts to get the file extension from a supplied string.

### Parameters

- str
	- Type: String
	- Required: true
	- Info: The string to get the file extension from.

### Returns

- Type: String
### Example

```
let ext = getFileExtension(path)
```




## getLastPartOfUrl(url))
### Information
Returns the last segment of a url split by slashes.

### Parameters

- url
	- Type: String
	- Required: true
	- Info: The url string to get the last part from.

### Returns

- Type: String
### Example

```
let lastSegment = getLastPartOfUrl(url)
```




## getRandomString(len))
### Information
Returns a random string of letters A-Z a-z of a specified length.

### Parameters

- len
	- Type: Number
	- Required: true
	- Info: The length of the random string to generate.

### Returns

- Type: String
### Example

```
let randomLetterString = getRandomString(256)
```




## getStringBetween(source,start,end))
### Information
Returns the string between a start and end string marker matches from the source string.

### Parameters

- source
	- Type: String
	- Required: true
	- Info: The length to parse.

- start
	- Type: String
	- Required: true
	- Info: The starting string marker in the source string.

- end
	- Type: String
	- Required: true
	- Info: The ending string marker in the source string.

### Returns

- Type: String
### Example

```
let strBetween = getStringBetween(sourceString,'start-marker','end-marker')
```




## getStringBetween2(source,start,end))
### Information
Returns an array of all the strings found between a start and end markers. Max of 500 items in array returned.

### Parameters

- source
	- Type: String
	- Required: true
	- Info: The length to parse.

- start
	- Type: String
	- Required: true
	- Info: The starting string marker in the source string.

- end
	- Type: String
	- Required: true
	- Info: The ending string marker in the source string.

### Returns

- Type: Array
- Info: Max 500 results

### Example

```
let found = getStringsBetween2(sourceString,'start-marker','end-marker')
```




## getWordCount(str))
### Information
Returns the number of words in a string based on spaces.

### Parameters

- str
	- Type: String
	- Required: true
	- Info: The string to count word from.

### Returns

- Type: Number
### Example

```
let wordCount = getWordCount(sourceString)
```




## inString(needle,haystack))
### Information
Looks for a string in a string.

### Parameters

- needle
	- Type: String
	- Required: true
	- Info: The string to find.

- haystack
	- Type: String
	- Required: true
	- Info: The string to search.

### Returns

- Type: Boolean
### Example

```
let stringFound = inString(needle,haystack)
```




## isInString(needle,haystack))
### Information
Looks for a string in a string.

### Parameters

- needle
	- Type: String
	- Required: true
	- Info: The string to find.

- haystack
	- Type: String
	- Required: true
	- Info: The string to search.

### Returns

- Type: Boolean
### Example

```
let stringFound = isInString(needle,haystack)
```




## lTrimBy(str,by))
### Information
Trims a string from the left (start) by a specified number of characters.

### Parameters

- str
	- Type: String
	- Required: true
	- Info: The string to find.

- by
	- Type: Number
	- Required: true
	- Info: The number of characters to trim from the left (start) of a string.

### Returns

- Type: String
### Example

```
let trimmedString = lTrimBy(str,4)
```




## regExReplaceAll(needle,rep,haystack))
### Information
Uses regex to replace all instances of a string in a string with what you specify.

### Parameters

- needle
	- Type: String
	- Required: true
	- Info: The string to replace.

- rep
	- Type: String
	- Required: true
	- Info: The string to replace the needle (found) string with.

- haystack
	- Type: String
	- Required: true
	- Info: The string to parse.

### Returns

- Type: String
### Example

```
let newString = regExReplaceAll(needle, rep, haystack)
```




## removeFileFromPath(path))
### Information
Removes the file from a file path.

### Parameters

- path
	- Type: String
	- Required: true
	- Info: The file path to process.

### Returns

- Type: String
### Example

```
let path = removeFileFromPath(fullPath)
```




## replaceAll(needle,replace,haystack))
### Information
Uses a split join method to replace all occurrences of a string. See regExReplaceAll for an alternate method.

### Parameters

- needle
	- Type: String
	- Required: true
	- Info: The string to replace.

- replace
	- Type: String
	- Required: true
	- Info: The string to replace the needle (found) string with.

- haystack
	- Type: String
	- Required: true
	- Info: The string to parse.

### Returns

- Type: String
### Example

```
let newString1 = replaceAll(needle, repWith, haystack)
let newString2 = regExReplaceAll(needle, repWith, haystack)
```




## replaceDoubleBackSlash(str,rep))
### Information
Replaces double back slashes in a string via regex with your specified string.

### Parameters

- str
	- Type: String
	- Required: true
	- Info: The string to process.

- rep
	- Type: String
	- Required: true
	- Info: The string to replace double back slashes with.

### Returns

- Type: String
### Example

```
let processedString = replaceDoubleBackSlash(str,replaceWith)
```




## replaceDoubleForwardSlash(str,rep))
### Information
Replaces double forward slashes in a string via regex with your specified string.

### Parameters

- str
	- Type: String
	- Required: true
	- Info: The string to process.

- rep
	- Type: String
	- Required: true
	- Info: The string to replace double forward slashes with.

### Returns

- Type: String
### Example

```
let processedString = replaceDoubleForwardSlash(str,replaceWith)
```




## rTrimBy(str,trimBy))
### Information
Trims a string from the right (end) by a specified number of characters.

### Parameters

- str
	- Type: String
	- Required: true
	- Info: The string to find.

- trimBy
	- Type: Number
	- Required: true
	- Info: The number of characters to trim from the right (end) of a string.

### Returns

- Type: String
### Example

```
let trimmedString = rTrimBy(str,4)
```




## trimStringBy(str,trimBy))
### Information
Trims a string from the right (end) by a specified number of characters.

### Parameters

- str
	- Type: String
	- Required: true
	- Info: The string to find.

- trimBy
	- Type: Number
	- Required: true
	- Info: The number of characters to trim from the right (end) of a string.

### Returns

- Type: String
### Example

```
let trimmedString = trimStringBy(str,4)
```




## ucFirst(s))
### Information
Makes the first letter of a string uppercase.

### Parameters

- s
	- Type: String
	- Required: true
	- Info: The string to make the first letter upper case.

### Returns

- Type: String
### Example

```
let ucFirstString = ucFirst('hello')
```




## SwipeHandler({object}))
### Information
Swipe handler, currently detects left & right swipes.

### Parameters

- Object:

	- onSwipeLeft
		- Required: false
		- Default: false
		- Info: The function you want to call when a swipe left is detected.
	- onSwipeRight
		- Required: false
		- Default: false
		- Info: The function you want to call when a swipe right is detected.
	- onSwipeUp
		- Required: false
		- Default: false
		- Info: The function you want to call when a swipe up is detected.
	- onSwipeDown
		- Required: false
		- Default: false
		- Info: The function you want to call when a swipe down is detected.
	- horizontalTolerance
		- Required: false
		- Default: 50
		- Info: The distance your finger has to travel on the horizontal axis for a swipe left or right to be detected.
	- onSwipeUp
		- Required: false
		- Default: false
		- Info: The function you want to call when a swipe left is detected.
	- onSwipeDown
		- Required: false
		- Default: false
		- Info: The function you want to call when a swipe right is detected.
	- verticalTolerance
		- Required: false
		- Default: 50
		- Info: The distance your finger has to travel on the vertical axis for a swipe up or down to be detected.
	- swipeThrottleTimeout
		- Required: false
		- Default: 250
		- Info: The amount of milliseconds before another swipe event can be fired.

### Example

```
new SwipeHandler({config})
```




## doesUrlKeyExist(key))
### Information
Returns a string.

### Parameters

- key
	- Type: String
	- Required: true
	- Info: URL Parameter key to look for

### Returns

- Type: Boolean
### Example

```
let debug = doesUrlKeyExist('debug')
if (debug) {
   // do something
}
```




## getRoute(url))
### Information
Returns a route string.

### Parameters

- url
	- Type: String
	- Required: false
	- Info: String to parse into a route, if left out it will get the current url/uri.

### Returns

- Type: String
### Example

```
let usersRoute = getRoute('https://domain.com/users')
let currentRoute = getRoute()
```




## getUrlKeyValue(key))
### Information
Returns the value of a url key value pair.

### Parameters

- key
	- Type: String
	- Required: true
	- Info: URL key value to obtain

### Returns

- Type: String | null
### Example

```
let page = getUrlKeyValue('page')
if (debug) {
   // do something
}
```




## isEmail(email))
### Information
Validates an email address via regex.

### Parameters

- email
	- Type: String
	- Required: true
	- Info: The email string to validate.

### Returns

- Type: Boolean
### Example

```
let isValidEmail = isEmail('darcey.lloyd@gmail.com')
```




## promiseAttachVideo(video,src))
### Information
Attaches a video file to a video and once it's meta data is available it will resolve the promise. Useful for getting width, height and duration.

### Parameters

- video
	- Type: Video
	- Required: true
	- Info: The video to attach to.

- src
	- Type: String
	- Required: true
	- Info: The src of the video file to attach to the video element or video javascript instance.

### Returns

- Type: Promise with object with props {width,height,duration}
### Example

```
promiseAttachVideo(vid,vidSrc)
then((res)=>{ console.log('video attached and ready') })
```




## promiseVideoEnd(video))
### Information
Returns a promise resolve on video end.

### Parameters

- video
	- Type: Video
	- Required: true
	- Info: The video to attach to.

### Returns

- Type: Promise resolve on video end
### Example

```
promiseVideoEnd(vid)
then((res)=>{ console.log('video playback complete') })
```




