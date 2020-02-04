export function GetElementOffsetTop(elementId) {
    let element = getElementById(elementId);
    let curtop = 0;
    if (element.hasOwnProperty("offsetParent")){
        do {
            curtop += element.offsetTop;
        } while (element = element.offsetParent);
        return parseFloat([curtop]);
    } else {
        return false;
    }
}