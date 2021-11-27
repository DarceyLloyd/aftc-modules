// JSODOC = {
//     "method": "getUkDateTimeFromDbDateTime",
//     "params": [
//         {
//             "name": "dte",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "This should be a datetime string from a db query."
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
//     "info": "Gets a UK formatted date and time string from a supplied db date time string.",
//     "example": [
//         "let ukDate = getUkDateTimeFromDbDateTime(dte)"
//     ]
// } JSODOC

export function getUKDateTimeFromDbDateTime(dte,separator="-") {
    // "2016-04-08 21:11:59" to UK date time
    let output = "";

    let formatTimeValue = (v)=>{
        if (v<10){
            return "0" + v;
        } else {
            return v;
        }
    }

    if (typeof (dte) === "string") {
        let dateTimeSplit = dte.split(' ');
        let dateSplit = dateTimeSplit[0].split(separator);

        if (dateTimeSplit.length > 1) {
            let TimeParts = dateTimeSplit[1].split(":");
            let Time = TimeParts[0] + ":" + TimeParts[1];
            output = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0] + " " + TimeParts[0] + ":" + TimeParts[1] + ":" + TimeParts[2];
        } else {
            output = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0];
        }
        // log(dateSplit);
    } else {
        output = dte.getDay() + separator + (dte.getMonth() + 1) + separator + dte.getFullYear();
        output = output + " " + formatTimeValue(dte.getHours()) + ":" + formatTimeValue(dte.getMinutes()) + ":" + formatTimeValue(dte.getSeconds())
    }
    return output;
}