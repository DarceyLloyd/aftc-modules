// JSODOC = {
//     "method": "listCookies",
//     "info": "Lists all available cookie.",
//     "example": [
//         "listCookies()"
//     ]
// } JSODOC

export function listCookies() {
	var c = document.cookie.split(';');
	for (var i = 1 ; i <= c.length; i++) {
		console.log(c[i-1])
	}
}