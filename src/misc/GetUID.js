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

export function getUID(len) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < len; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}