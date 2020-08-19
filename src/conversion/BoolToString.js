export function boolToString (bool) {

    if (!bool || bool === undefined || typeof (bool) != "boolean") {
        console.log("AFTC.js: getBoolToString(str): Error - input is not a boolean!");
        return "error";
    }

    if (bool) {
        return "true";
    } else {
        return "false";
    }
}