export function regExReplaceAll(haystack, needle, rep) {
    const special = ["-", "[", "]", "/", "{", "}", "(", ")", "*", "+", "?", ".", "\\", "^", "$", "|"];
    if (needle.length == 1) {
        if (isInArray(needle, special)) {
            needle = "\\" + needle;
        }
    }
    const searchRegExp = new RegExp(needle, 'g');
    return haystack.replace(searchRegExp, rep);

}