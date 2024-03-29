// JSODOC = {
//     "method": "getUKDate",
//     "params": [
//         {
//             "name": "dte",
//             "type": "Date || String",
//             "required": true,
//             "default": null,
//             "info": "The date you wish to get the UK format date string from."
//         },
//         {
//             "name": "separator",
//             "type": "String",
//             "required": false,
//             "default": "-",
//             "info": "What the date string segments will be separated by."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Gets a UK formatted date string from a supplied date.",
//     "example": [
//         "let ukDate = getUKDate(new Date(),'-')"
//     ]
// } JSODOC

export function getUKDate(dte,separator="-"){
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