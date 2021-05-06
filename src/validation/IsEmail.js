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
export function isEmail (email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
