export function boolToYesNo (b) {

    if (!b || b === undefined || typeof (b) != "boolean") {
        console.log("getYesNoFromBool(str): Error - input is not a boolean!");
        return "error";
    }

    if (b) {
        return "yes";
    } else {
        return "no";
    }
}