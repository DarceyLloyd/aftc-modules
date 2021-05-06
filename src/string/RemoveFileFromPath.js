// JSODOC = {
//     "method": "removeFileFromPath",
//     "params": [
//         {
//             "name": "path",
//             "type": "String",
//             "required": true,
//             "info": "The file path to process."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Removes the file from a file path.",
//     "example": [
//         "let path = removeFileFromPath(fullPath)"
//     ]
// } JSODOC
export function removeFileFromPath(path) {
    //let pa = '/this/is/a/folder/aFile.txt';
    let r = /[^\/]*$/;
    path = path.replace(r, '');
    return path;
}