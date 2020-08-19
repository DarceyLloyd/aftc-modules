export function getRandomThatsNot(min,max,not){
    let r = not; let lim = 100; let runs = 0;
    while (r===not && runs < lim){
        runs++;
        r = getRandomInt(min,max);
    }
    if (runs>=lim){
        return false;
    } else {
        return r;
    }
}
/**
 * @function: getRandomThatsNot(min,max,not)
 * @desc: returns a random int betwen your specified min and max values but never the not value
 * @param min number: the minimum your random number is allowed to go
 * @param max number: the maximum your random number is allowed to go
 * @alias: getRandom
 * @link: https://codepen.io/AllForTheCode/pen/yEBZNq
 */