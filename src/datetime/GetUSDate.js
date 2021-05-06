// JSODOC = {
//     "method": "getUSDate",
//     "params": [
//         {
//             "name": "dte",
//             "type": "Date",
//             "required": true,
//             "default": null,
//             "info": "The date you wish to get the US format date string from."
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
//     "info": "Gets a US formatted date string from a supplied date.",
//     "example": [
//         "let usDate = getUKDate(new Date(),'-')"
//     ]
// } JSODOC

export function getUSDate(dte,separator="-"){
    let output = dte.getFullYear() + separator + (dte.getMonth()+1) + separator + (dte.getDay()+1)
    return output;
}