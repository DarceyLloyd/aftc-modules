// JSODOC = {
//     "method": "inertiaTo",
//     "params": [
//         {
//             "name": "current",
//             "type": "Number",
//             "required": true,
//             "info": "Current value."
//         },
//         {
//             "name": "target",
//             "type": "Number",
//             "required": true,
//             "info": "Value to reach."
//         },
//         {
//             "name": "amount",
//             "type": "Number",
//             "required": true,
//             "info": "Inertia speed (dec/inc speed)."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Calculates the target value of inertia in a loop/requestAnimationFrame from 1 value to another at speed.",
//     "example": [
//         "let newX = inertiaTo(curX,targetX,0.5)"
//     ]
// } JSODOC

// this is basically "lerping" or "linear interpolation"
export function inertiaTo(current,target,amount){
    if (amount == 1) {
        return target;
    }
    let distToGo = target - current;
    let delta = current + (distToGo * amount);

    if (Math.abs(distToGo) < 0.01) {
        distToGo = 0;
        delta = target;
    }
    return delta;
}
