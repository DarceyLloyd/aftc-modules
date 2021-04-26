// JSODOC = {
//     "method": "getRandomFloat",
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
//     "info": "Returns a number (float) between 2 numbers.",
//     "example": [
//         "let randomFloat = getRandomFloat(1.4,42.232)"
//     ]
// } JSODOC

export function getRandomFloat(min, max) {
    // let r = from + (Math.random()* (to*2));
    return (Math.random() * (max - min) + min);
};
