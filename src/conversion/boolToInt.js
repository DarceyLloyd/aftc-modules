// JSODOC = {
//     "method": "boolToInt",
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
//         "type": "Number"
//     },
//     "info": "Converts a boolean to a number.",
//     "example": [
//         "let strBool = boolToInt(isMobile)"
//     ]
// } JSODOC

export function boolToInt(bool) {

    if (!bool || bool === undefined || typeof (bool) != "boolean") {
        console.log("AFTC.js: getBoolToString(str): Error - input is not a boolean!");
        return "error";
    }

    if (bool) {
        return 1;
    } else {
        return 0;
    }
}