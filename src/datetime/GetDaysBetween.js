// JSODOC = {
//     "method": "getDaysBetween",
//     "params": [
//         {
//             "name": "name",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The name of the cookie you want to retrieve."
//         },
//         {
//             "name": "name",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "The name of the cookie you want to retrieve."
//         }
//     ],
//     "returns": {
//         "type": "Number"
//     },
//     "info": "Gets the number of days between 2 dates.",
//     "example": [
//         "/* NOTE: Month is indexed at 0 */\n",
//         "let startDateTime = new Date('2020,3,26')",
//         "let endDateTime = new Date('2020,3,26')",
//         "let days = getDaysBetween('startDateTime, endDateTime')"
//     ]
// } JSODOC

export function getDaysBetween(startDateTime, endDateTime) {
    let msPerDay = 8.64e7;
    // Copy dates so don't mess them up
    let sd = new Date(startDateTime);
    let ed = new Date(endDateTime);
    // Set to noon - avoid DST errors
    sd.setHours(12, 0, 0);
    ed.setHours(12, 0, 0);
    // Round to remove daylight saving errors
    return Math.round((ed - sd) / msPerDay);
}
