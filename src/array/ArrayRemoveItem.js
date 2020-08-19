export function arrayRemoveItem(arr, value) {
    return arr.filter(function(item){
        return item != value;
    });
}