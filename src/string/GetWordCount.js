export function GetWordCount(str) {
    return str.split(/\S+/).length - 1;
}