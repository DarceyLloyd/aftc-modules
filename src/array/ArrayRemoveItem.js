export function ArrayRemoveItem(arr, value) {
    return arr.filter(function(item){
        return item != value;
    });
}