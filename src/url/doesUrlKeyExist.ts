// JSODOC = {
//     "method": "doesUrlKeyExist",
//     "params": [
//         {
//             "name": "key",
//             "type": "String",
//             "required": true,
//             "info": "URL Parameter key to look for"
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Returns a string.",
//     "example": [
//         "let debug = doesUrlKeyExist('debug')",
//         "if (debug) {",
//         "   // do something",
//         "}"
//     ]
// } JSODOC

export const doesUrlKeyExist = (key: string): boolean => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.has(key);

}