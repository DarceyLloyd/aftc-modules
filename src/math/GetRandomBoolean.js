// JSODOC = {
//     "method": "getRandomBoolean",
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Returns a random boolean.",
//     "example": [
//         "let randomBoolean = getRandomBoolean()"
//     ]
// } JSODOC

export function getRandomBoolean(){
    return Math.random() >= 0.5;
}