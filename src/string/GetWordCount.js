export function getWordCount(str) {
    return str.split(/\S+/).length - 1;
}