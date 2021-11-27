// JSODOC = {
//     "method": "getUKDateFromDbDateTime",
//     "params": [
//         {
//             "name": "dbDateString",
//             "type": "Date || String",
//             "required": true,
//             "default": null,
//             "info": "This should be a datetime string from a db query."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets a UK formatted date string from a supplied db date string.",
//     "example": [
//         "let ukDate = getUkDateFromDbDateTime(dbDateString)"
//     ]
// } JSODOC

export function getUKDateFromDbDateTime(dbDateString) {
    // "2016-04-08 21:11:59" to UK date
    let output = "";
    if (typeof (dte) === "string") {
        // console.warn(dte);
        let dateTimeSplit = dte.split(' ');
        let dateSplit = dateTimeSplit[0].split(separator);
        // log(dateSplit);
        output = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0];
    } else {
        output = dte.getDay() + separator + (dte.getMonth() + 1) + separator + dte.getFullYear();
    }
    return output;
}