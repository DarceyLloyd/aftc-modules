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
export function getRandomString(len) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
