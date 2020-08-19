export function removeFileFromPath(path) {
    //let pa = '/this/is/a/folder/aFile.txt';
    let r = /[^\/]*$/;
    path = path.replace(r, '');
    return path;
}