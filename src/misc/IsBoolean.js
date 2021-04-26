// JSODOC = {
//     "method": "isBoolean",
//     "params": [
//         {
//             "name": "input",
//             "type": "*",
//             "required": true,
//             "info": "Param to check."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Checks if the input is a boolean or not.",
//     "example": [
//         "let check = isBoolean(4)"
//     ]
// } JSODOC

export function isBoolean(input) {
    if (typeof (input) === "boolean") {
        return true;
    } else {
        return false;
    }
}