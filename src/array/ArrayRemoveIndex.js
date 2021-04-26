// JSODOC = {
//     "method": "arrayRemoveIndex",
//     "params": [
//         {
//             "name": "arr",
//             "type": "array",
//             "required": true,
//             "default": null,
//             "info": "The array you want to remove the index from."
//         },
//         {
//             "name": "index",
//             "type": "number",
//             "required": true,
//             "default": null,
//             "info": "The index which you want to remove."
//         }
//     ],
//     "returns": "Array",
//     "info": "Removes an index from the supplied array.",
//     "example": [
//         "let max = arrayRemoveIndex(arr,index)"
//     ]
// } JSODOC

export function arrayRemoveIndex(arr,index){
    arr.splice(index,1);
}
