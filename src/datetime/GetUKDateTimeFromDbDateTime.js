// JSODOC = {
//     "method": "getUkDateTimeFromDbDateTime",
//     "params": [
//         {
//             "name": "dbDateTimeString",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "This should be a datetime string from a db query."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets a UK formatted date and time string from a supplied db date time string.",
//     "example": [
//         "let ukDate = getUkDateTimeFromDbDateTime(dbDateTimeString)"
//     ]
// } JSODOC

export function getUKDateTimeFromDbDateTime  (dbDateTimeString) {
    // "2016-04-08 21:11:59" to UK date time
    let DateTime = input.split(" ");
    let DateParts = DateTime[0].split("-");
    let TimeParts = DateTime[1].split(":");
    let UKDate = DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0];
    let Time = TimeParts[0] + ":" + TimeParts[1];
    return (UKDate + " " + Time);
}