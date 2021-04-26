# <b>AFTC-MODULES v1.7.8</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## A collection of usefull everyday utilities / functions.


<h3><b>Find AFTC-MODULES useful? Please Donate...</b></h3>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


 <hr>
 <br>




## <b>CDN</b>
- https://cdn.jsdelivr.net/npm/aftc-modules@latest/dist/aftc-module.js

<hr><br><br>



### <b>Installation</b>
```
npm i aftc-modules
```

<hr><br><br>


## <b>Available Methods & Class's:</b>

- <b>arrayClear</b>(arr)
- <b>arrayContains</b>(needle,haystack)
- <b>arrayEmpty</b>(arr)
- <b>arrayGetMax</b>(arr)
- <b>arrayGetMin</b>(arr)
- <b>arrayRemoveIndex</b>(arr,index)
- <b>arrayRemoveValue</b>(arr,value)
- <b>arrayShuffle</b>(arr)
- <b>arrayShuffle2</b>(arr)
- <b>isInArray</b>(needle,haystack)
- <b>isStringInArray</b>(needle,haystack)
- <b>getBrowser</b>()
- <b>getBrowserX</b>()
- <b>getBrowserY</b>()
- <b>isInViewport</b>(el)
- <b>argsToObject</b>(fArgs,appArgs,strict)
- <b>boolToInt</b>(bool)
- <b>boolToString</b>(bool)
- <b>boolToYesNo</b>(bool)
- <b>degToRad</b>(input)
- <b>hexToRgb</b>(hex)
- <b>numToHex</b>(num)
- <b>objectToObject</b>(src,dest,strict)
- <b>radToDeg</b>(input)
- <b>RGBToHex</b>(r,g,b)
- <b>RGBToHex2</b>(r,g,b)
- <b>stringToBool</b>(str)
- <b>getCookie</b>(name)
- <b>setCookie</b>(name,name,name)
- <b>getDaysBetween</b>(name,name)
- <b>getMySQLDateTimeString</b>()
- <b>getUKDate</b>(dte,separator)
- <b>getUkDateFromDbDateTime</b>(dbDateString)
- <b>getUkDateTimeFromDbDateTime</b>(dbDateTimeString)
- <b>getUSDate</b>(dte,separator)
- <b>appendTo</b>(elementOrId,msg,endOfLine)
- <b>attachDebug</b>(no,position,ele)
- <b>debugTo</b>(index,str)
- <b>log</b>(arg)
- <b>logTo</b>(elementOrId,msg,append,endOfLine)
- <b>getIEVersion</b>()
- <b>getOS</b>(testAgent)
- <b>isAndroid</b>()
- <b>isChrome</b>()
- <b>isEdge</b>()
- <b>isFireFox</b>()
- <b>isIE</b>()
- <b>isIOS</b>()
- <b>isMobile</b>()
- <b>isOpera</b>()
- <b>isSafari</b>()
- <b>getElementPosition</b>(el)
- <b>getElementPos</b>(el)
- <b>isDOM</b>(obj)
- <b>isElement</b>(ele)
- <b>isElement2</b>(ele)
- <b>getElementPos</b>(ele)
- <b>hasClass</b>(elementOrId,ele)
- <b>elementOrId</b>(elementOrId,str,mode)
- <b>onReady</b>(fn)


<hr><br><br>




# <b>Documentation</b>

## <b>arrayClear(arr)</b>
<b>Information:</b><br>
Clears an array<br>
#### <b>Parameters:</b>
- <b>arr</b><br>
<b>Type: </b>array<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The array you want to clear / empty<br>

```
arrayClear(myArray)
```
<hr><br><br>

## <b>arrayContains(needle,haystack)</b>
<b>Information:</b><br>
Finds a needle in a haystack.<br>
#### <b>Parameters:</b>
- <b>needle</b><br>
<b>Type: </b>string<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>What you are looking for.<br>

- <b>haystack</b><br>
<b>Type: </b>array<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The array you want to search.<br>

<hr><br><br>

## <b>arrayEmpty(arr)</b>
<b>Information:</b><br>
Clears an array<br>
#### <b>Parameters:</b>
- <b>arr</b><br>
<b>Type: </b>array<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The array you want to clear / empty<br>

```
arrayEmpty(myArray)
```
<hr><br><br>

## <b>arrayGetMax(arr)</b>
<b>Information:</b><br>
Gets the maximum value from the supplied array.<br>
#### <b>Parameters:</b>
- <b>arr</b><br>
<b>Type: </b>array<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The array you want to get the maximum value within.<br>

Returns:
Number<br>
```
let max = arrayGetMax(myArray)
```
<hr><br><br>

## <b>arrayGetMin(arr)</b>
<b>Information:</b><br>
Gets the minimum value from the supplied array.<br>
#### <b>Parameters:</b>
- <b>arr</b><br>
<b>Type: </b>array<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The array you want to get the minimum value from.<br>

Returns:
Number<br>
```
let max = arrayGetMin(myArray)
```
<hr><br><br>

## <b>arrayRemoveIndex(arr,index)</b>
<b>Information:</b><br>
Removes an index from the supplied array.<br>
#### <b>Parameters:</b>
- <b>arr</b><br>
<b>Type: </b>array<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The array you want to remove the index from.<br>

- <b>index</b><br>
<b>Type: </b>number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The index which you want to remove.<br>

Returns:
Array<br>
```
let max = arrayRemoveIndex(arr,index)
```
<hr><br><br>

## <b>arrayRemoveValue(arr,value)</b>
<b>Information:</b><br>
Removes a value from the supplied array.<br>
#### <b>Parameters:</b>
- <b>arr</b><br>
<b>Type: </b>array<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The array you want to remove the value from.<br>

- <b>value</b><br>
<b>Type: </b>string || number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The value which you want to remove from the array.<br>

Returns:
Array<br>
```
let max = arrayRemoveValue(arr, value)
```
<hr><br><br>

## <b>arrayShuffle(arr)</b>
<b>Information:</b><br>
Shuffles / Randomizes an array.<br>
#### <b>Parameters:</b>
- <b>arr</b><br>
<b>Type: </b>array<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The array you want to shuffle.<br>

Returns:
Array<br>
```
let shuffledArray = arrayShuffle(myArray)
```
<hr><br><br>

## <b>arrayShuffle2(arr)</b>
<b>Information:</b><br>
Shuffles / Randomizes an array (method 2).<br>
#### <b>Parameters:</b>
- <b>arr</b><br>
<b>Type: </b>array<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The array you want to shuffle.<br>

Returns:
Array<br>
```
let shuffledArray = arrayShuffle2(myArray)
```
<hr><br><br>

## <b>isInArray(needle,haystack)</b>
<b>Information:</b><br>
Searches the array for your value.<br>
#### <b>Parameters:</b>
- <b>needle</b><br>
<b>Type: </b>string||number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>What you are looking for.<br>

- <b>haystack</b><br>
<b>Type: </b>array<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The array you want to search.<br>

Returns:
Boolean<br>
```
let found = isInArray(needle, haystack)
```
<hr><br><br>

## <b>isStringInArray(needle,haystack)</b>
<b>Information:</b><br>
Searches the array for a string.<br>
#### <b>Parameters:</b>
- <b>needle</b><br>
<b>Type: </b>string||number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>String you are looking for.<br>

- <b>haystack</b><br>
<b>Type: </b>array<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The array you want to search.<br>

Returns:
Boolean<br>
```
let found = isStringInArray(needle, haystack)
```
<hr><br><br>

## <b>getBrowser()</b>
<b>Information:</b><br>
Gets the browser you are using.<br>
#### <b>Parameters:</b>
Returns:
String (opera | chrome | safari | firefox | msie | trident | edge)<br>
```
let browser = getBrowser()
```
<hr><br><br>

## <b>getBrowserX()</b>
<b>Information:</b><br>
Gets the viewport x position.<br>
#### <b>Parameters:</b>
Returns:
Number<br>
```
let x = getBrowserX()
```
<hr><br><br>

## <b>getBrowserY()</b>
<b>Information:</b><br>
Gets the viewport y position.<br>
#### <b>Parameters:</b>
Returns:
Number<br>
```
let x = getBrowserY()
```
<hr><br><br>

## <b>isInViewport(el)</b>
<b>Information:</b><br>
Checks whether an element is in view.<br>
#### <b>Parameters:</b>
- <b>el</b><br>
<b>Type: </b>element<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The element you want to check is in view<br>

Returns:
Boolean<br>
```
let isInView = isInViewport(myElement)
```
<hr><br><br>

## <b>argsToObject(fArgs,appArgs,strict)</b>
<b>Information:</b><br>
Parses arguments to an object of your choice with strict or relaxed assigning features (good for defaults and instantiation processing).<br>
#### <b>Parameters:</b>
- <b>fArgs</b><br>
<b>Type: </b>Object<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The arguments object from the function or class. Eg: Use arguments[0] from constructor in a class.<br>

- <b>appArgs</b><br>
<b>Type: </b>Object<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The arguments object you wish to assign arguments to.<br>

- <b>strict</b><br>
<b>Type: </b>Boolean<br>
<b>Required: </b>false<br>
<b>Default: </b>true<br>
<b>Info: </b>Whether you want to enable strict assignments only. Enabling strict will warn users of the function that the argument supplied is not supported.<br>

Returns:
Boolean<br>
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

## <b>boolToInt(bool)</b>
<b>Information:</b><br>
Converts a boolean to a number.<br>
#### <b>Parameters:</b>
- <b>bool</b><br>
<b>Type: </b>Boolean<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The variable you wish to convert.<br>

Returns:
Number (1 || 0)<br>
```
let strBool = boolToInt(isMobile)
```
<hr><br><br>

## <b>boolToString(bool)</b>
<b>Information:</b><br>
Converts a boolean to a string of true || false.<br>
#### <b>Parameters:</b>
- <b>bool</b><br>
<b>Type: </b>Boolean<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The variable you wish to convert.<br>

Returns:
String<br>
```
let strBool = boolToString(isMobile)
```
<hr><br><br>

## <b>boolToYesNo(bool)</b>
<b>Information:</b><br>
Converts a boolean to a string of yes || no.<br>
#### <b>Parameters:</b>
- <b>bool</b><br>
<b>Type: </b>Boolean<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The variable you wish to convert.<br>

Returns:
String<br>
```
let answer = boolToYesNo(boolAnswer)
```
<hr><br><br>

## <b>degToRad(input)</b>
<b>Information:</b><br>
Converts degrees to radians.<br>
#### <b>Parameters:</b>
- <b>input</b><br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The number you want to convert.<br>

Returns:
Number<br>
```
let rad = degToRad(deg)
```
<hr><br><br>

## <b>hexToRgb(hex)</b>
<b>Information:</b><br>
Converts hex color to an object with r,g,b props.<br>
#### <b>Parameters:</b>
- <b>hex</b><br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>Hex color string eg #FFCC00<br>

Returns:
Object {r,g,b}<br>
```
let rgb = hexToRgb('#FFCC00')
```
<hr><br><br>

## <b>numToHex(num)</b>
<b>Information:</b><br>
Converts a number to hexadecimal.<br>
#### <b>Parameters:</b>
- <b>num</b><br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The number you want to convert.<br>

Returns:
String<br>
```
let hex = numToHex(12)
```
<hr><br><br>

## <b>objectToObject(src,dest,strict)</b>
<b>Information:</b><br>
Parses an object to another object of your choice with strict or relaxed assigning features (good for defaults and instantiation processing).<br>
#### <b>Parameters:</b>
- <b>src</b><br>
<b>Type: </b>Object<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The source object. Eg: Use arguments[0] from constructor in a class.<br>

- <b>dest</b><br>
<b>Type: </b>Object<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The target object you wish to assign arguments to.<br>

- <b>strict</b><br>
<b>Type: </b>Boolean<br>
<b>Required: </b>false<br>
<b>Default: </b>true<br>
<b>Info: </b>Whether you want to enable strict assignments only. Enabling strict will warn users of the function that the argument supplied is not supported.<br>

Returns:
Boolean<br>
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

## <b>radToDeg(input)</b>
<b>Information:</b><br>
Converts radians to degrees.<br>
#### <b>Parameters:</b>
- <b>input</b><br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The number you want to convert.<br>

Returns:
Number<br>
```
let rad = radToDeg(deg)
```
<hr><br><br>

## <b>RGBToHex(r,g,b)</b>
<b>Information:</b><br>
Converts an RGB value to a hex color value.<br>
#### <b>Parameters:</b>
- <b>r</b><br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The number you want to convert.<br>

- <b>g</b><br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The number you want to convert.<br>

- <b>b</b><br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The number you want to convert.<br>

Returns:
String<br>
```
let hex = RGBToHex(255,100,55);
```
<hr><br><br>

## <b>RGBToHex2(r,g,b)</b>
<b>Information:</b><br>
Converts an RGB value to a hex color value (Method 2).<br>
#### <b>Parameters:</b>
- <b>r</b><br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The number you want to convert.<br>

- <b>g</b><br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The number you want to convert.<br>

- <b>b</b><br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The number you want to convert.<br>

Returns:
String<br>
```
let hex = RGBToHex2(255,100,55);
```
<hr><br><br>

## <b>stringToBool(str)</b>
<b>Information:</b><br>
Converts a String to Boolean.<br>
#### <b>Parameters:</b>
- <b>str</b><br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The value you want to convert.<br>

Returns:
Boolean<br>
```
let answer1 = stringToBool('yes');
let answer2 = stringToBool('y');
let answer3 = stringToBool('1');
let answer4 = stringToBool('no');
let answer5 = stringToBool('n');
let answer6 = stringToBool('0');
```
<hr><br><br>

## <b>getCookie(name)</b>
<b>Information:</b><br>
Fetches a cookie by name.<br>
#### <b>Parameters:</b>
- <b>name</b><br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The name of the cookie you want to retrieve.<br>

Returns:
String<br>
```
let email = getCookie('email')
```
<hr><br><br>

## <b>setCookie(name,name,name)</b>
<b>Information:</b><br>
Fetches a cookie by name.<br>
#### <b>Parameters:</b>
- <b>name</b><br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The name of the cookie you want to retrieve.<br>

- <b>name</b><br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The name of the cookie you want to retrieve.<br>

- <b>name</b><br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The name of the cookie you want to retrieve.<br>

```
let name = 'email';
let value = 'darcey.lloyd@gmail.com';
let lifeInDays = 30;
setCookie(name,value,lifeInDays)
```
<hr><br><br>

## <b>getDaysBetween(name,name)</b>
<b>Information:</b><br>
Gets the number of days between 2 dates.<br>
#### <b>Parameters:</b>
- <b>name</b><br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The name of the cookie you want to retrieve.<br>

- <b>name</b><br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The name of the cookie you want to retrieve.<br>

Returns:
Number<br>
```
/* NOTE: Month is indexed at 0 */

let startDateTime = new Date('2020,3,26')
let endDateTime = new Date('2020,3,26')
let days = getDaysBetween('startDateTime, endDateTime')
```
<hr><br><br>

## <b>getMySQLDateTimeString()</b>
<b>Information:</b><br>
Gets the date as a mysql injectable string.<br>
#### <b>Parameters:</b>
Returns:
String<br>
```
let dte = getMySQLDateTimeString()
```
<hr><br><br>

## <b>getUKDate(dte,separator)</b>
<b>Information:</b><br>
Gets a UK formatted date string from a supplied date.<br>
#### <b>Parameters:</b>
- <b>dte</b><br>
<b>Type: </b>Date<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The date you wish to get the UK format date string from.<br>

- <b>separator</b><br>
<b>Type: </b>String<br>
<b>Required: </b>false<br>
<b>Default: </b>-<br>
<b>Info: </b>What the date string segments will be separated by.<br>

Returns:
String<br>
```
let ukDate = getUKDate(new Date(),'-')
```
<hr><br><br>

## <b>getUkDateFromDbDateTime(dbDateString)</b>
<b>Information:</b><br>
Gets a UK formatted date string from a supplied db date string.<br>
#### <b>Parameters:</b>
- <b>dbDateString</b><br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>This should be a datetime string from a db query.<br>

Returns:
String<br>
```
let ukDate = getUkDateFromDbDateTime(dbDateString)
```
<hr><br><br>

## <b>getUkDateTimeFromDbDateTime(dbDateTimeString)</b>
<b>Information:</b><br>
Gets a UK formatted date and time string from a supplied db date time string.<br>
#### <b>Parameters:</b>
- <b>dbDateTimeString</b><br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>This should be a datetime string from a db query.<br>

Returns:
String<br>
```
let ukDate = getUkDateTimeFromDbDateTime(dbDateTimeString)
```
<hr><br><br>

## <b>getUSDate(dte,separator)</b>
<b>Information:</b><br>
Gets a US formatted date string from a supplied date.<br>
#### <b>Parameters:</b>
- <b>dte</b><br>
<b>Type: </b>Date<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The date you wish to get the US format date string from.<br>

- <b>separator</b><br>
<b>Type: </b>String<br>
<b>Required: </b>false<br>
<b>Default: </b>-<br>
<b>Info: </b>What the date string segments will be separated by.<br>

Returns:
String<br>
```
let usDate = getUKDate(new Date(),'-')
```
<hr><br><br>

## <b>appendTo(elementOrId,msg,endOfLine)</b>
<b>Information:</b><br>
Appends a string to an element, with or without a < BR > tag.<br>
#### <b>Parameters:</b>
- <b>elementOrId</b><br>
<b>Type: </b>Element||ElementID<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The element or element id of the element you wish to append the string within.<br>

- <b>msg</b><br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The string you wish to append to the html element.<br>

- <b>endOfLine</b><br>
<b>Type: </b>String<br>
<b>Required: </b>false<br>
<b>Default: </b>< br ><br>
<b>Info: </b>The end of the string that will be appended to the element, set to '' if you dont want the < br ><br>

```
appendTo(elementOrId,msg,'')
```
<hr><br><br>

## <b>attachDebug(no,position,ele)</b>
<b>Information:</b><br>
Displays a visual debug list so you can watch variables change in real time (Most excellent for debug with keys, animations etc). Click row to inject that value into copy and paste buffer. See <b>debugTo</b> to use attachDebug, usage example below.<br>
#### <b>Parameters:</b>
- <b>no</b><br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The number of debug elements you want available.<br>

- <b>position</b><br>
<b>Type: </b>String (tl, top left, tr, top right, bl, btm left, br, btm right)<br>
<b>Required: </b>true<br>
<b>Default: </b>top left<br>
<b>Info: </b>Position of the debug list.<br>

- <b>ele</b><br>
<b>Type: </b>Element<br>
<b>Required: </b>false<br>
<b>Default: </b>document.body<br>
<b>Info: </b>The debug list will be appended to this element<br>

```
attachDebug(3)
debugTo(0,'hello world 1')
debugTo(1,'hello world 2')
debugTo(2,'hello world 3')
```
<hr><br><br>

## <b>debugTo(index,str)</b>
<b>Information:</b><br>
Sets a visual debug element so you can visually track variables without the use of the console, excellent for working with the graphical side of things, animations, webgl etc.<br>
#### <b>Parameters:</b>
- <b>index</b><br>
<b>Type: </b>Number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The debug container index to write to (setup via <b>attachDebug</b>).<br>

- <b>str</b><br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The string you want to write to the debug container.<br>

```
attachDebug(3)
debugTo(0,'hello world 1')
debugTo(1,'hello world 2')
debugTo(2,'hello world 3')
```
<hr><br><br>

## <b>log(arg)</b>
<b>Information:</b><br>
Lazy version of console.log, no more typing console!<br>
#### <b>Parameters:</b>
- <b>arg</b><br>
<b>Type: </b>*<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>arg gets injected into console.log<br>

```
log('Once you use me, you will never stop using me')
let a = 4;
log('a = ' + a)
log(`a = ${a}`)
```
<hr><br><br>

## <b>logTo(elementOrId,msg,append,endOfLine)</b>
<b>Information:</b><br>
Appends a string to an element, with or without a < BR > tag.<br>
#### <b>Parameters:</b>
- <b>elementOrId</b><br>
<b>Type: </b>Element||ElementID<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The element or element id of the element you wish to append the string within.<br>

- <b>msg</b><br>
<b>Type: </b>String<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The string you wish to append to the html element.<br>

- <b>append</b><br>
<b>Type: </b>Boolean<br>
<b>Required: </b>false<br>
<b>Default: </b>false<br>
<b>Info: </b>Method of attaching the logging message, append (true) or prepend (false) aka top vs bottom.<br>

- <b>endOfLine</b><br>
<b>Type: </b>String<br>
<b>Required: </b>false<br>
<b>Default: </b><br>
<b>Info: </b>The end of the string that will be appended to the element, set to '< br >' if you want a line break<br>

```
logTo(elementOrId,msg,true)
```
<hr><br><br>

## <b>getIEVersion()</b>
<b>Information:</b><br>
Gets the version of IE<br>
#### <b>Parameters:</b>
```
let version = getIEVersion()
```
<hr><br><br>

## <b>getOS(testAgent)</b>
<b>Information:</b><br>
Gets what OS is in use<br>
#### <b>Parameters:</b>
- <b>testAgent</b><br>
<b>Type: </b>String<br>
<b>Required: </b>false<br>
<b>Default: </b>null<br>
<b>Info: </b>For use if you want to test a user agent string<br>

```
let os = getOS()
```
<hr><br><br>

## <b>isAndroid()</b>
<b>Information:</b><br>
Detects if Android or not.<br>
#### <b>Parameters:</b>
```
let test = isAndroid()
```
<hr><br><br>

## <b>isChrome()</b>
<b>Information:</b><br>
Detects if Chrome or not.<br>
#### <b>Parameters:</b>
```
let test = isChrome()
```
<hr><br><br>

## <b>isEdge()</b>
<b>Information:</b><br>
Detects if Edge or not.<br>
#### <b>Parameters:</b>
```
let test = isEdge()
```
<hr><br><br>

## <b>isFireFox()</b>
<b>Information:</b><br>
Detects if FireFox or not.<br>
#### <b>Parameters:</b>
```
let test = isFireFox()
```
<hr><br><br>

## <b>isIE()</b>
<b>Information:</b><br>
Detects if IE or not.<br>
#### <b>Parameters:</b>
```
let test = isIE()
```
<hr><br><br>

## <b>isIOS()</b>
<b>Information:</b><br>
Detects if iOS or not.<br>
#### <b>Parameters:</b>
```
let test = isIOS()
```
<hr><br><br>

## <b>isMobile()</b>
<b>Information:</b><br>
Detects if mobile or not.<br>
#### <b>Parameters:</b>
```
let mobile = isMobile()
```
<hr><br><br>

## <b>isOpera()</b>
<b>Information:</b><br>
Detects if Opera or not.<br>
#### <b>Parameters:</b>
```
let test = isOpera()
```
<hr><br><br>

## <b>isSafari()</b>
<b>Information:</b><br>
Detects if Safari or not.<br>
#### <b>Parameters:</b>
```
let test = isSafari()
```
<hr><br><br>

## <b>getElementPosition(el)</b>
<b>Information:</b><br>
Gets an elements position.<br>
#### <b>Parameters:</b>
- <b>el</b><br>
<b>Type: </b>Element<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>Element to get the position of.<br>

Returns:
Object {left,top}<br>
```
let pos = getElementPosition(myElement)
```
<hr><br><br>

## <b>getElementPos(el)</b>
<b>Information:</b><br>
Gets an elements position.<br>
#### <b>Parameters:</b>
- <b>el</b><br>
<b>Type: </b>Element<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>Element to get the position of.<br>

Returns:
Object {left,top}<br>
```
let pos = getElementPos(myElement)
```
<hr><br><br>

## <b>isDOM(obj)</b>
<b>Information:</b><br>
Checks if object is HTMLElement.<br>
#### <b>Parameters:</b>
- <b>obj</b><br>
<b>Type: </b>Element||Object<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>Element / Object to check.<br>

```
let result = isDOM(myElement)
```
<hr><br><br>

## <b>isElement(ele)</b>
<b>Information:</b><br>
Checks if object is HTMLElement.<br>
#### <b>Parameters:</b>
- <b>ele</b><br>
<b>Type: </b>Element||Object<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>Element / Object to check.<br>

```
let result = isElement(myElement)
```
<hr><br><br>

## <b>isElement2(ele)</b>
<b>Information:</b><br>
Checks if object is HTMLElement (Method 2).<br>
#### <b>Parameters:</b>
- <b>ele</b><br>
<b>Type: </b>Element||Object<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>Element / Object to check.<br>

```
let result = isElement2(myElement)
```
<hr><br><br>

## <b>getElementPos(ele)</b>
<b>Information:</b><br>
Gets an elements offset top position.<br>
#### <b>Parameters:</b>
- <b>ele</b><br>
<b>Type: </b>Element<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>Element to get the position of.<br>

Returns:
Number || False<br>
```
let pos = getElementOffsetTop(myElement)
```
<hr><br><br>

## <b>hasClass(elementOrId,ele)</b>
<b>Information:</b><br>
Gets an elements offset top position.<br>
#### <b>Parameters:</b>
- <b>elementOrId</b><br>
<b>Type: </b>Element||ElementID<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>

- <b>ele</b><br>
<b>Type: </b>Element<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>Element to get the position of.<br>

Returns:
Number || False<br>
```
let classAttached = hasClass(myElement,'selected')
```
<hr><br><br>

## <b>elementOrId(elementOrId,str,mode)</b>
<b>Information:</b><br>
Set a an elements HTML content.<br>
#### <b>Parameters:</b>
- <b>elementOrId</b><br>
<b>Type: </b>Element||ElementID<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The element or the element ID.<br>

- <b>str</b><br>
<b>Type: </b>String||Number<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>
<b>Info: </b>The content you want to put into the html element.<br>

- <b>mode</b><br>
<b>Type: </b>String (set|append|prepend)<br>
<b>Required: </b>false<br>
<b>Default: </b>set<br>
<b>Info: </b>The method in which to set the HTML of the targeted element, set it clearing all content or to append or prepend you content.<br>

```
setHTML(myElement,'hello world')
setHTML(myElement,'hello world','append')
setHTML(myElement,'hello world','prepend')

setHTML('my-element-id-1','hello world')
setHTML('my-element-id-2','hello world','append')
setHTML('my-element-id-3','hello world','prepend')
```
<hr><br><br>

## <b>onReady(fn)</b>
<b>Information:</b><br>
Checks if the DOM is ready and then executes a function.<br>
#### <b>Parameters:</b>
- <b>fn</b><br>
<b>Type: </b>Function<br>
<b>Required: </b>true<br>
<b>Default: </b>null<br>

Returns:
Number || False<br>
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

