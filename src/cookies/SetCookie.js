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

export function setCookie(name, value, mins) {
	// https://javascript.info/cookie
	// var d = new Date();
	// d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	// var expires = "expires=" + d.toUTCString();

	let d = new Date();
	d.setTime(d.getTime()+(mins*60*1000));
	let expires = "; expires="+d.toGMTString();

	document.cookie = name + "=" + value + ";" + expires + ";samesite=strict;secure:true;path=/";
}