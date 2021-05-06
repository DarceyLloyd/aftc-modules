// JSODOC = {
//     "method": "boolToString",
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
//     "info": "Converts a boolean to a string of true || false.",
//     "example": [
//         "let strBool = boolToString(isMobile)"
//     ]
// } JSODOC

export function boolToInt (bool) {

    if (!bool || bool === undefined || typeof (bool) != "boolean") {
        console.log("AFTC.js: getBoolToInt(bool): Error - input is not a boolean!");
        return "error";
    }

    if (bool) {
        return "true";
    } else {
        return "false";
    }
}