



/**
 * @function: getWeightedRandom(odds, iterations)
 * @desc: Get a weighted random based on odds and iterations
 * @param odds array: array of odds
 * @param iterations number: number of iterations to run on each number test
 * @link: https://codepen.io/AllForTheCode/pen/RyvWjZ
 */
export function GetWeightedRandom(odds, iterations) {
    if (!odds) {
        odds = [
            0.68, // 0
            0.69, // 1
            0.698, // 2
            0.6909, // 3
            0.68, // 4
            0.58, // 5
            0.57, // 6
            0.56, // 7
            0.4, // 8
            0.3, // 9
        ];
    }
    let weights = [];
    let r = 0;
    let iMax = 0;
    let wMax = 0;

    for (let i in odds) {
        if (!weights[i]) {
            weights[i] = 0;
        }

        for (let x = 0; x < iterations; x++) {
            r = Math.random();
            //log(r.toFixed(3) + "   " + odds[i].toFixed(3));
            if (r <= odds[i]) {
                weights[i] += odds[i];
            }
        }

        if (weights[i] > wMax) {
            wMax = weights[i];
            iMax = i;
        }
    }

    //log(weights);
    //log("wMax = " + wMax + "   iMax = " + iMax);
    return iMax;
};