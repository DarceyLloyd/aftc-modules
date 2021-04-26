// JSODOC = {
//     "method": "getUkDateFromDbDateTime",
//     "params": [
//         {
//             "name": "dbDateString",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "This should be a datetime string from a db query."
//         }
//     ],
//     "returns": "String",
//     "info": "Gets a UK formatted date string from a supplied db date string.",
//     "example": [
//         "let ukDate = getUkDateFromDbDateTime(dbDateString)"
//     ]
// } JSODOC

export function getUkDateFromDbDateTime(dbDateString) {
    // "2016-04-08 21:11:59" to UK date
    if (input === "" || input === null) {
        return "no input";
    }
    let DateTime = input.split(" ");
    let DateParts = DateTime[0].split("-");
    let UKDate = DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0];
    return UKDate;
}