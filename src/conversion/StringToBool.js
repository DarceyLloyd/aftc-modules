// JSODOC = {
//     "method": "stringToBool",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The value you want to convert."
//         }
//     ],
//     "returns": "Boolean",
//     "info": "Converts a String to Boolean.",
//     "example": [
//         "let answer1 = stringToBool('yes');",
//         "let answer2 = stringToBool('y');",
//         "let answer3 = stringToBool('1');",
//         "let answer4 = stringToBool('no');",
//         "let answer5 = stringToBool('n');",
//         "let answer6 = stringToBool('0');"
//     ]
// } JSODOC

export function stringToBool (str) {

    if (!str || str === undefined || typeof (str) != "string") {
        console.log("StringToBool(str): Error - input string is not valid!");
        return false;
    }

    switch (str.toLowerCase()) {
        case "y":
            return true;
            break;
        case "yes":
            return true;
            break;
        case "1":
            return true;
            break;
        case "true":
            return true;
            break;
        default:
            return false;
            break;
    }
}

