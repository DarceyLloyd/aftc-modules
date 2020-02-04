export function GetUKDate(dte){
    let output = dte.getDay() + "-" + (dte.getMonth()+1) + "-" + dte.getFullYear();
    return output;
}