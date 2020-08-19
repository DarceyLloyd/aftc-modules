export function getRandomFloat(min, max) {
    // let r = from + (Math.random()* (to*2));
    return (Math.random() * (max - min) + min);
};
