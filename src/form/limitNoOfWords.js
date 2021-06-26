// JSODOC = {
//     "method": "wordCountFilter",
//     "params": [
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "default": null
//         },
//         {
//             "name": "maxWords",
//             "type": "Number",
//             "required": true,
//             "default": null
//         }
//     ],
//     "returns": {
//         "type": "Object",
//         "params": [
//             {"name":"output","type":"String"},
//             {"name":"remaining","type":"Number"}
//         ]
//     },
//     "info": "Takes a string, checks it for number of words and returns the string but cuts it to the max number of words you set.",
//     "example": [
//         "let limitedSentence = wordCountFilter(source,20)"
//     ]
// } JSODOC

export function limitNoOfWords(str, maxWords) {
    let wordCount = str.split(/\S+/).length - 1;
    let re = new RegExp("^\\s*\\S+(?:\\s+\\S+){0," + (maxWords - 1) + "}");
    let output = "";
    if (wordCount >= maxWords) {
        output = str.match(re);
    } else {
        output = str;
    }
    return { output: output, remaining: (maxWords - wordCount) };
}
