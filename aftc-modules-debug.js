// JSODOC = {
//     "method": "inertiaTo",
//     "params": [
//         {
//             "name": "current",
//             "type": "Number",
//             "required": true,
//             "info": "Current value."
//         },
//         {
//             "name": "target",
//             "type": "Number",
//             "required": true,
//             "info": "Value to reach."
//         },
//         {
//             "name": "amount",
//             "type": "Number",
//             "required": true,
//             "info": "Inertia speed (dec/inc speed)."
//         }
//     ],
//     "info": "Calculates the target value of inertia in a loop/requestAnimationFrame from 1 value to another at speed.",
//     "example": [
//         "let newX = inertiaTo(curX,targetX,0.5)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "arrayClear",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to clear / empty"
//         }
//     ],
//     "info": "Clears an array",
//     "example": [
//         "arrayClear(myArray)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "arrayContains",
//     "params": [
//         {
//             "name": "needle",
//             "type": "string",
//             "required": true,
//             "default": null,
//             "info": "What you are looking for."
//         },
//         {
//             "name": "haystack",
//             "type": "array",
//             "required": true,
//             "default": "null",
//             "info": "The array you want to search."
//         }
//     ],
//     "info": "Finds a needle in a haystack."
// } JSODOC
// JSODOC = {
//     "method": "arrayEmpty",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to clear / empty"
//         }
//     ],
//     "info": "Clears an array",
//     "example": [
//         "arrayEmpty(myArray)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "arrayGetMax",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to get the maximum value within."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Gets the maximum value from the supplied array.",
//     "example": [
//         "let max = arrayGetMax(myArray)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "arrayGetMin",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to get the minimum value from."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Gets the minimum value from the supplied array.",
//     "example": [
//         "let max = arrayGetMin(myArray)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "arrayRemoveIndex",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to remove the index from."
//         },
//         {
//             "name": "index",
//             "type": "number",
//             "required": true,
//             "default": null,
//             "info": "The index which you want to remove."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Removes an index from the supplied array.",
//     "example": [
//         "let max = arrayRemoveIndex(arr,index)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "arrayRemoveValue",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to remove the value from."
//         },
//         {
//             "name": "value",
//             "type": "string || number",
//             "required": true,
//             "default": null,
//             "info": "The value which you want to remove from the array."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Removes a value from the supplied array.",
//     "example": [
//         "let max = arrayRemoveValue(arr, value)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "arrayShuffle",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to shuffle."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Shuffles / Randomizes an array.",
//     "example": [
//         "let shuffledArray = arrayShuffle(myArray)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "arrayShuffle2",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to shuffle."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Shuffles / Randomizes an array (method 2).",
//     "example": [
//         "let shuffledArray = arrayShuffle2(myArray)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isArrayInString",
//     "params": [
//         {
//             "name": "input",
//             "type": "string",
//             "required": true,
//             "default": null,
//             "info": "String you want to look for matches in."
//         },
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array of strings you want to search for in input."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Searches the array for a string.",
//     "example": [
//         "let found = isStringInArray(needle, haystack)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isInArray",
//     "params": [
//         {
//             "name": "needle",
//             "type": "*",
//             "required": true,
//             "default": null,
//             "info": "What you are looking for."
//         },
//         {
//             "name": "haystack",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to search."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Searches the array for your value.",
//     "example": [
//         "let found = isInArray(needle, haystack)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isStringInArray",
//     "params": [
//         {
//             "name": "needle",
//             "type": "string",
//             "required": true,
//             "default": null,
//             "info": "String you are looking for."
//         },
//         {
//             "name": "haystack",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to search."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Searches the array for a string.",
//     "example": [
//         "let found = isStringInArray(needle, haystack)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getBrowser",
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets the name of the browser you are using (opera | chrome | safari | firefox | msie | trident | edge).",
//     "example": [
//         "let browser = getBrowser()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getBrowserX",
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Gets the viewport x position.",
//     "example": [
//         "let x = getBrowserX()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getBrowserY",
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Gets the viewport y position.",
//     "example": [
//         "let x = getBrowserY()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isInViewport",
//     "params": [
//         {
//             "name": "el",
//             "type": "element",
//             "required": true,
//             "default": null,
//             "info": "The element you want to check is in view"
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks whether an element is in view.",
//     "example": [
//         "let isInView = isInViewport(myElement)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "argsToObject",
//     "params": [
//         {
//             "name": "src",
//             "type": "Object",
//             "required": true,
//             "default": null,
//             "info": "The object from the function or class. Eg: Use arguments[0] from constructor in a class. Or any object."
//         },
//         {
//             "name": "dest",
//             "type": "Object",
//             "required": true,
//             "default": null,
//             "info": "The arguments object you wish to assign arguments to."
//         },
//         {
//             "name": "strict",
//             "type": "Boolean",
//             "required": false,
//             "default": true,
//             "info": "Whether you want to enable strict assignments only. Enabling strict will warn users of the function that the argument supplied is not supported."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Parses arguments to an object of your choice with strict or relaxed assigning features (good for defaults and instantiation processing).",
//     "example": [
//         "/* Class based example */",
//         "constructor(){",
//         "\tthis.appArgs = {a:0,b:0};",
//         "\targsToObject(arguments[0], this.appArgs, true)",
//         "}",
//         "",
//         "/* Instantiation of your class (not the only use) */",
//         "NOTE: c if strict enabled will give a warning, this is a good thing prevents users from incorrectly using your class's or functions */\n",
//         "new MyApp({a:1,b:3,c:4});"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "boolToInt",
//     "params": [
//         {
//             "name": "bool",
//             "type": "Boolean",
//             "required": true,
//             "default": null,
//             "info": "The variable you wish to convert."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Converts a boolean to a number.",
//     "example": [
//         "let strBool = boolToInt(isMobile)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "boolToString",
//     "params": [
//         {
//             "name": "bool",
//             "type": "Boolean",
//             "required": true,
//             "default": null,
//             "info": "The variable you wish to convert."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Converts a boolean to a string of true || false.",
//     "example": [
//         "let strBool = boolToString(isMobile)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "boolToYesNo",
//     "params": [
//         {
//             "name": "bool",
//             "type": "Boolean",
//             "required": true,
//             "default": null,
//             "info": "The variable you wish to convert."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Converts a boolean to a string of yes || no.",
//     "example": [
//         "let answer = boolToYesNo(boolAnswer)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "degToRad",
//     "params": [
//         {
//             "name": "input",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Converts degrees to radians.",
//     "example": [
//         "let rad = degToRad(deg)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "hexToRgb",
//     "params": [
//         {
//             "name": "hex",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Hex color string eg #FFCC00"
//         }
//     ],
//     "returns": {
//         "type": "object",
//         "def": [
//             { "name": "r", "type": "Number"},
//             { "name": "g", "type": "Number"},
//             { "name": "b", "type": "Number"}
//         ]
//     },
//     "info": "Converts hex color to an object with r,g,b props.",
//     "example": [
//         "let rgb = hexToRgb('#FFCC00')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "numToHex",
//     "params": [
//         {
//             "name": "num",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Converts a number to hexadecimal.",
//     "example": [
//         "let hex = numToHex(12)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "objectToObject",
//     "params": [
//         {
//             "name": "src",
//             "type": "Object",
//             "required": true,
//             "default": null,
//             "info": "The source object. Eg: Use arguments[0] from constructor in a class."
//         },
//         {
//             "name": "dest",
//             "type": "Object",
//             "required": true,
//             "default": null,
//             "info": "The target object you wish to assign arguments to."
//         },
//         {
//             "name": "strict",
//             "type": "Boolean",
//             "required": false,
//             "default": true,
//             "info": "Whether you want to enable strict assignments only. Enabling strict will warn users of the function that the argument supplied is not supported."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Parses an object to another object of your choice with strict or relaxed assigning features (good for defaults and instantiation processing).",
//     "example": [
//         "/* Class based example */",
//         "constructor(){",
//         "\tthis.appArgs = {a:0,b:0};",
//         "\tobjectToObject(arguments[0], this.appArgs, true)",
//         "}",
//         "",
//         "/* Instantiation of your class (not the only use) */",
//         "NOTE: c if strict enabled will give a warning, this is a good thing prevents users from incorrectly using your class's or functions */\n",
//         "new MyApp({a:1,b:3,c:4});"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "radToDeg",
//     "params": [
//         {
//             "name": "input",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Converts radians to degrees.",
//     "example": [
//         "let rad = radToDeg(deg)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "rgbToHex",
//     "params": [
//         {
//             "name": "r",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         },
//         {
//             "name": "g",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         },
//         {
//             "name": "b",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Converts an RGB value to a hex color value.",
//     "example": [
//         "let hex = RGBToHex(255,100,55);"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "rgbToHex2",
//     "params": [
//         {
//             "name": "r",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         },
//         {
//             "name": "g",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         },
//         {
//             "name": "b",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Converts an RGB value to a hex color value (Method 2).",
//     "example": [
//         "let hex = rgbToHex2(255,100,55);"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "stringToBool",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The value you want to convert."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Converts a String to Boolean.",
//     "example": [
//         "let answer1 = stringToBool('yes');",
//         "let answer2 = stringToBool('y');",
//         "let answer3 = stringToBool('1');",
//         "let answer4 = stringToBool('no');",
//         "let answer5 = stringToBool('n');",
//         "let answer6 = stringToBool('0');"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getCookie",
//     "params": [
//         {
//             "name": "name",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The name of the cookie you want to retrieve."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Fetches a cookie by name.",
//     "example": [
//         "let email = getCookie('email')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "listCookies",
//     "info": "Lists all available cookie.",
//     "example": [
//         "listCookies()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "setCookie",
//     "params": [
//         {
//             "name": "name",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The name of the cookie you want to retrieve."
//         },
//         {
//             "name": "cvalue",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The value you want to put in the cookie."
//         },
//         {
//             "name": "exdays",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number of days you want the cookie to expire in."
//         }
//     ],
//     "info": "Fetches a cookie by name.",
//     "example": [
//         "let name = 'email';",
//         "let value = 'darcey.lloyd@gmail.com';",
//         "let lifeInMins = 30;",
//         "setCookie(name,value,lifeInMins)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getDaysBetween",
//     "params": [
//         {
//             "name": "startDateTime",
//             "type": "Date",
//             "required": true,
//             "default": null,
//             "info": "The start date."
//         },
//         {
//             "name": "endDateTime",
//             "type": "Date",
//             "required": true,
//             "default": null,
//             "info": "The end date."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Gets the number of days between 2 dates.",
//     "example": [
//         "/* NOTE: Month is indexed at 0 */\n",
//         "let startDateTime = new Date('2020,3,26')",
//         "let endDateTime = new Date('2020,3,26')",
//         "let days = getDaysBetween('startDateTime, endDateTime')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getMySQLDateTimeString",
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets the date as a mysql injectable string.",
//     "example": [
//         "let dte = getMySQLDateTimeString()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getUKDate",
//     "params": [
//         {
//             "name": "dte",
//             "type": "Date || String",
//             "required": true,
//             "default": null,
//             "info": "The date you wish to get the UK format date string from."
//         },
//         {
//             "name": "separator",
//             "type": "String",
//             "required": false,
//             "default": "-",
//             "info": "What the date string segments will be separated by."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets a UK formatted date string from a supplied date.",
//     "example": [
//         "let ukDate = getUKDate(new Date(),'-')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getUKDateFromDbDateTime",
//     "params": [
//         {
//             "name": "dbDateString",
//             "type": "Date || String",
//             "required": true,
//             "default": null,
//             "info": "This should be a datetime string from a db query."
//         },
//         {
//             "name": "separator",
//             "type": "String",
//             "required": false,
//             "default": "-",
//             "info": "What the date string segments will be separated by."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets a UK formatted date string from a supplied db date string.",
//     "example": [
//         "let ukDate = getUkDateFromDbDateTime(dbDateString)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getUKDateTime",
//     "params": [
//         {
//             "name": "dte",
//             "type": "Date || String",
//             "required": true,
//             "default": null,
//             "info": "The date you wish to get the UK format date string from."
//         },
//         {
//             "name": "separator",
//             "type": "String",
//             "required": false,
//             "default": "-",
//             "info": "What the date string segments will be separated by."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets a UK formatted date string from a supplied date.",
//     "example": [
//         "let ukDate = getUKDate(new Date(),'-')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getUkDateTimeFromDbDateTime",
//     "params": [
//         {
//             "name": "dte",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "This should be a datetime string from a db query."
//         },
//         {
//             "name": "separator",
//             "type": "String",
//             "required": false,
//             "default": "-",
//             "info": "What the date string segments will be separated by."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets a UK formatted date and time string from a supplied db date time string.",
//     "example": [
//         "let ukDate = getUkDateTimeFromDbDateTime(dte)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getUSDate",
//     "params": [
//         {
//             "name": "dte",
//             "type": "Date",
//             "required": true,
//             "default": null,
//             "info": "The date you wish to get the US format date string from."
//         },
//         {
//             "name": "separator",
//             "type": "String",
//             "required": false,
//             "default": "-",
//             "info": "What the date string segments will be separated by."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets a US formatted date string from a supplied date.",
//     "example": [
//         "let usDate = getUKDate(new Date(),'-')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "appendTo",
//     "params": [
//         {
//             "name": "elementOrId",
//             "type": "Element||ElementID",
//             "required": true,
//             "default": null,
//             "info": "The element or element id of the element you wish to append the string within."
//         },
//         {
//             "name": "msg",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The string you wish to append to the html element."
//         },
//         {
//             "name": "endOfLine",
//             "type": "String",
//             "required": false,
//             "default": "< br >",
//             "info": "The end of the string that will be appended to the element, set to '' if you dont want the < br >"
//         }
//     ],
//     "info": "Appends a string to an element, with or without a < BR > tag.",
//     "example": [
//         "appendTo(elementOrId,msg,'')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "attachDebug",
//     "params": [
//         {
//             "name": "no",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The number of debug elements you want available."
//         },
//         {
//             "name": "position",
//             "type": "String (tl, top left, tr, top right, bl, btm left, br, btm right)",
//             "required": true,
//             "default": "top left",
//             "info": "Position of the debug list."
//         },
//         {
//             "name": "ele",
//             "type": "Element",
//             "required": false,
//             "default": "document.body",
//             "info": "The debug list will be appended to this element"
//         }
//     ],
//     "info": "Displays a visual debug list so you can watch variables change in real time (Most excellent for debug with keys, animations etc). Click row to inject that value into copy and paste buffer. See <b>debugTo</b> to use attachDebug, usage example below.",
//     "example": [
//         "attachDebug(3)",
//         "debugTo(0,'hello world 1')",
//         "debugTo(1,'hello world 2')",
//         "debugTo(2,'hello world 3')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "debugTo",
//     "params": [
//         {
//             "name": "index",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The debug container index to write to (setup via <b>attachDebug</b>)."
//         },
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "default": "null",
//             "info": "The string you want to write to the debug container."
//         }
//     ],
//     "info": "Sets a visual debug element so you can visually track variables without the use of the console, excellent for working with the graphical side of things, animations, webgl etc.",
//     "example": [
//         "attachDebug(3)",
//         "debugTo(0,'hello world 1')",
//         "debugTo(1,'hello world 2')",
//         "debugTo(2,'hello world 3')"
//     ]
// } JSODOC
// JSODOC = {
//     "function": "LazyLog",
//     "methods": [
//         {
//             "name": "log",
//             "info": "Short for console.log"
//         },
//         {
//             "name": "log",
//             "info": "Short for console.log"
//         },
//         {
//             "name": "log",
//             "info": "Short for console.log"
//         },
//         {
//             "name": "EnableLazyLogging",
//             "info": "Enables lazy logging functions (log,warn,error) globaly (uses window scope)"
//         },
//         {
//             "name": "DisableLazyLogging",
//             "info": "Disables lazy logging functions (log,warn,error) globaly (uses window scope)"
//         },
//         {
//             "name": "EnableLazyLog",
//             "info": "Enables lazy logging functions (log,warn,error) globaly (uses window scope)"
//         },
//         {
//             "name": "DisableLazyLog",
//             "info": "Disables lazy logging functions (log,warn,error) globaly (uses window scope)"
//         }
//     ],
//     "info": "Adds log, warn and error to the window scope (globally), so no more typing console. anymore.",
//     "params": [
//         {
//             "name": "NA",
//             "type": "any",
//             "required": false,
//             "default": null,
//             "info": "Use as if your were using console.log, console.warn and console.error directly"
//         }
//     ],
//     "example": [
//         "LazyLog(); // This will make log, warn and error available.",
//         "log('hello world 1')",
//         "log(`a = ${a}`)",
//         "log('a = ' + a)",
//         "log('log eg',[1,2,3])",
//         "warn('hello world 1')",
//         "warn(`a = ${a}`)",
//         "warn('a = ' + a)",
//         "warn('warn eg',[1,2,3])",
//         "error('hello world 1')",
//         "error(`a = ${a}`)",
//         "error('a = ' + a)",
//         "error('error eg',[1,2,3])"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "log",
//     "params": [
//         {
//             "name": "arg",
//             "type": "*",
//             "required": true,
//             "default": null,
//             "info": "arg gets injected into console.log"
//         }
//     ],
//     "info": "Lazy version of console.log, no more typing console!",
//     "example": [
//         "log('Once you use me, you will never stop using me')",
//         "let a = 4;",
//         "log('a = ' + a)",
//         "log(`a = ${a}`)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "logDisable",
//     "info": "Disable log() globally. Good for keeping all your log commands without having to comment them out in your projects. You should really you should comment them all out for removal in the packaging process.",
//     "example": [
//         "log('You will see this in console')",
//         "logDisable()",
//         "log('You wont see this in console')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "logEnable",
//     "info": "Enable log() globally. Good for keeping all your log commands without having to comment them out in your projects. You should really you should comment them all out for removal in the packaging process.",
//     "example": [
//         "log('You will see this in console')",
//         "logDisable()",
//         "log('You wont see this in console')",
//         "logEnable()",
//         "log('You will see this in console')"
//     ]
// } JSODOC
// JSODOC = {
//     "class": "Logger",
//     "methods": [
//         {
//             "name": "enable",
//             "info": "Enable logging for the class/fn this is used in, overridden by enable & disable All/Globally"
//         },
//         {
//             "name": "disable",
//             "info": "Disable logging for the class/fn this is used in, overridden by enable & disable All/Globally"
//         },
//         {
//             "name": "enableAll",
//             "info": "Enable logging for instances of Logger, overiding local class/function enable/disable methods"
//         },
//         {
//             "name": "disableAll",
//             "info": "Disable logging for instances of Logger, overiding local class/function enable/disable methods"
//         },
//         {
//             "name": "enableGlobally",
//             "info": "Alias for disableAll"
//         },
//         {
//             "name": "disableGlobally",
//             "info": "Alias for disableAll"
//         }
//     ],
//     "info": "A substitute for console.log, allowing you to keep your comments and enable them on a class by class or function by function basis, or globally on all class's or functions implemented in.",
//     "example": [
//         "this.logger = new Logger()",
//         "this.logger.log('hello world 1')",
//         "this.logger.warn('hello world 2')",
//         "this.logger.error('hello world 3')",
//         "this.logger.enable()",
//         "this.logger.disable()",
//         "this.logger.enableAll()",
//         "this.logger.disableAll()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "logTo",
//     "params": [
//         {
//             "name": "elementOrId",
//             "type": "Element||ElementID",
//             "required": true,
//             "default": null,
//             "info": "The element or element id of the element you wish to append the string within."
//         },
//         {
//             "name": "msg",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The string you wish to append to the html element."
//         },
//         {
//             "name": "append",
//             "type": "Boolean",
//             "required": false,
//             "default": false,
//             "info": "Method of attaching the logging message, append (true) or prepend (false) aka top vs bottom."
//         },
//         {
//             "name": "endOfLine",
//             "type": "String",
//             "required": false,
//             "default": "",
//             "info": "The end of the string that will be appended to the element, set to '< br >' if you want a line break"
//         }
//     ],
//     "info": "Appends a string to an element, with or without a < BR > tag.",
//     "example": [
//         "logTo(elementOrId,msg,true)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "warn",
//     "params": [
//         {
//             "name": "arg",
//             "type": "*",
//             "required": true,
//             "default": null,
//             "info": "arg gets injected into console.warn"
//         }
//     ],
//     "info": "Lazy version of console.warn, no more typing console!",
//     "example": [
//         "warn('Once you use me, you will never stop using me')",
//         "let a = 4;",
//         "warn('a = ' + a)",
//         "warn(`a = ${a}`)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getOS",
//     "returns": {
//         "type": "String (Mac OS, iOS, Windows, Android, Linux"
//     },
//     "info": "Gets what OS is in use",
//     "example": [
//         "let os = getOS()"
//     ]
// } JSODOC
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// JSODOC = {
//     "method": "isAndroid",
//     "info": "Detects if Android or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isAndroid()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isChrome",
//     "info": "Detects if Chrome or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isChrome()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isEdge",
//     "info": "Detects if Edge or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isEdge()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isFireFox",
//     "info": "Detects if FireFox or not.",
//     "example": [
//         "let test = isFireFox()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isIOS",
//     "info": "Detects if iOS or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isIOS()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isMobile",
//     "info": "Detects if mobile or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let mobile = isMobile()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isOpera",
//     "info": "Detects if Opera or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isOpera()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isSafari",
//     "info": "Detects if Safari or not.",
//     "returns": {
//         "type": "Boolean"
//     },
//     "example": [
//         "let test = isSafari()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getElementPosition",
//     "params": [
//         {
//             "name": "el",
//             "type": "Element",
//             "required": true,
//             "default": null,
//             "info": "Element to get the position of."
//         }
//     ],
//     "returns": "Object {left,top}",
//     "info": "Gets an elements position.",
//     "example": [
//         "let pos = getElementPosition(myElement)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getElementPos",
//     "params": [
//         {
//             "name": "el",
//             "type": "Element",
//             "required": true,
//             "default": null,
//             "info": "Element to get the position of."
//         }
//     ],
//     "returns": {
//         "type": "object",
//         "def": [
//             { "name": "left", "type": "Number", "info": "x or left" },
//             { "name": "top", "type": "Number", "info": "y or top" }
//         ]
//     },
//     "info": "Gets an elements position.",
//     "example": [
//         "let pos = getElementPos(myElement)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isDOM",
//     "params": [
//         {
//             "name": "obj",
//             "type": "Element||Object",
//             "required": true,
//             "default": null,
//             "info": "Element / Object to check."
//         }
//     ],
//     "info": "Checks if object is HTMLElement.",
//     "example": [
//         "let result = isDOM(myElement)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isElement",
//     "params": [
//         {
//             "name": "ele",
//             "type": "Element||Object",
//             "required": true,
//             "default": null,
//             "info": "Element / Object to check."
//         }
//     ],
//     "info": "Checks if object is HTMLElement.",
//     "example": [
//         "let result = isElement(myElement)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isElement2",
//     "params": [
//         {
//             "name": "ele",
//             "type": "Element||Object",
//             "required": true,
//             "default": null,
//             "info": "Element / Object to check."
//         }
//     ],
//     "info": "Checks if object is HTMLElement (Method 2).",
//     "example": [
//         "let result = isElement2(myElement)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getElementPos",
//     "params": [
//         {
//             "name": "ele",
//             "type": "Element",
//             "required": true,
//             "default": null,
//             "info": "Element to get the position of."
//         }
//     ],
//     "returns": {
//         "type": "Number",
//         "info": "Returns fall if unable to get offsetTop"
//     },
//     "info": "Gets an elements offset top position.",
//     "example": [
//         "let pos = getElementOffsetTop(myElement)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "hasClass",
//     "params": [
//         {
//             "name": "elementOrId",
//             "type": "Element||ElementID",
//             "required": true,
//             "default": null
//         },
//         {
//             "name": "ele",
//             "type": "Element",
//             "required": true,
//             "default": null,
//             "info": "Element to get the position of."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Gets an elements offset top position.",
//     "example": [
//         "let classAttached = hasClass(myElement,'selected')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "setHTML",
//     "params": [
//         {
//             "name": "elementOrId",
//             "type": "Element||ElementID",
//             "required": true,
//             "default": null,
//             "info": "The element or the element ID."
//         },
//         {
//             "name": "str",
//             "type": "String||Number",
//             "required": true,
//             "default": null,
//             "info": "The content you want to put into the html element."
//         },
//         {
//             "name": "mode",
//             "type": "String (set|append|prepend)",
//             "required": false,
//             "default": "Set",
//             "info": "The method in which to set the HTML of the targeted element, set it clearing all content or to append or prepend you content."
//         }
//     ],
//     "info": "Set a an elements HTML content.",
//     "example": [
//         "setHTML(myElement,'hello world')",
//         "setHTML(myElement,'hello world','append')",
//         "setHTML(myElement,'hello world','prepend')",
//         "",
//         "setHTML('my-element-id-1','hello world')",
//         "setHTML('my-element-id-2','hello world','append')",
//         "setHTML('my-element-id-3','hello world','prepend')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "onReady",
//     "params": [
//         {
//             "name": "fn",
//             "type": "Function",
//             "required": true,
//             "default": null
//         }
//     ],
//     "info": "Checks if the DOM is ready and then executes a function.",
//     "example": [
//         "onReady(function()){",
//         "\t/* DOM is ready, do your thing */",
//         "});",
//         "",
//         "/* or */",
//         "onReady(() =>{",
//         "\t/* DOM is ready, do your thing */",
//         "});"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "wordCountFilter",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "default": null
//         },
//         {
//             "name": "maxWords",
//             "type": "Number",
//             "required": true,
//             "default": null
//         }
//     ],
//     "returns": {
//         "type": "Object",
//         "params": [
//             {"name":"output","type":"String"},
//             {"name":"remaining","type":"Number"}
//         ]
//     },
//     "info": "Takes a string, checks it for number of words and returns the string but cuts it to the max number of words you set.",
//     "example": [
//         "let limitedSentence = wordCountFilter(source,20)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "setOptionSelectedIndex",
//     "params": [
//         {
//             "name": "selectElement",
//             "type": "HTML Select Element",
//             "required": true
//         },
//         {
//             "name": "selectedValue",
//             "type": "String",
//             "required": true
//         }
//     ],
//     "info": "Sets an option of HTML select element by value.",
//     "example": [
//         "let limitedSentence = wordCountFilter(source,20)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "imageToCanvas",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the image to load and place on the canvas"
//         }
//     ],
//     "returns": {
//         "type": "HTMLCanvasElement"
//     },
//     "info": "Loads an image and places it on a canvas of matching dimensions.",
//     "example": [
//         "let canvas1 = await imageToCanvas('./assets/photo.webp')"
//     ]
// } JSODOC
// - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - -
// JSODOC = {
//     "method": "fetchHtml",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load"
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Loads a html file and returns it as a string",
//     "example": [
//         "let data = await fetchHtml('./pages/modal-user-content.html')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "fetchJson",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load"
//         }
//     ],
//     "returns": {
//         "type": "Object"
//     },
//     "info": "Loads a json file and returns it as an object",
//     "example": [
//         "let data = await fetchJson('./data/config.json')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "loadAndAttachImage",
//     "params": [
//         {
//             "name": "imgElement",
//             "type": "String",
//             "required": false,
//             "default": null,
//             "info": "Image element to load the image into."
//         },
//         {
//             "name": "src",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load"
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Loads an image file and auto attaches it to the head section of the document.",
//     "example": [
//         "loadAndAttachImage(imgElement1,'./assets/images/products/001.jpg')",
//         ".then(()=>{ log('loaded and attached'); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC
// - - - - - - - - - - - - - - - - - - - - - - - -
// JSODOC = {
//     "method": "loadCss",
//     "params": [
//         {
//             "name": "href",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the css file to load"
//         },
//         {
//             "name": "onComplete",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On complete callback"
//         }
//     ],
//     "info": "Loads a css file and auto attaches it to the head section of the document.",
//     "example": [
//         "loadCss('./include/css/style-sheet-5.css',onStyleSheet5Loaded)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "loadJson",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load."
//         },
//         {
//             "name": "onComplete",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On complete callback, sends json response back as a parameter."
//         },
//         {
//             "name": "onError",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On error callback function handler"
//         }
//     ],
//     "info": "Loads a JSON file and returns it via the onComplete callback function.",
//     "example": [
//         "loadJson('./data/config.json',onLoadedHandler)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "loadScript",
//     "params": [
//         {
//             "name": "src",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the js file to load"
//         },
//         {
//             "name": "onComplete",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On complete callback"
//         },
//         {
//             "name": "onProgress",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On progress callback, sends back the percentage loaded"
//         }
//     ],
//     "info": "Loads a JavaScript file and auto attaches it to the head section of the document.",
//     "example": [
//         "loadScript('./include/js/script-5.js',onLoadedHandler)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "promiseLoadCss",
//     "params": [
//         {
//             "name": "href",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the css file to load"
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Loads a css file and auto attaches it to the head section of the document.",
//     "example": [
//         "promiseLoadCss('./include/css/style-sheet-5.css')",
//         ".then(()=>{ log('loaded'); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "promiseLoadImage",
//     "params": [
//         {
//             "name": "ele",
//             "type": "String",
//             "required": false,
//             "default": null,
//             "info": "Image element to load the image into."
//         },
//         {
//             "name": "src",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load"
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Loads an image file and auto attaches it to the head section of the document.",
//     "example": [
//         "PromiseLoadImage(imgElement1,'./assets/images/products/001.jpg')",
//         ".then(()=>{ log('loaded and attached'); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC
// - - - - - - - - - - - - - - - - - - - - - - - -
// JSODOC = {
//     "method": "promiseLoadJson",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load"
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Loads a json file and returns it via promise resolve",
//     "example": [
//         "PromiseLoadJson('./data/config.json')",
//         ".then((data)=>{ log(data); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "promiseLoadScript",
//     "params": [
//         {
//             "name": "src",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load"
//         }
//     ],
//     "returns": {
//         "type": "Promise"
//     },
//     "info": "Loads a JavaScript file and attaches it to the document head",
//     "example": [
//         "promiseLoadScript('./includes/js/onDemandFile1.js')",
//         ".then(()=>{ log('loaded and attached'); })",
//         ".catch((e)=>{ log(e); })"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getRandomBoolean",
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Returns a random boolean.",
//     "example": [
//         "let randomBoolean = getRandomBoolean()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getRandomFloat",
//     "params": [
//         {
//             "name": "min",
//             "type": "Number",
//             "required": true,
//             "info": "Min value."
//         },
//         {
//             "name": "max",
//             "type": "Number",
//             "required": true,
//             "info": "Max value."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Returns a number (float) between 2 numbers.",
//     "example": [
//         "let randomFloat = getRandomFloat(1.4,42.232)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getRandomInt",
//     "params": [
//         {
//             "name": "min",
//             "type": "Number",
//             "required": true,
//             "info": "Min value."
//         },
//         {
//             "name": "max",
//             "type": "Number",
//             "required": true,
//             "info": "Max value."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Returns a number (int) between 2 numbers.",
//     "example": [
//         "let randomInt = getRandomInt(0,100)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getRange",
//     "params": [
//         {
//             "name": "value 1",
//             "type": "Number",
//             "required": true,
//             "info": "Value 1."
//         },
//         {
//             "name": "Value 2",
//             "type": "Number",
//             "required": true,
//             "info": "Value 2."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Returns absolute value of the range between 2 numbers.",
//     "example": [
//         "let range = getRange(0,100)"
//     ]
// } JSODOC
/**
 * @function: getWeightedRandom(odds, iterations)
 * @desc: Get a weighted random based on odds and iterations
 * @param odds array: array of odds
 * @param iterations number: number of iterations to run on each number test
 * @link: https://codepen.io/AllForTheCode/pen/RyvWjZ
 */
// JSODOC = {
//     "method": "isEven",
//     "params": [
//         {
//             "name": "n",
//             "type": "Number",
//             "required": true,
//             "info": "Number to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Detects if a number is even or not.",
//     "example": [
//         "let even = isEven(3)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isOdd",
//     "params": [
//         {
//             "name": "n",
//             "type": "Number",
//             "required": true,
//             "info": "Number to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Detects if a number is odd or not.",
//     "example": [
//         "let odd = isOdd(3)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "normaliseRange",
//     "params": [
//         {
//             "name": "min",
//             "type": "Number",
//             "required": true,
//             "info": "Min value."
//         },
//         {
//             "name": "max",
//             "type": "Number",
//             "required": true,
//             "info": "Max value."
//         },
//         {
//             "name": "v",
//             "type": "Number",
//             "required": true,
//             "info": "Value to normalise."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Normalises a value to be between 0 and 1, based on a range between min and max. min being 0 and max being 1.",
//     "example": [
//         "let n1 = normaliseRange(0,100,50)",
//         "/* n1 = 0.5 */",
//         "let n2 = normaliseRange(0,100,200)",
//         "/* n2 = 1 */",
//         "let n3 = normaliseRange(0,100,-200)",
//         "/* n3 = 0 */"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "parseArrayToFloat",
//     "params": [
//         {
//             "name": "arr",
//             "type": "Array",
//             "required": true,
//             "info": "Array to parse."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Parses each entry in the supplied array with Math.float and returns it.",
//     "example": [
//         "let floatParsedArray = parseArrayToFloat(arr)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "parseArrayToInt",
//     "params": [
//         {
//             "name": "arr",
//             "type": "Array",
//             "required": true,
//             "info": "Array to parse."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Parses each entry in the supplied array with Math.int and returns it.",
//     "example": [
//         "let intParsedArray = parseArrayToInt(arr)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "roundTo",
//     "params": [
//         {
//             "name": "v",
//             "type": "Number",
//             "required": true,
//             "info": "Value to round."
//         },
//         {
//             "name": "dec",
//             "type": "Number",
//             "required": true,
//             "info": "Number of decimal places to round to."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Rounds a value to a set number of decimal places.",
//     "example": [
//         "let r = roundTo(3.142,2)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getGUID",
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a GUI string.",
//     "example": [
//         "let guid = getGUID()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getUID",
//     "params": [
//         {
//             "name": "len",
//             "type": "Number",
//             "required": true,
//             "info": "Length of the unique id to generate."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Generates a unique id. NOTE: Max length of 34.",
//     "example": [
//         "let uid = getUID(12)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isAlphaNumeric",
//     "params": [
//         {
//             "name": "v",
//             "type": "String|Number",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is alphanumeric or not.",
//     "example": [
//         "let an = isAlphaNumeric('a43-')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isArray",
//     "params": [
//         {
//             "name": "input",
//             "type": "*",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is an array or not.",
//     "example": [
//         "let check = isArray(4)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isBool",
//     "params": [
//         {
//             "name": "input",
//             "type": "*",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is a boolean or not.",
//     "example": [
//         "let check = isBool(4)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isBoolean",
//     "params": [
//         {
//             "name": "input",
//             "type": "*",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is a boolean or not.",
//     "example": [
//         "let check = isBoolean(4)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isNumber",
//     "params": [
//         {
//             "name": "n",
//             "type": "*",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is number or not.",
//     "example": [
//         "let check = isNumber('a')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isNumeric",
//     "params": [
//         {
//             "name": "n",
//             "type": "*",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is numeric or not.",
//     "example": [
//         "let check = isNumeric('a')"
//     ]
// } JSODOC
// JSODOC = {
//     "class": "MouseScrollHandler",
//     "info": "Nukes the moon.",
//     "link": "https://aftc.io",
//     "params": [
//         {
//             "name": "onScrollUp",
//             "type": "Function",
//             "required": true,
//             "default": null,
//             "info": "The function to call when mouse wheel scroll up is detected"
//         },
//         {
//             "name": "onScrollDown",
//             "type": "Function",
//             "required": true,
//             "default": null,
//             "info": "The function to call when mouse wheel scroll down is detected"
//         }
//     ],
//     "example": [
//         "new MouseScrollHandler(onScrollUpHandler,onScrollDownHandler);"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "cutStringTo",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "String to cut."
//         },
//         {
//             "name": "len",
//             "type": "Number",
//             "required": true,
//             "info": "Number of characters to return / Length of string to return."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a string at the desired length.",
//     "example": [
//         "let cutString = cutStringTo('abcd',2)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "escapeHTML",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "String to escape html tags."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a string that has the standard html tags escaped.",
//     "example": [
//         "let newString = escapeHTML('<b>some html</b>')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getAnchor",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "info": "String to get anchor from."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns the anchor from a url string.",
//     "example": [
//         "let anchor = getAnchor(url)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getCleanJSONString",
//     "params": [
//         {
//             "name": "s",
//             "type": "String",
//             "required": true,
//             "info": "JSON String to parse."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Attempts to clean up special characters in a JSON string and make it JSON valid.",
//     "example": [
//         "let newString = getCleanJSONString(oldString)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getFileExtension",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to get the file extension from."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Attempts to get the file extension from a supplied string.",
//     "example": [
//         "let ext = getFileExtension(path)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getLastPartOfUrl",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "info": "The url string to get the last part from."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns the last segment of a url split by slashes.",
//     "example": [
//         "let lastSegment = getLastPartOfUrl(url)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getRandomString",
//     "params": [
//         {
//             "name": "len",
//             "type": "Number",
//             "required": true,
//             "info": "The length of the random string to generate."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a random string of letters A-Z a-z of a specified length.",
//     "example": [
//         "let randomLetterString = getRandomString(256)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getStringBetween",
//     "params": [
//         {
//             "name": "source",
//             "type": "String",
//             "required": true,
//             "info": "The length to parse."
//         },
//         {
//             "name": "start",
//             "type": "String",
//             "required": true,
//             "info": "The starting string marker in the source string."
//         },
//         {
//             "name": "end",
//             "type": "String",
//             "required": true,
//             "info": "The ending string marker in the source string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns the string between a start and end string marker matches from the source string.",
//     "example": [
//         "let strBetween = getStringBetween(sourceString,'start-marker','end-marker')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getStringBetween2",
//     "params": [
//         {
//             "name": "source",
//             "type": "String",
//             "required": true,
//             "info": "The length to parse."
//         },
//         {
//             "name": "start",
//             "type": "String",
//             "required": true,
//             "info": "The starting string marker in the source string."
//         },
//         {
//             "name": "end",
//             "type": "String",
//             "required": true,
//             "info": "The ending string marker in the source string."
//         }
//     ],
//     "returns": {
//         "type": "Array",
//         "info": "Max 500 results"
//     },
//     "info": "Returns an array of all the strings found between a start and end markers. Max of 500 items in array returned.",
//     "example": [
//         "let found = getStringsBetween2(sourceString,'start-marker','end-marker')"
//     ]
// } JSODOC
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * @function: getStringsBetween(str,start,end)
 * @desc: Gets all strings between two other strings (multi match)
 * @param string str: input string to check
 * @param string start: start string marker
 * @param string end: end string marker
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */
// JSODOC = {
//     "method": "getWordCount",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to count word from."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Returns the number of words in a string based on spaces.",
//     "example": [
//         "let wordCount = getWordCount(sourceString)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "inString",
//     "params": [
//         {
//             "name": "needle",
//             "type": "String",
//             "required": true,
//             "info": "The string to find."
//         },
//         {
//             "name": "haystack",
//             "type": "String",
//             "required": true,
//             "info": "The string to search."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Looks for a string in a string.",
//     "example": [
//         "let stringFound = inString(needle,haystack)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isInString",
//     "params": [
//         {
//             "name": "needle",
//             "type": "String",
//             "required": true,
//             "info": "The string to find."
//         },
//         {
//             "name": "haystack",
//             "type": "String",
//             "required": true,
//             "info": "The string to search."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Looks for a string in a string.",
//     "example": [
//         "let stringFound = isInString(needle,haystack)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "lTrimBy",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to find."
//         },
//         {
//             "name": "by",
//             "type": "Number",
//             "required": true,
//             "info": "The number of characters to trim from the left (start) of a string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Trims a string from the left (start) by a specified number of characters.",
//     "example": [
//         "let trimmedString = lTrimBy(str,4)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "regExReplaceAll",
//     "params": [
//         {
//             "name": "needle",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace."
//         },
//         {
//             "name": "rep",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace the needle (found) string with."
//         },
//         {
//             "name": "haystack",
//             "type": "String",
//             "required": true,
//             "info": "The string to parse."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Uses regex to replace all instances of a string in a string with what you specify.",
//     "example": [
//         "let newString = regExReplaceAll(needle, rep, haystack)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "removeFileFromPath",
//     "params": [
//         {
//             "name": "path",
//             "type": "String",
//             "required": true,
//             "info": "The file path to process."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Removes the file from a file path.",
//     "example": [
//         "let path = removeFileFromPath(fullPath)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "replaceAll",
//     "params": [
//         {
//             "name": "needle",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace."
//         },
//         {
//             "name": "replace",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace the needle (found) string with."
//         },
//         {
//             "name": "haystack",
//             "type": "String",
//             "required": true,
//             "info": "The string to parse."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Uses a split join method to replace all occurrences of a string. See regExReplaceAll for an alternate method.",
//     "example": [
//         "let newString1 = replaceAll(needle, repWith, haystack)",
//         "let newString2 = regExReplaceAll(needle, repWith, haystack)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "replaceDoubleBackSlash",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to process."
//         },
//         {
//             "name": "rep",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace double back slashes with."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Replaces double back slashes in a string via regex with your specified string.",
//     "example": [
//         "let processedString = replaceDoubleBackSlash(str,replaceWith)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "replaceDoubleForwardSlash",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to process."
//         },
//         {
//             "name": "rep",
//             "type": "String",
//             "required": true,
//             "info": "The string to replace double forward slashes with."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Replaces double forward slashes in a string via regex with your specified string.",
//     "example": [
//         "let processedString = replaceDoubleForwardSlash(str,replaceWith)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "rTrimBy",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to find."
//         },
//         {
//             "name": "trimBy",
//             "type": "Number",
//             "required": true,
//             "info": "The number of characters to trim from the right (end) of a string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Trims a string from the right (end) by a specified number of characters.",
//     "example": [
//         "let trimmedString = rTrimBy(str,4)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "trimStringBy",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "info": "The string to find."
//         },
//         {
//             "name": "trimBy",
//             "type": "Number",
//             "required": true,
//             "info": "The number of characters to trim from the right (end) of a string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Trims a string from the right (end) by a specified number of characters.",
//     "example": [
//         "let trimmedString = trimStringBy(str,4)"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "ucFirst",
//     "params": [
//         {
//             "name": "s",
//             "type": "String",
//             "required": true,
//             "info": "The string to make the first letter upper case."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Makes the first letter of a string uppercase.",
//     "example": [
//         "let ucFirstString = ucFirst('hello')"
//     ]
// } JSODOC
// JSODOC = {
//     "class": "SwipeHandler",
//     "params": [
//         {
//             "type": "object",
//             "def": [
//                 { "name": "onSwipeLeft", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe left is detected." },
//                 { "name": "onSwipeRight", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe right is detected." },
//                 { "name": "onSwipeUp", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe up is detected." },
//                 { "name": "onSwipeDown", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe down is detected." },
//                 { "name": "horizontalTolerance", "type": "Number", "required": false, "default": 50, "info": "The distance your finger has to travel on the horizontal axis for a swipe left or right to be detected." },
//                 { "name": "onSwipeUp", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe left is detected." },
//                 { "name": "onSwipeDown", "type": "Function", "required": false, "default": false, "info": "The function you want to call when a swipe right is detected." },
//                 { "name": "verticalTolerance", "type": "Number", "required": false, "default": 50, "info": "The distance your finger has to travel on the vertical axis for a swipe up or down to be detected." },
//                 { "name": "swipeThrottleTimeout", "type": "Number", "required": false, "default": 250, "info": "The amount of milliseconds before another swipe event can be fired." }
//             ]
//         }
//     ],
//     "info": "Swipe handler, currently detects left & right swipes.",
//     "example": [
//         "new SwipeHandler({config})"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "getRoute",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": false,
//             "info": "String to parse into a route, if left out it will get the current url/uri."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a route string.",
//     "example": [
//         "let usersRoute = getRoute('https://domain.com/users')",
//         "let currentRoute = getRoute()"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "isEmail",
//     "params": [
//         {
//             "name": "email",
//             "type": "String",
//             "required": true,
//             "info": "The email string to validate."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Validates an email address via regex.",
//     "example": [
//         "let isValidEmail = isEmail('darcey.lloyd@gmail.com')"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "promiseAttachVideo",
//     "params": [
//         {
//             "name": "video",
//             "type": "Video",
//             "required": true,
//             "info": "The video to attach to."
//         },
//         {
//             "name": "src",
//             "type": "String",
//             "required": true,
//             "info": "The src of the video file to attach to the video element or video javascript instance."
//         }
//     ],
//     "returns": {
//         "type": "Promise with object with props {width,height,duration}"
//     },
//     "info": "Attaches a video file to a video and once it's meta data is available it will resolve the promise. Useful for getting width, height and duration.",
//     "example": [
//         "promiseAttachVideo(vid,vidSrc)",
//         "then((res)=>{ console.log('video attached and ready') })"
//     ]
// } JSODOC
// JSODOC = {
//     "method": "promiseVideoEnd",
//     "params": [
//         {
//             "name": "video",
//             "type": "Video",
//             "required": true,
//             "info": "The video to attach to."
//         }
//     ],
//     "returns": {
//         "type": "Promise resolve on video end"
//     },
//     "info": "Returns a promise resolve on video end.",
//     "example": [
//         "promiseVideoEnd(vid)",
//         "then((res)=>{ console.log('video playback complete') })"
//     ]
// } JSODOC
