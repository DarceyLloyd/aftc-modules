// JSODOC = {
//     "method": "getStringBetween",
//     "params": [
//         {
//             "name": "source",
//             "type": "String",
//             "required": true,
//             "info": "The length to parse."
//         },
//         {
//             "name": "start",
//             "type": "String",
//             "required": true,
//             "info": "The starting string marker in the source string."
//         },
//         {
//             "name": "end",
//             "type": "String",
//             "required": true,
//             "info": "The ending string marker in the source string."
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns the string between a start and end string marker matches from the source string.",
//     "example": [
//         "let strBetween = getStringBetween(sourceString,'start-marker','end-marker')"
//     ]
// } JSODOC
export function getStringBetween(source, start, end) {
    return source.split(start).pop().split(end).shift().trim();
}