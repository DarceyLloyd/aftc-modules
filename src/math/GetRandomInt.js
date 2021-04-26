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

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}