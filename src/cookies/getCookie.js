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

export function getCookie(name) {
	//return .cookie(name);
	var keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|)');
	return keyValue ? keyValue[2] : null;
}