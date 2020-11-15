export function replaceDoubleBackSlash(str,rep){
    return str.replace(/\\\\/g, rep); // replaces all occurances of \\ with rep
}