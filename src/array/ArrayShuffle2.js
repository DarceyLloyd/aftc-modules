// JSODOC = {
//     "method": "arrayShuffle2",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to shuffle."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Shuffles / Randomizes an array (method 2).",
//     "example": [
//         "let shuffledArray = arrayShuffle2(myArray)"
//     ]
// } JSODOC

export function arrayShuffle2(a) {
    let x, t, r = new Uint32Array(1);
    for (let i = 0, c = a.length - 1, m = a.length; i < c; i++ , m--) {
        crypto.getRandomValues(r);
        x = Math.floor(r / 65536 / 65536 * m) + i;
        t = a[i], a[i] = a[x], a[x] = t;
    }

    return a;
}