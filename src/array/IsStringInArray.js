export function isStringInArray(needle, haystack) {
    return (new RegExp('(' + haystack.join('|').replace(/\./g, '\\.') + ')$')).test(needle);
}
