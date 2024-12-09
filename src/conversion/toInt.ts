// JSODOC = {
//     "method": "toInt",
//     "params": [
//         {
//             "value": "any",
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Converts what its given to a number or null.",
//     "example": [
//         "let answer1 = toInt('123');",
//         "let answer2 = toInt(true);",
//         "let answer3 = toInt(false);",
//         "let answer4 = toInt('abc');",
//         "let answer5 = toInt(null);"
//     ]
// }
export function toInt(value: any): number | null {
    if (typeof value === "number") {
        return isFinite(value) ? Math.trunc(value) : null;
    }

    if (typeof value === "string") {
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? null : parsed;
    }

    if (typeof value === "boolean") {
        return value ? 1 : 0;
    }

    return null;
}
