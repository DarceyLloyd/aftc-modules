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

export function getRoute(url) {
    if (!url || url == null || url == undefined) {
        url = window.location.href;
    }

    return url.replace(/.*\/\/[^\/]*/, '')
}