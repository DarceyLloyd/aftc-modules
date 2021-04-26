// JSODOC = {
//     "method": "normaliseRange",
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
//         },
//         {
//             "name": "v",
//             "type": "Number",
//             "required": true,
//             "info": "Value to normalise."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Normalises a value to be between 0 and 1, based on a range between min and max. min being 0 and max being 1.",
//     "example": [
//         "let n1 = normaliseRange(0,100,50)",
//         "/* n1 = 0.5 */",
//         "let n2 = normaliseRange(0,100,200)",
//         "/* n2 = 1 */",
//         "let n3 = normaliseRange(0,100,-200)",
//         "/* n3 = 0 */"
//     ]
// } JSODOC

export function normaliseRange(min, max, v) {
    let range = max - min;
    let step = 1 / range;
    let r = (step * (v - min));
    if (v < min) {
        r = 0;
    } else if (v > max) {
        r = 1;
    }
    return r;
}
