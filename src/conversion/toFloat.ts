// JSODOC = {
//     "method": "toFloat",
//     "params": [
//         {
//             "value": "any",
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Converts what it's given to a float or null.",
//     "example": [
//         "let answer1 = toFloat('123.45');",
//         "let answer2 = toFloat(true);",
//         "let answer3 = toFloat(false);",
//         "let answer4 = toFloat('abc');",
//         "let answer5 = toFloat(null);"
//     ]
// }
export function toFloat(value: any): number | null {
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        return isNaN(parsed) ? null : parsed;
    }

    if (typeof value === "boolean") {
        return value ? 1.0 : 0.0;
    }

    return null;
}
