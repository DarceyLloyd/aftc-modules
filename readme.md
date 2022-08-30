# <b>AFTC-MODULES v1.16.3</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## A collection of useful everyday utilities / functions for JavaScript & TypeScript.


<h3><b>Find AFTC-MODULES useful? Please Donate...</b></h3>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


 <hr>
 <br>



## <b>Latest changes</b>
- added getRoute(url:string(optional))
- Changed LazyLog from export default to export (no default)
- Imporved build script to build a comment free aftc-modules.js concatinated file
- Fixed some bugs in generation of both index.js and index.d.ts for better VSCode integration

- Logging can now be attached globally via:
```
LazyLog();
log("hello world");
warn("hello world");
error("hello world");
DisableLazyLog(); // Disables it globally (window scope)
EnableLazyLog(); // Enables it globally (window scope)

// Even in webpack

- Updated build process and enhanced the build tool to generate index.js and index.d.ts (types) for better intellisense
- Updated to latest version of TS
- and then some...
```

<hr><br><br>




### <b>Want the ES5 (old) version?</b>
Your looking for aftc.js. Visit: https://github.com/DarceyLloyd/AFTC.js

<hr><br><br>



### <b>Installation</b>
```
npm i aftc-modules
```

<hr><br><br>


## <b>Available Methods & Class's:</b>


 - <b>inertiaTo(current,target,amount)</b>
 - <b>arrayClear(arr)</b>
 - <b>arrayContains(needle,haystack)</b>
 - <b>arrayEmpty(arr)</b>
 - <b>arrayGetMax(arr)</b>
 - <b>arrayGetMin(arr)</b>
 - <b>arrayRemoveIndex(arr,index)</b>
 - <b>arrayRemoveValue(arr,value)</b>
 - <b>arrayShuffle(arr)</b>
 - <b>arrayShuffle2(arr)</b>
 - <b>isArrayInString(input,arr)</b>
 - <b>isInArray(needle,haystack)</b>
 - <b>isStringInArray(needle,haystack)</b>
 - <b>getBrowser()</b>
 - <b>getBrowserX()</b>
 - <b>getBrowserY()</b>
 - <b>isInViewport(el)</b>
 - <b>argsToObject({object},{object},strict)</b>
 - <b>boolToInt(bool)</b>
 - <b>boolToString(bool)</b>
 - <b>boolToYesNo(bool)</b>
 - <b>degToRad(input)</b>
 - <b>hexToRgb(hex)</b>
 - <b>numToHex(num)</b>
 - <b>objectToObject({object},{object},strict)</b>
 - <b>radToDeg(input)</b>
 - <b>rgbToHex(r,g,b)</b>
 - <b>rgbToHex2(r,g,b)</b>
 - <b>stringToBool(str)</b>
 - <b>getCookie(name)</b>
 - <b>listCookies()</b>
 - <b>setCookie(name,cvalue,exdays)</b>
 - <b>getDaysBetween(startDateTime,endDateTime)</b>
 - <b>getMySQLDateTimeString()</b>
 - <b>getUKDate(dte,separator)</b>
 - <b>getUKDateFromDbDateTime(dbDateString,separator)</b>
 - <b>getUKDateTime(dte,separator)</b>
 - <b>getUkDateTimeFromDbDateTime(dte,separator)</b>
 - <b>getUSDate(dte,separator)</b>
 - <b>appendTo(elementOrId,msg,endOfLine)</b>
 - <b>attachDebug(no,position,ele)</b>
 - <b>debugTo(index,str)</b>
 - <b>LazyLog(NA)</b>
 - <b>log(arg)</b>
 - <b>logDisable()</b>
 - <b>logEnable()</b>
 - <b>Logger()</b>
 - <b>logTo(elementOrId,msg,append,endOfLine)</b>
 - <b>warn(arg)</b>
 - <b>getOS()</b>
 - <b>isAndroid()</b>
 - <b>isChrome()</b>
 - <b>isEdge()</b>
 - <b>isFireFox()</b>
 - <b>isIOS()</b>
 - <b>isMobile()</b>
 - <b>isOpera()</b>
 - <b>isSafari()</b>
 - <b>getElementPosition(el)</b>
 - <b>getElementPos(el)</b>
 - <b>isDOM(obj)</b>
 - <b>isElement(ele)</b>
 - <b>isElement2(ele)</b>
 - <b>getElementPos(ele)</b>
 - <b>hasClass(elementOrId,ele)</b>
 - <b>setHTML(elementOrId,str,mode)</b>
 - <b>onReady(fn)</b>
 - <b>wordCountFilter(str,maxWords)</b>
 - <b>setOptionSelectedIndex(selectElement,selectedValue)</b>
 - <b>imageToCanvas(url)</b>
 - <b>fetchHtml(url)</b>
 - <b>fetchJson(url)</b>
 - <b>loadAndAttachImage(imgElement,src)</b>
 - <b>loadCss(href,onComplete)</b>
 - <b>loadJson(url,onComplete,onError)</b>
 - <b>loadScript(src,onComplete,onProgress)</b>
 - <b>promiseLoadCss(href)</b>
 - <b>promiseLoadImage(ele,src)</b>
 - <b>promiseLoadJson(url)</b>
 - <b>promiseLoadScript(src)</b>
 - <b>getRandomBoolean()</b>
 - <b>getRandomFloat(min,max)</b>
 - <b>getRandomInt(min,max)</b>
 - <b>getRange(value 1,Value 2)</b>
 - <b>isEven(n)</b>
 - <b>isOdd(n)</b>
 - <b>normaliseRange(min,max,v)</b>
 - <b>parseArrayToFloat(arr)</b>
 - <b>parseArrayToInt(arr)</b>
 - <b>roundTo(v,dec)</b>
 - <b>getGUID()</b>
 - <b>getUID(len)</b>
 - <b>isAlphaNumeric(v)</b>
 - <b>isArray(input)</b>
 - <b>isBool(input)</b>
 - <b>isBoolean(input)</b>
 - <b>isNumber(n)</b>
 - <b>isNumeric(n)</b>
 - <b>MouseScrollHandler(onScrollUp,onScrollDown)</b>
 - <b>cutStringTo(str,len)</b>
 - <b>escapeHTML(str)</b>
 - <b>getAnchor(url)</b>
 - <b>getCleanJSONString(s)</b>
 - <b>getFileExtension(str)</b>
 - <b>getLastPartOfUrl(url)</b>
 - <b>getRandomString(len)</b>
 - <b>getStringBetween(source,start,end)</b>
 - <b>getStringBetween2(source,start,end)</b>
 - <b>getWordCount(str)</b>
 - <b>inString(needle,haystack)</b>
 - <b>isInString(needle,haystack)</b>
 - <b>lTrimBy(str,by)</b>
 - <b>regExReplaceAll(needle,rep,haystack)</b>
 - <b>removeFileFromPath(path)</b>
 - <b>replaceAll(needle,replace,haystack)</b>
 - <b>replaceDoubleBackSlash(str,rep)</b>
 - <b>replaceDoubleForwardSlash(str,rep)</b>
 - <b>rTrimBy(str,trimBy)</b>
 - <b>trimStringBy(str,trimBy)</b>
 - <b>ucFirst(s)</b>
 - <b>SwipeHandler({object})</b>
 - <b>getRoute(url)</b>
 - <b>isEmail(email)</b>
 - <b>promiseAttachVideo(video,src)</b>
 - <b>promiseVideoEnd(video)</b>

<hr><br><br>



<hr><br><br>




# <b>Documentation</b>

## <b>inertiaTo(current,target,amount))</b>
### <b>Information</b>
Calculates the target value of inertia in a loop/requestAnimationFrame from 1 value to another at speed.

### <b>Parameters</b>

- <b>current</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Current value.

- <b>target</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Value to reach.

- <b>amount</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Inertia speed (dec/inc speed).

### <b>Example</b>

```
let newX = inertiaTo(curX,targetX,0.5)
```


<hr><br><br>

## <b>arrayClear(arr))</b>
### <b>Information</b>
Clears an array

### <b>Parameters</b>

- <b>arr</b>
	- <b>Type:</b> array
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The array you want to clear / empty

### <b>Example</b>

```
arrayClear(myArray)
```


<hr><br><br>

## <b>arrayContains(needle,haystack))</b>
### <b>Information</b>
Finds a needle in a haystack.

### <b>Parameters</b>

- <b>needle</b>
	- <b>Type:</b> string
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> What you are looking for.

- <b>haystack</b>
	- <b>Type:</b> array
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The array you want to search.



<hr><br><br>

## <b>arrayEmpty(arr))</b>
### <b>Information</b>
Clears an array

### <b>Parameters</b>

- <b>arr</b>
	- <b>Type:</b> array
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The array you want to clear / empty

### <b>Example</b>

```
arrayEmpty(myArray)
```


<hr><br><br>

## <b>arrayGetMax(arr))</b>
### <b>Information</b>
Gets the maximum value from the supplied array.

### <b>Parameters</b>

- <b>arr</b>
	- <b>Type:</b> array
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The array you want to get the maximum value within.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
let max = arrayGetMax(myArray)
```


<hr><br><br>

## <b>arrayGetMin(arr))</b>
### <b>Information</b>
Gets the minimum value from the supplied array.

### <b>Parameters</b>

- <b>arr</b>
	- <b>Type:</b> array
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The array you want to get the minimum value from.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
let max = arrayGetMin(myArray)
```


<hr><br><br>

## <b>arrayRemoveIndex(arr,index))</b>
### <b>Information</b>
Removes an index from the supplied array.

### <b>Parameters</b>

- <b>arr</b>
	- <b>Type:</b> array
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The array you want to remove the index from.

- <b>index</b>
	- <b>Type:</b> number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The index which you want to remove.

### <b>Returns</b>

- <b>Type: </b>Array
### <b>Example</b>

```
let max = arrayRemoveIndex(arr,index)
```


<hr><br><br>

## <b>arrayRemoveValue(arr,value))</b>
### <b>Information</b>
Removes a value from the supplied array.

### <b>Parameters</b>

- <b>arr</b>
	- <b>Type:</b> array
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The array you want to remove the value from.

- <b>value</b>
	- <b>Type:</b> string || number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The value which you want to remove from the array.

### <b>Returns</b>

- <b>Type: </b>Array
### <b>Example</b>

```
let max = arrayRemoveValue(arr, value)
```


<hr><br><br>

## <b>arrayShuffle(arr))</b>
### <b>Information</b>
Shuffles / Randomizes an array.

### <b>Parameters</b>

- <b>arr</b>
	- <b>Type:</b> array
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The array you want to shuffle.

### <b>Returns</b>

- <b>Type: </b>Array
### <b>Example</b>

```
let shuffledArray = arrayShuffle(myArray)
```


<hr><br><br>

## <b>arrayShuffle2(arr))</b>
### <b>Information</b>
Shuffles / Randomizes an array (method 2).

### <b>Parameters</b>

- <b>arr</b>
	- <b>Type:</b> array
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The array you want to shuffle.

### <b>Returns</b>

- <b>Type: </b>Array
### <b>Example</b>

```
let shuffledArray = arrayShuffle2(myArray)
```


<hr><br><br>

## <b>isArrayInString(input,arr))</b>
### <b>Information</b>
Searches the array for a string.

### <b>Parameters</b>

- <b>input</b>
	- <b>Type:</b> string
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> String you want to look for matches in.

- <b>arr</b>
	- <b>Type:</b> array
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The array of strings you want to search for in input.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let found = isStringInArray(needle, haystack)
```


<hr><br><br>

## <b>isInArray(needle,haystack))</b>
### <b>Information</b>
Searches the array for your value.

### <b>Parameters</b>

- <b>needle</b>
	- <b>Type:</b> *
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> What you are looking for.

- <b>haystack</b>
	- <b>Type:</b> array
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The array you want to search.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let found = isInArray(needle, haystack)
```


<hr><br><br>

## <b>isStringInArray(needle,haystack))</b>
### <b>Information</b>
Searches the array for a string.

### <b>Parameters</b>

- <b>needle</b>
	- <b>Type:</b> string
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> String you are looking for.

- <b>haystack</b>
	- <b>Type:</b> array
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The array you want to search.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let found = isStringInArray(needle, haystack)
```


<hr><br><br>

## <b>getBrowser())</b>
### <b>Information</b>
Gets the name of the browser you are using (opera | chrome | safari | firefox | msie | trident | edge).

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let browser = getBrowser()
```


<hr><br><br>

## <b>getBrowserX())</b>
### <b>Information</b>
Gets the viewport x position.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
let x = getBrowserX()
```


<hr><br><br>

## <b>getBrowserY())</b>
### <b>Information</b>
Gets the viewport y position.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
let x = getBrowserY()
```


<hr><br><br>

## <b>isInViewport(el))</b>
### <b>Information</b>
Checks whether an element is in view.

### <b>Parameters</b>

- <b>el</b>
	- <b>Type:</b> element
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The element you want to check is in view

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let isInView = isInViewport(myElement)
```


<hr><br><br>

## <b>argsToObject({object},{object},strict))</b>
### <b>Information</b>
Parses arguments to an object of your choice with strict or relaxed assigning features (good for defaults and instantiation processing).

### <b>Parameters</b>

- <b>src</b>
	- <b>Type:</b> Object
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The object from the function or class. Eg: Use arguments[0] from constructor in a class. Or any object.

- <b>dest</b>
	- <b>Type:</b> Object
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The arguments object you wish to assign arguments to.

- <b>strict</b>
	- <b>Type:</b> Boolean
	- <b>Required:</b> false
	- <b>Default:</b> true
	- <b>Info:</b> Whether you want to enable strict assignments only. Enabling strict will warn users of the function that the argument supplied is not supported.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

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


<hr><br><br>

## <b>boolToInt(bool))</b>
### <b>Information</b>
Converts a boolean to a number.

### <b>Parameters</b>

- <b>bool</b>
	- <b>Type:</b> Boolean
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The variable you wish to convert.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
let strBool = boolToInt(isMobile)
```


<hr><br><br>

## <b>boolToString(bool))</b>
### <b>Information</b>
Converts a boolean to a string of true || false.

### <b>Parameters</b>

- <b>bool</b>
	- <b>Type:</b> Boolean
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The variable you wish to convert.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let strBool = boolToString(isMobile)
```


<hr><br><br>

## <b>boolToYesNo(bool))</b>
### <b>Information</b>
Converts a boolean to a string of yes || no.

### <b>Parameters</b>

- <b>bool</b>
	- <b>Type:</b> Boolean
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The variable you wish to convert.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let answer = boolToYesNo(boolAnswer)
```


<hr><br><br>

## <b>degToRad(input))</b>
### <b>Information</b>
Converts degrees to radians.

### <b>Parameters</b>

- <b>input</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The number you want to convert.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
let rad = degToRad(deg)
```


<hr><br><br>

## <b>hexToRgb(hex))</b>
### <b>Information</b>
Converts hex color to an object with r,g,b props.

### <b>Parameters</b>

- <b>hex</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Hex color string eg #FFCC00

### <b>Returns</b>

- <b>Object</b>
	- <b>r</b>
		- <b>Type: </b>Number
	- <b>g</b>
		- <b>Type: </b>Number
	- <b>b</b>
		- <b>Type: </b>Number
### <b>Example</b>

```
let rgb = hexToRgb('#FFCC00')
```


<hr><br><br>

## <b>numToHex(num))</b>
### <b>Information</b>
Converts a number to hexadecimal.

### <b>Parameters</b>

- <b>num</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The number you want to convert.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let hex = numToHex(12)
```


<hr><br><br>

## <b>objectToObject({object},{object},strict))</b>
### <b>Information</b>
Parses an object to another object of your choice with strict or relaxed assigning features (good for defaults and instantiation processing).

### <b>Parameters</b>

- <b>src</b>
	- <b>Type:</b> Object
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The source object. Eg: Use arguments[0] from constructor in a class.

- <b>dest</b>
	- <b>Type:</b> Object
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The target object you wish to assign arguments to.

- <b>strict</b>
	- <b>Type:</b> Boolean
	- <b>Required:</b> false
	- <b>Default:</b> true
	- <b>Info:</b> Whether you want to enable strict assignments only. Enabling strict will warn users of the function that the argument supplied is not supported.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

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


<hr><br><br>

## <b>radToDeg(input))</b>
### <b>Information</b>
Converts radians to degrees.

### <b>Parameters</b>

- <b>input</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The number you want to convert.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
let rad = radToDeg(deg)
```


<hr><br><br>

## <b>rgbToHex(r,g,b))</b>
### <b>Information</b>
Converts an RGB value to a hex color value.

### <b>Parameters</b>

- <b>r</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The number you want to convert.

- <b>g</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The number you want to convert.

- <b>b</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The number you want to convert.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let hex = RGBToHex(255,100,55);
```


<hr><br><br>

## <b>rgbToHex2(r,g,b))</b>
### <b>Information</b>
Converts an RGB value to a hex color value (Method 2).

### <b>Parameters</b>

- <b>r</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The number you want to convert.

- <b>g</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The number you want to convert.

- <b>b</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The number you want to convert.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let hex = rgbToHex2(255,100,55);
```


<hr><br><br>

## <b>stringToBool(str))</b>
### <b>Information</b>
Converts a String to Boolean.

### <b>Parameters</b>

- <b>str</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The value you want to convert.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let answer1 = stringToBool('yes');
let answer2 = stringToBool('y');
let answer3 = stringToBool('1');
let answer4 = stringToBool('no');
let answer5 = stringToBool('n');
let answer6 = stringToBool('0');
```


<hr><br><br>

## <b>getCookie(name))</b>
### <b>Information</b>
Fetches a cookie by name.

### <b>Parameters</b>

- <b>name</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The name of the cookie you want to retrieve.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let email = getCookie('email')
```


<hr><br><br>

## <b>listCookies())</b>
### <b>Information</b>
Lists all available cookie.

### <b>Example</b>

```
listCookies()
```


<hr><br><br>

## <b>setCookie(name,cvalue,exdays))</b>
### <b>Information</b>
Fetches a cookie by name.

### <b>Parameters</b>

- <b>name</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The name of the cookie you want to retrieve.

- <b>cvalue</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The value you want to put in the cookie.

- <b>exdays</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The number of days you want the cookie to expire in.

### <b>Example</b>

```
let name = 'email';
let value = 'darcey.lloyd@gmail.com';
let lifeInMins = 30;
setCookie(name,value,lifeInMins)
```


<hr><br><br>

## <b>getDaysBetween(startDateTime,endDateTime))</b>
### <b>Information</b>
Gets the number of days between 2 dates.

### <b>Parameters</b>

- <b>startDateTime</b>
	- <b>Type:</b> Date
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The start date.

- <b>endDateTime</b>
	- <b>Type:</b> Date
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The end date.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
/* NOTE: Month is indexed at 0 */

let startDateTime = new Date('2020,3,26')
let endDateTime = new Date('2020,3,26')
let days = getDaysBetween('startDateTime, endDateTime')
```


<hr><br><br>

## <b>getMySQLDateTimeString())</b>
### <b>Information</b>
Gets the date as a mysql injectable string.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let dte = getMySQLDateTimeString()
```


<hr><br><br>

## <b>getUKDate(dte,separator))</b>
### <b>Information</b>
Gets a UK formatted date string from a supplied date.

### <b>Parameters</b>

- <b>dte</b>
	- <b>Type:</b> Date || String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The date you wish to get the UK format date string from.

- <b>separator</b>
	- <b>Type:</b> String
	- <b>Required:</b> false
	- <b>Default:</b> -
	- <b>Info:</b> What the date string segments will be separated by.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let ukDate = getUKDate(new Date(),'-')
```


<hr><br><br>

## <b>getUKDateFromDbDateTime(dbDateString,separator))</b>
### <b>Information</b>
Gets a UK formatted date string from a supplied db date string.

### <b>Parameters</b>

- <b>dbDateString</b>
	- <b>Type:</b> Date || String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> This should be a datetime string from a db query.

- <b>separator</b>
	- <b>Type:</b> String
	- <b>Required:</b> false
	- <b>Default:</b> -
	- <b>Info:</b> What the date string segments will be separated by.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let ukDate = getUkDateFromDbDateTime(dbDateString)
```


<hr><br><br>

## <b>getUKDateTime(dte,separator))</b>
### <b>Information</b>
Gets a UK formatted date string from a supplied date.

### <b>Parameters</b>

- <b>dte</b>
	- <b>Type:</b> Date || String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The date you wish to get the UK format date string from.

- <b>separator</b>
	- <b>Type:</b> String
	- <b>Required:</b> false
	- <b>Default:</b> -
	- <b>Info:</b> What the date string segments will be separated by.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let ukDate = getUKDate(new Date(),'-')
```


<hr><br><br>

## <b>getUkDateTimeFromDbDateTime(dte,separator))</b>
### <b>Information</b>
Gets a UK formatted date and time string from a supplied db date time string.

### <b>Parameters</b>

- <b>dte</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> This should be a datetime string from a db query.

- <b>separator</b>
	- <b>Type:</b> String
	- <b>Required:</b> false
	- <b>Default:</b> -
	- <b>Info:</b> What the date string segments will be separated by.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let ukDate = getUkDateTimeFromDbDateTime(dte)
```


<hr><br><br>

## <b>getUSDate(dte,separator))</b>
### <b>Information</b>
Gets a US formatted date string from a supplied date.

### <b>Parameters</b>

- <b>dte</b>
	- <b>Type:</b> Date
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The date you wish to get the US format date string from.

- <b>separator</b>
	- <b>Type:</b> String
	- <b>Required:</b> false
	- <b>Default:</b> -
	- <b>Info:</b> What the date string segments will be separated by.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let usDate = getUKDate(new Date(),'-')
```


<hr><br><br>

## <b>appendTo(elementOrId,msg,endOfLine))</b>
### <b>Information</b>
Appends a string to an element, with or without a < BR > tag.

### <b>Parameters</b>

- <b>elementOrId</b>
	- <b>Type:</b> Element||ElementID
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The element or element id of the element you wish to append the string within.

- <b>msg</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The string you wish to append to the html element.

- <b>endOfLine</b>
	- <b>Type:</b> String
	- <b>Required:</b> false
	- <b>Default:</b> < br >
	- <b>Info:</b> The end of the string that will be appended to the element, set to '' if you dont want the < br >

### <b>Example</b>

```
appendTo(elementOrId,msg,'')
```


<hr><br><br>

## <b>attachDebug(no,position,ele))</b>
### <b>Information</b>
Displays a visual debug list so you can watch variables change in real time (Most excellent for debug with keys, animations etc). Click row to inject that value into copy and paste buffer. See <b>debugTo</b> to use attachDebug, usage example below.

### <b>Parameters</b>

- <b>no</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The number of debug elements you want available.

- <b>position</b>
	- <b>Type:</b> String (tl, top left, tr, top right, bl, btm left, br, btm right)
	- <b>Required:</b> true
	- <b>Default:</b> top left
	- <b>Info:</b> Position of the debug list.

- <b>ele</b>
	- <b>Type:</b> Element
	- <b>Required:</b> false
	- <b>Default:</b> document.body
	- <b>Info:</b> The debug list will be appended to this element

### <b>Example</b>

```
attachDebug(3)
debugTo(0,'hello world 1')
debugTo(1,'hello world 2')
debugTo(2,'hello world 3')
```


<hr><br><br>

## <b>debugTo(index,str))</b>
### <b>Information</b>
Sets a visual debug element so you can visually track variables without the use of the console, excellent for working with the graphical side of things, animations, webgl etc.

### <b>Parameters</b>

- <b>index</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The debug container index to write to (setup via <b>attachDebug</b>).

- <b>str</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The string you want to write to the debug container.

### <b>Example</b>

```
attachDebug(3)
debugTo(0,'hello world 1')
debugTo(1,'hello world 2')
debugTo(2,'hello world 3')
```


<hr><br><br>

## <b>LazyLog(NA))</b>
### <b>Information</b>
Adds log, warn and error to the window scope (globally), so no more typing console. anymore.

### <b>Parameters</b>

- <b>NA</b>
	- <b>Type:</b> any
	- <b>Required:</b> false
	- <b>Default:</b> null
	- <b>Info:</b> Use as if your were using console.log, console.warn and console.error directly

### <b>Methods</b>

- <b>log()</b>
- <b>log()</b>
- <b>log()</b>
- <b>EnableLazyLogging()</b>
- <b>DisableLazyLogging()</b>
- <b>EnableLazyLog()</b>
- <b>DisableLazyLog()</b>
### <b>Example</b>

```
LazyLog(); // This will make log, warn and error available.
log('hello world 1')
log(`a = ${a}`)
log('a = ' + a)
log('log eg',[1,2,3])
warn('hello world 1')
warn(`a = ${a}`)
warn('a = ' + a)
warn('warn eg',[1,2,3])
error('hello world 1')
error(`a = ${a}`)
error('a = ' + a)
error('error eg',[1,2,3])
```


<hr><br><br>

## <b>log(arg))</b>
### <b>Information</b>
Lazy version of console.log, no more typing console!

### <b>Parameters</b>

- <b>arg</b>
	- <b>Type:</b> *
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> arg gets injected into console.log

### <b>Example</b>

```
log('Once you use me, you will never stop using me')
let a = 4;
log('a = ' + a)
log(`a = ${a}`)
```


<hr><br><br>

## <b>logDisable())</b>
### <b>Information</b>
Disable log() globally. Good for keeping all your log commands without having to comment them out in your projects. You should really you should comment them all out for removal in the packaging process.

### <b>Example</b>

```
log('You will see this in console')
logDisable()
log('You wont see this in console')
```


<hr><br><br>

## <b>logEnable())</b>
### <b>Information</b>
Enable log() globally. Good for keeping all your log commands without having to comment them out in your projects. You should really you should comment them all out for removal in the packaging process.

### <b>Example</b>

```
log('You will see this in console')
logDisable()
log('You wont see this in console')
logEnable()
log('You will see this in console')
```


<hr><br><br>

## <b>Logger())</b>
### <b>Information</b>
A substitute for console.log, allowing you to keep your comments and enable them on a class by class or function by function basis, or globally on all class's or functions implemented in.

### <b>Methods</b>

- <b>enable()</b>
- <b>disable()</b>
- <b>enableAll()</b>
- <b>disableAll()</b>
- <b>enableGlobally()</b>
- <b>disableGlobally()</b>
### <b>Example</b>

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


<hr><br><br>

## <b>logTo(elementOrId,msg,append,endOfLine))</b>
### <b>Information</b>
Appends a string to an element, with or without a < BR > tag.

### <b>Parameters</b>

- <b>elementOrId</b>
	- <b>Type:</b> Element||ElementID
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The element or element id of the element you wish to append the string within.

- <b>msg</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The string you wish to append to the html element.

- <b>append</b>
	- <b>Type:</b> Boolean
	- <b>Required:</b> false
	- <b>Default:</b> false
	- <b>Info:</b> Method of attaching the logging message, append (true) or prepend (false) aka top vs bottom.

- <b>endOfLine</b>
	- <b>Type:</b> String
	- <b>Required:</b> false
	- <b>Default:</b> 
	- <b>Info:</b> The end of the string that will be appended to the element, set to '< br >' if you want a line break

### <b>Example</b>

```
logTo(elementOrId,msg,true)
```


<hr><br><br>

## <b>warn(arg))</b>
### <b>Information</b>
Lazy version of console.warn, no more typing console!

### <b>Parameters</b>

- <b>arg</b>
	- <b>Type:</b> *
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> arg gets injected into console.warn

### <b>Example</b>

```
warn('Once you use me, you will never stop using me')
let a = 4;
warn('a = ' + a)
warn(`a = ${a}`)
```


<hr><br><br>

## <b>getOS())</b>
### <b>Information</b>
Gets what OS is in use

### <b>Returns</b>

- <b>Type: </b>String (Mac OS, iOS, Windows, Android, Linux
### <b>Example</b>

```
let os = getOS()
```


<hr><br><br>

## <b>isAndroid())</b>
### <b>Information</b>
Detects if Android or not.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let test = isAndroid()
```


<hr><br><br>

## <b>isChrome())</b>
### <b>Information</b>
Detects if Chrome or not.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let test = isChrome()
```


<hr><br><br>

## <b>isEdge())</b>
### <b>Information</b>
Detects if Edge or not.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let test = isEdge()
```


<hr><br><br>

## <b>isFireFox())</b>
### <b>Information</b>
Detects if FireFox or not.

### <b>Example</b>

```
let test = isFireFox()
```


<hr><br><br>

## <b>isIOS())</b>
### <b>Information</b>
Detects if iOS or not.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let test = isIOS()
```


<hr><br><br>

## <b>isMobile())</b>
### <b>Information</b>
Detects if mobile or not.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let mobile = isMobile()
```


<hr><br><br>

## <b>isOpera())</b>
### <b>Information</b>
Detects if Opera or not.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let test = isOpera()
```


<hr><br><br>

## <b>isSafari())</b>
### <b>Information</b>
Detects if Safari or not.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let test = isSafari()
```


<hr><br><br>

## <b>getElementPosition(el))</b>
### <b>Information</b>
Gets an elements position.

### <b>Parameters</b>

- <b>el</b>
	- <b>Type:</b> Element
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Element to get the position of.

### <b>Returns</b>

### <b>Example</b>

```
let pos = getElementPosition(myElement)
```


<hr><br><br>

## <b>getElementPos(el))</b>
### <b>Information</b>
Gets an elements position.

### <b>Parameters</b>

- <b>el</b>
	- <b>Type:</b> Element
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Element to get the position of.

### <b>Returns</b>

- <b>Object</b>
	- <b>left</b>
		- <b>Type: </b>Number
		- <b>Info: </b>x or left
	- <b>top</b>
		- <b>Type: </b>Number
		- <b>Info: </b>y or top
### <b>Example</b>

```
let pos = getElementPos(myElement)
```


<hr><br><br>

## <b>isDOM(obj))</b>
### <b>Information</b>
Checks if object is HTMLElement.

### <b>Parameters</b>

- <b>obj</b>
	- <b>Type:</b> Element||Object
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Element / Object to check.

### <b>Example</b>

```
let result = isDOM(myElement)
```


<hr><br><br>

## <b>isElement(ele))</b>
### <b>Information</b>
Checks if object is HTMLElement.

### <b>Parameters</b>

- <b>ele</b>
	- <b>Type:</b> Element||Object
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Element / Object to check.

### <b>Example</b>

```
let result = isElement(myElement)
```


<hr><br><br>

## <b>isElement2(ele))</b>
### <b>Information</b>
Checks if object is HTMLElement (Method 2).

### <b>Parameters</b>

- <b>ele</b>
	- <b>Type:</b> Element||Object
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Element / Object to check.

### <b>Example</b>

```
let result = isElement2(myElement)
```


<hr><br><br>

## <b>getElementPos(ele))</b>
### <b>Information</b>
Gets an elements offset top position.

### <b>Parameters</b>

- <b>ele</b>
	- <b>Type:</b> Element
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Element to get the position of.

### <b>Returns</b>

- <b>Type: </b>Number
- <b>Info: </b>Returns fall if unable to get offsetTop

### <b>Example</b>

```
let pos = getElementOffsetTop(myElement)
```


<hr><br><br>

## <b>hasClass(elementOrId,ele))</b>
### <b>Information</b>
Gets an elements offset top position.

### <b>Parameters</b>

- <b>elementOrId</b>
	- <b>Type:</b> Element||ElementID
	- <b>Required:</b> true
	- <b>Default:</b> null

- <b>ele</b>
	- <b>Type:</b> Element
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Element to get the position of.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let classAttached = hasClass(myElement,'selected')
```


<hr><br><br>

## <b>setHTML(elementOrId,str,mode))</b>
### <b>Information</b>
Set a an elements HTML content.

### <b>Parameters</b>

- <b>elementOrId</b>
	- <b>Type:</b> Element||ElementID
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The element or the element ID.

- <b>str</b>
	- <b>Type:</b> String||Number
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The content you want to put into the html element.

- <b>mode</b>
	- <b>Type:</b> String (set|append|prepend)
	- <b>Required:</b> false
	- <b>Default:</b> Set
	- <b>Info:</b> The method in which to set the HTML of the targeted element, set it clearing all content or to append or prepend you content.

### <b>Example</b>

```
setHTML(myElement,'hello world')
setHTML(myElement,'hello world','append')
setHTML(myElement,'hello world','prepend')

setHTML('my-element-id-1','hello world')
setHTML('my-element-id-2','hello world','append')
setHTML('my-element-id-3','hello world','prepend')
```


<hr><br><br>

## <b>onReady(fn))</b>
### <b>Information</b>
Checks if the DOM is ready and then executes a function.

### <b>Parameters</b>

- <b>fn</b>
	- <b>Type:</b> Function
	- <b>Required:</b> true
	- <b>Default:</b> null

### <b>Example</b>

```
onReady(function()){
	/* DOM is ready, do your thing */
});

/* or */
onReady(() =>{
	/* DOM is ready, do your thing */
});
```


<hr><br><br>

## <b>wordCountFilter(str,maxWords))</b>
### <b>Information</b>
Takes a string, checks it for number of words and returns the string but cuts it to the max number of words you set.

### <b>Parameters</b>

- <b>str</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null

- <b>maxWords</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Default:</b> null

### <b>Returns</b>

- <b>Object</b>
### <b>Example</b>

```
let limitedSentence = wordCountFilter(source,20)
```


<hr><br><br>

## <b>setOptionSelectedIndex(selectElement,selectedValue))</b>
### <b>Information</b>
Sets an option of HTML select element by value.

### <b>Parameters</b>

- <b>selectElement</b>
	- <b>Type:</b> HTML Select Element
	- <b>Required:</b> true

- <b>selectedValue</b>
	- <b>Type:</b> String
	- <b>Required:</b> true

### <b>Example</b>

```
let limitedSentence = wordCountFilter(source,20)
```


<hr><br><br>

## <b>imageToCanvas(url))</b>
### <b>Information</b>
Loads an image and places it on a canvas of matching dimensions.

### <b>Parameters</b>

- <b>url</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Path/URL to the image to load and place on the canvas

### <b>Returns</b>

- <b>Type: </b>HTMLCanvasElement
### <b>Example</b>

```
let canvas1 = await imageToCanvas('./assets/photo.webp')
```


<hr><br><br>

## <b>fetchHtml(url))</b>
### <b>Information</b>
Loads a html file and returns it as a string

### <b>Parameters</b>

- <b>url</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Path/URL to the file to load

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let data = await fetchHtml('./pages/modal-user-content.html')
```


<hr><br><br>

## <b>fetchJson(url))</b>
### <b>Information</b>
Loads a json file and returns it as an object

### <b>Parameters</b>

- <b>url</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Path/URL to the file to load

### <b>Returns</b>

- <b>Object</b>
### <b>Example</b>

```
let data = await fetchJson('./data/config.json')
```


<hr><br><br>

## <b>loadAndAttachImage(imgElement,src))</b>
### <b>Information</b>
Loads an image file and auto attaches it to the head section of the document.

### <b>Parameters</b>

- <b>imgElement</b>
	- <b>Type:</b> String
	- <b>Required:</b> false
	- <b>Default:</b> null
	- <b>Info:</b> Image element to load the image into.

- <b>src</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Path/URL to the file to load

### <b>Returns</b>

- <b>Type: </b>Promise
### <b>Example</b>

```
loadAndAttachImage(imgElement1,'./assets/images/products/001.jpg')
.then(()=>{ log('loaded and attached'); })
.catch((e)=>{ log(e); })
```


<hr><br><br>

## <b>loadCss(href,onComplete))</b>
### <b>Information</b>
Loads a css file and auto attaches it to the head section of the document.

### <b>Parameters</b>

- <b>href</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Path/URL to the css file to load

- <b>onComplete</b>
	- <b>Type:</b> Function
	- <b>Required:</b> false
	- <b>Default:</b> null
	- <b>Info:</b> On complete callback

### <b>Example</b>

```
loadCss('./include/css/style-sheet-5.css',onStyleSheet5Loaded)
```


<hr><br><br>

## <b>loadJson(url,onComplete,onError))</b>
### <b>Information</b>
Loads a JSON file and returns it via the onComplete callback function.

### <b>Parameters</b>

- <b>url</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Path/URL to the file to load.

- <b>onComplete</b>
	- <b>Type:</b> Function
	- <b>Required:</b> false
	- <b>Default:</b> null
	- <b>Info:</b> On complete callback, sends json response back as a parameter.

- <b>onError</b>
	- <b>Type:</b> Function
	- <b>Required:</b> false
	- <b>Default:</b> null
	- <b>Info:</b> On error callback function handler

### <b>Example</b>

```
loadJson('./data/config.json',onLoadedHandler)
```


<hr><br><br>

## <b>loadScript(src,onComplete,onProgress))</b>
### <b>Information</b>
Loads a JavaScript file and auto attaches it to the head section of the document.

### <b>Parameters</b>

- <b>src</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Path/URL to the js file to load

- <b>onComplete</b>
	- <b>Type:</b> Function
	- <b>Required:</b> false
	- <b>Default:</b> null
	- <b>Info:</b> On complete callback

- <b>onProgress</b>
	- <b>Type:</b> Function
	- <b>Required:</b> false
	- <b>Default:</b> null
	- <b>Info:</b> On progress callback, sends back the percentage loaded

### <b>Example</b>

```
loadScript('./include/js/script-5.js',onLoadedHandler)
```


<hr><br><br>

## <b>promiseLoadCss(href))</b>
### <b>Information</b>
Loads a css file and auto attaches it to the head section of the document.

### <b>Parameters</b>

- <b>href</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Path/URL to the css file to load

### <b>Returns</b>

- <b>Type: </b>Promise
### <b>Example</b>

```
promiseLoadCss('./include/css/style-sheet-5.css')
.then(()=>{ log('loaded'); })
.catch((e)=>{ log(e); })
```


<hr><br><br>

## <b>promiseLoadImage(ele,src))</b>
### <b>Information</b>
Loads an image file and auto attaches it to the head section of the document.

### <b>Parameters</b>

- <b>ele</b>
	- <b>Type:</b> String
	- <b>Required:</b> false
	- <b>Default:</b> null
	- <b>Info:</b> Image element to load the image into.

- <b>src</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Path/URL to the file to load

### <b>Returns</b>

- <b>Type: </b>Promise
### <b>Example</b>

```
PromiseLoadImage(imgElement1,'./assets/images/products/001.jpg')
.then(()=>{ log('loaded and attached'); })
.catch((e)=>{ log(e); })
```


<hr><br><br>

## <b>promiseLoadJson(url))</b>
### <b>Information</b>
Loads a json file and returns it via promise resolve

### <b>Parameters</b>

- <b>url</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Path/URL to the file to load

### <b>Returns</b>

- <b>Type: </b>Promise
### <b>Example</b>

```
PromiseLoadJson('./data/config.json')
.then((data)=>{ log(data); })
.catch((e)=>{ log(e); })
```


<hr><br><br>

## <b>promiseLoadScript(src))</b>
### <b>Information</b>
Loads a JavaScript file and attaches it to the document head

### <b>Parameters</b>

- <b>src</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> Path/URL to the file to load

### <b>Returns</b>

- <b>Type: </b>Promise
### <b>Example</b>

```
promiseLoadScript('./includes/js/onDemandFile1.js')
.then(()=>{ log('loaded and attached'); })
.catch((e)=>{ log(e); })
```


<hr><br><br>

## <b>getRandomBoolean())</b>
### <b>Information</b>
Returns a random boolean.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let randomBoolean = getRandomBoolean()
```


<hr><br><br>

## <b>getRandomFloat(min,max))</b>
### <b>Information</b>
Returns a number (float) between 2 numbers.

### <b>Parameters</b>

- <b>min</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Min value.

- <b>max</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Max value.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
let randomFloat = getRandomFloat(1.4,42.232)
```


<hr><br><br>

## <b>getRandomInt(min,max))</b>
### <b>Information</b>
Returns a number (int) between 2 numbers.

### <b>Parameters</b>

- <b>min</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Min value.

- <b>max</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Max value.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
let randomInt = getRandomInt(0,100)
```


<hr><br><br>

## <b>getRange(value 1,Value 2))</b>
### <b>Information</b>
Returns absolute value of the range between 2 numbers.

### <b>Parameters</b>

- <b>value 1</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Value 1.

- <b>Value 2</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Value 2.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
let range = getRange(0,100)
```


<hr><br><br>

## <b>isEven(n))</b>
### <b>Information</b>
Detects if a number is even or not.

### <b>Parameters</b>

- <b>n</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Number to check.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let even = isEven(3)
```


<hr><br><br>

## <b>isOdd(n))</b>
### <b>Information</b>
Detects if a number is odd or not.

### <b>Parameters</b>

- <b>n</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Number to check.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let odd = isOdd(3)
```


<hr><br><br>

## <b>normaliseRange(min,max,v))</b>
### <b>Information</b>
Normalises a value to be between 0 and 1, based on a range between min and max. min being 0 and max being 1.

### <b>Parameters</b>

- <b>min</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Min value.

- <b>max</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Max value.

- <b>v</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Value to normalise.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
let n1 = normaliseRange(0,100,50)
/* n1 = 0.5 */
let n2 = normaliseRange(0,100,200)
/* n2 = 1 */
let n3 = normaliseRange(0,100,-200)
/* n3 = 0 */
```


<hr><br><br>

## <b>parseArrayToFloat(arr))</b>
### <b>Information</b>
Parses each entry in the supplied array with Math.float and returns it.

### <b>Parameters</b>

- <b>arr</b>
	- <b>Type:</b> Array
	- <b>Required:</b> true
	- <b>Info:</b> Array to parse.

### <b>Returns</b>

- <b>Type: </b>Array
### <b>Example</b>

```
let floatParsedArray = parseArrayToFloat(arr)
```


<hr><br><br>

## <b>parseArrayToInt(arr))</b>
### <b>Information</b>
Parses each entry in the supplied array with Math.int and returns it.

### <b>Parameters</b>

- <b>arr</b>
	- <b>Type:</b> Array
	- <b>Required:</b> true
	- <b>Info:</b> Array to parse.

### <b>Returns</b>

- <b>Type: </b>Array
### <b>Example</b>

```
let intParsedArray = parseArrayToInt(arr)
```


<hr><br><br>

## <b>roundTo(v,dec))</b>
### <b>Information</b>
Rounds a value to a set number of decimal places.

### <b>Parameters</b>

- <b>v</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Value to round.

- <b>dec</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Number of decimal places to round to.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
let r = roundTo(3.142,2)
```


<hr><br><br>

## <b>getGUID())</b>
### <b>Information</b>
Returns a GUI string.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let guid = getGUID()
```


<hr><br><br>

## <b>getUID(len))</b>
### <b>Information</b>
Generates a unique id. NOTE: Max length of 34.

### <b>Parameters</b>

- <b>len</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Length of the unique id to generate.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let uid = getUID(12)
```


<hr><br><br>

## <b>isAlphaNumeric(v))</b>
### <b>Information</b>
Checks if the input is alphanumeric or not.

### <b>Parameters</b>

- <b>v</b>
	- <b>Type:</b> String|Number
	- <b>Required:</b> true
	- <b>Info:</b> Param to check.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let an = isAlphaNumeric('a43-')
```


<hr><br><br>

## <b>isArray(input))</b>
### <b>Information</b>
Checks if the input is an array or not.

### <b>Parameters</b>

- <b>input</b>
	- <b>Type:</b> *
	- <b>Required:</b> true
	- <b>Info:</b> Param to check.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let check = isArray(4)
```


<hr><br><br>

## <b>isBool(input))</b>
### <b>Information</b>
Checks if the input is a boolean or not.

### <b>Parameters</b>

- <b>input</b>
	- <b>Type:</b> *
	- <b>Required:</b> true
	- <b>Info:</b> Param to check.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let check = isBool(4)
```


<hr><br><br>

## <b>isBoolean(input))</b>
### <b>Information</b>
Checks if the input is a boolean or not.

### <b>Parameters</b>

- <b>input</b>
	- <b>Type:</b> *
	- <b>Required:</b> true
	- <b>Info:</b> Param to check.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let check = isBoolean(4)
```


<hr><br><br>

## <b>isNumber(n))</b>
### <b>Information</b>
Checks if the input is number or not.

### <b>Parameters</b>

- <b>n</b>
	- <b>Type:</b> *
	- <b>Required:</b> true
	- <b>Info:</b> Param to check.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let check = isNumber('a')
```


<hr><br><br>

## <b>isNumeric(n))</b>
### <b>Information</b>
Checks if the input is numeric or not.

### <b>Parameters</b>

- <b>n</b>
	- <b>Type:</b> *
	- <b>Required:</b> true
	- <b>Info:</b> Param to check.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let check = isNumeric('a')
```


<hr><br><br>

## <b>MouseScrollHandler(onScrollUp,onScrollDown))</b>
### <b>Information</b>
Nukes the moon.

### <b>Link</b>
<a href='jsonData.link' target='_blank'>https://aftc.io</a>

### <b>Parameters</b>

- <b>onScrollUp</b>
	- <b>Type:</b> Function
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The function to call when mouse wheel scroll up is detected

- <b>onScrollDown</b>
	- <b>Type:</b> Function
	- <b>Required:</b> true
	- <b>Default:</b> null
	- <b>Info:</b> The function to call when mouse wheel scroll down is detected

### <b>Example</b>

```
new MouseScrollHandler(onScrollUpHandler,onScrollDownHandler);
```


<hr><br><br>

## <b>cutStringTo(str,len))</b>
### <b>Information</b>
Returns a string at the desired length.

### <b>Parameters</b>

- <b>str</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> String to cut.

- <b>len</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> Number of characters to return / Length of string to return.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let cutString = cutStringTo('abcd',2)
```


<hr><br><br>

## <b>escapeHTML(str))</b>
### <b>Information</b>
Returns a string that has the standard html tags escaped.

### <b>Parameters</b>

- <b>str</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> String to escape html tags.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let newString = escapeHTML('<b>some html</b>')
```


<hr><br><br>

## <b>getAnchor(url))</b>
### <b>Information</b>
Returns the anchor from a url string.

### <b>Parameters</b>

- <b>url</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> String to get anchor from.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let anchor = getAnchor(url)
```


<hr><br><br>

## <b>getCleanJSONString(s))</b>
### <b>Information</b>
Attempts to clean up special characters in a JSON string and make it JSON valid.

### <b>Parameters</b>

- <b>s</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> JSON String to parse.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let newString = getCleanJSONString(oldString)
```


<hr><br><br>

## <b>getFileExtension(str))</b>
### <b>Information</b>
Attempts to get the file extension from a supplied string.

### <b>Parameters</b>

- <b>str</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to get the file extension from.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let ext = getFileExtension(path)
```


<hr><br><br>

## <b>getLastPartOfUrl(url))</b>
### <b>Information</b>
Returns the last segment of a url split by slashes.

### <b>Parameters</b>

- <b>url</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The url string to get the last part from.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let lastSegment = getLastPartOfUrl(url)
```


<hr><br><br>

## <b>getRandomString(len))</b>
### <b>Information</b>
Returns a random string of letters A-Z a-z of a specified length.

### <b>Parameters</b>

- <b>len</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> The length of the random string to generate.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let randomLetterString = getRandomString(256)
```


<hr><br><br>

## <b>getStringBetween(source,start,end))</b>
### <b>Information</b>
Returns the string between a start and end string marker matches from the source string.

### <b>Parameters</b>

- <b>source</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The length to parse.

- <b>start</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The starting string marker in the source string.

- <b>end</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The ending string marker in the source string.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let strBetween = getStringBetween(sourceString,'start-marker','end-marker')
```


<hr><br><br>

## <b>getStringBetween2(source,start,end))</b>
### <b>Information</b>
Returns an array of all the strings found between a start and end markers. Max of 500 items in array returned.

### <b>Parameters</b>

- <b>source</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The length to parse.

- <b>start</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The starting string marker in the source string.

- <b>end</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The ending string marker in the source string.

### <b>Returns</b>

- <b>Type: </b>Array
- <b>Info: </b>Max 500 results

### <b>Example</b>

```
let found = getStringsBetween2(sourceString,'start-marker','end-marker')
```


<hr><br><br>

## <b>getWordCount(str))</b>
### <b>Information</b>
Returns the number of words in a string based on spaces.

### <b>Parameters</b>

- <b>str</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to count word from.

### <b>Returns</b>

- <b>Type: </b>Number
### <b>Example</b>

```
let wordCount = getWordCount(sourceString)
```


<hr><br><br>

## <b>inString(needle,haystack))</b>
### <b>Information</b>
Looks for a string in a string.

### <b>Parameters</b>

- <b>needle</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to find.

- <b>haystack</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to search.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let stringFound = inString(needle,haystack)
```


<hr><br><br>

## <b>isInString(needle,haystack))</b>
### <b>Information</b>
Looks for a string in a string.

### <b>Parameters</b>

- <b>needle</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to find.

- <b>haystack</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to search.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let stringFound = isInString(needle,haystack)
```


<hr><br><br>

## <b>lTrimBy(str,by))</b>
### <b>Information</b>
Trims a string from the left (start) by a specified number of characters.

### <b>Parameters</b>

- <b>str</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to find.

- <b>by</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> The number of characters to trim from the left (start) of a string.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let trimmedString = lTrimBy(str,4)
```


<hr><br><br>

## <b>regExReplaceAll(needle,rep,haystack))</b>
### <b>Information</b>
Uses regex to replace all instances of a string in a string with what you specify.

### <b>Parameters</b>

- <b>needle</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to replace.

- <b>rep</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to replace the needle (found) string with.

- <b>haystack</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to parse.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let newString = regExReplaceAll(needle, rep, haystack)
```


<hr><br><br>

## <b>removeFileFromPath(path))</b>
### <b>Information</b>
Removes the file from a file path.

### <b>Parameters</b>

- <b>path</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The file path to process.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let path = removeFileFromPath(fullPath)
```


<hr><br><br>

## <b>replaceAll(needle,replace,haystack))</b>
### <b>Information</b>
Uses a split join method to replace all occurrences of a string. See regExReplaceAll for an alternate method.

### <b>Parameters</b>

- <b>needle</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to replace.

- <b>replace</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to replace the needle (found) string with.

- <b>haystack</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to parse.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let newString1 = replaceAll(needle, repWith, haystack)
let newString2 = regExReplaceAll(needle, repWith, haystack)
```


<hr><br><br>

## <b>replaceDoubleBackSlash(str,rep))</b>
### <b>Information</b>
Replaces double back slashes in a string via regex with your specified string.

### <b>Parameters</b>

- <b>str</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to process.

- <b>rep</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to replace double back slashes with.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let processedString = replaceDoubleBackSlash(str,replaceWith)
```


<hr><br><br>

## <b>replaceDoubleForwardSlash(str,rep))</b>
### <b>Information</b>
Replaces double forward slashes in a string via regex with your specified string.

### <b>Parameters</b>

- <b>str</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to process.

- <b>rep</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to replace double forward slashes with.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let processedString = replaceDoubleForwardSlash(str,replaceWith)
```


<hr><br><br>

## <b>rTrimBy(str,trimBy))</b>
### <b>Information</b>
Trims a string from the right (end) by a specified number of characters.

### <b>Parameters</b>

- <b>str</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to find.

- <b>trimBy</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> The number of characters to trim from the right (end) of a string.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let trimmedString = rTrimBy(str,4)
```


<hr><br><br>

## <b>trimStringBy(str,trimBy))</b>
### <b>Information</b>
Trims a string from the right (end) by a specified number of characters.

### <b>Parameters</b>

- <b>str</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to find.

- <b>trimBy</b>
	- <b>Type:</b> Number
	- <b>Required:</b> true
	- <b>Info:</b> The number of characters to trim from the right (end) of a string.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let trimmedString = trimStringBy(str,4)
```


<hr><br><br>

## <b>ucFirst(s))</b>
### <b>Information</b>
Makes the first letter of a string uppercase.

### <b>Parameters</b>

- <b>s</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The string to make the first letter upper case.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let ucFirstString = ucFirst('hello')
```


<hr><br><br>

## <b>SwipeHandler({object}))</b>
### <b>Information</b>
Swipe handler, currently detects left & right swipes.

### <b>Parameters</b>

- <b>Object:</b>

	- <b>onSwipeLeft</b>
		- <b>Required:</b> false
		- <b>Default:</b> false
		- <b>Info:</b> The function you want to call when a swipe left is detected.
	- <b>onSwipeRight</b>
		- <b>Required:</b> false
		- <b>Default:</b> false
		- <b>Info:</b> The function you want to call when a swipe right is detected.
	- <b>onSwipeUp</b>
		- <b>Required:</b> false
		- <b>Default:</b> false
		- <b>Info:</b> The function you want to call when a swipe up is detected.
	- <b>onSwipeDown</b>
		- <b>Required:</b> false
		- <b>Default:</b> false
		- <b>Info:</b> The function you want to call when a swipe down is detected.
	- <b>horizontalTolerance</b>
		- <b>Required:</b> false
		- <b>Default:</b> 50
		- <b>Info:</b> The distance your finger has to travel on the horizontal axis for a swipe left or right to be detected.
	- <b>onSwipeUp</b>
		- <b>Required:</b> false
		- <b>Default:</b> false
		- <b>Info:</b> The function you want to call when a swipe left is detected.
	- <b>onSwipeDown</b>
		- <b>Required:</b> false
		- <b>Default:</b> false
		- <b>Info:</b> The function you want to call when a swipe right is detected.
	- <b>verticalTolerance</b>
		- <b>Required:</b> false
		- <b>Default:</b> 50
		- <b>Info:</b> The distance your finger has to travel on the vertical axis for a swipe up or down to be detected.
	- <b>swipeThrottleTimeout</b>
		- <b>Required:</b> false
		- <b>Default:</b> 250
		- <b>Info:</b> The amount of milliseconds before another swipe event can be fired.

### <b>Example</b>

```
new SwipeHandler({config})
```


<hr><br><br>

## <b>getRoute(url))</b>
### <b>Information</b>
Returns a route string.

### <b>Parameters</b>

- <b>url</b>
	- <b>Type:</b> String
	- <b>Required:</b> false
	- <b>Info:</b> String to parse into a route, if left out it will get the current url/uri.

### <b>Returns</b>

- <b>Type: </b>String
### <b>Example</b>

```
let usersRoute = getRoute('https://domain.com/users')
let currentRoute = getRoute()
```


<hr><br><br>

## <b>isEmail(email))</b>
### <b>Information</b>
Validates an email address via regex.

### <b>Parameters</b>

- <b>email</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The email string to validate.

### <b>Returns</b>

- <b>Type: </b>Boolean
### <b>Example</b>

```
let isValidEmail = isEmail('darcey.lloyd@gmail.com')
```


<hr><br><br>

## <b>promiseAttachVideo(video,src))</b>
### <b>Information</b>
Attaches a video file to a video and once it's meta data is available it will resolve the promise. Useful for getting width, height and duration.

### <b>Parameters</b>

- <b>video</b>
	- <b>Type:</b> Video
	- <b>Required:</b> true
	- <b>Info:</b> The video to attach to.

- <b>src</b>
	- <b>Type:</b> String
	- <b>Required:</b> true
	- <b>Info:</b> The src of the video file to attach to the video element or video javascript instance.

### <b>Returns</b>

- <b>Type: </b>Promise with object with props {width,height,duration}
### <b>Example</b>

```
promiseAttachVideo(vid,vidSrc)
then((res)=>{ console.log('video attached and ready') })
```


<hr><br><br>

## <b>promiseVideoEnd(video))</b>
### <b>Information</b>
Returns a promise resolve on video end.

### <b>Parameters</b>

- <b>video</b>
	- <b>Type:</b> Video
	- <b>Required:</b> true
	- <b>Info:</b> The video to attach to.

### <b>Returns</b>

- <b>Type: </b>Promise resolve on video end
### <b>Example</b>

```
promiseVideoEnd(vid)
then((res)=>{ console.log('video playback complete') })
```


<hr><br><br>

