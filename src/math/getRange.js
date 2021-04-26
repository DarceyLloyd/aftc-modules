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

export function getRange(a,b){
    return Math.max(a, b) - Math.min(a, b);
}