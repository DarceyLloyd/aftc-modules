// JSODOC = {
//     "method": "getUKDateTime",
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

export function getUKDateTime(dte,separator="-"){
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