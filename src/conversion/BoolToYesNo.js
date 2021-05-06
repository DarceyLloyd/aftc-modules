// JSODOC = {
//     "method": "boolToYesNo",
//     "params": [
//         {
//             "name": "bool",
//             "type": "Boolean",
//             "required": true,
//             "default": null,
//             "info": "The variable you wish to convert."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Converts a boolean to a string of yes || no.",
//     "example": [
//         "let answer = boolToYesNo(boolAnswer)"
//     ]
// } JSODOC

export function boolToYesNo(b) {

    if (!b || b === undefined || typeof (b) != "boolean") {
        console.log("getYesNoFromBool(bool): Error - input is not a boolean!");
        return "error";
    }

    if (b) {
        return "yes";
    } else {
        return "no";
    }
}