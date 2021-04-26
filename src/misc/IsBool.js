// JSODOC = {
//     "method": "isBool",
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
//         "let check = isBool(4)"
//     ]
// } JSODOC

export function isBool(input) {
    if (typeof (input) === "boolean") {
        return true;
    } else {
        return false;
    }
}