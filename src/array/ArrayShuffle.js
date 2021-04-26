// JSODOC = {
//     "method": "arrayShuffle",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to shuffle."
//         }
//     ],
//     "returns": "Array",
//     "info": "Shuffles / Randomizes an array.",
//     "example": [
//         "let shuffledArray = arrayShuffle(myArray)"
//     ]
// } JSODOC

export function arrayShuffle(arr) {
    let currentIndex = arr.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    return arr;
}
