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
    if (len > 34){
        console.error("getUID(length): Limit error: Length must be 34 or lower");
    } else {
        return Math.random().toString(36).substr(2, len);
    }
}