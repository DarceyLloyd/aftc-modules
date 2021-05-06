// JSODOC = {
//     "method": "arrayRemoveValue",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to remove the value from."
//         },
//         {
//             "name": "value",
//             "type": "string || number",
//             "required": true,
//             "default": null,
//             "info": "The value which you want to remove from the array."
//         }
//     ],
//     "returns": {
//         "type": "Array"
//     },
//     "info": "Removes a value from the supplied array.",
//     "example": [
//         "let max = arrayRemoveValue(arr, value)"
//     ]
// } JSODOC

export function arrayRemoveValue(arr, value) {
    return arr.filter(function(item){
        return item != value;
    });
}