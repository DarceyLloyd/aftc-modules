export function GetDaysBetween (startDateTime, endDateTime) {
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
