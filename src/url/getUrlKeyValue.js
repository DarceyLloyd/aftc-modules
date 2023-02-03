// JSODOC = {
//     "method": "getUrlKeyValue",
//     "params": [
//         {
//             "name": "key",
//             "type": "String",
//             "required": true,
//             "info": "URL key value to obtain"
//         }
//     ],
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns the value of a url key value pair.",
//     "example": [
//         "let page = getUrlKeyValue('page')",
//         "if (debug) {",
//         "   // do something",
//         "}"
//     ]
// } JSODOC

export const getUrlKeyValue = (key) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const hasKey = urlParams.has(key);
  
    if (hasKey){
      return urlParams.get(key);
    } else {
      // console.warn(`doesUrlKeyExist(): Key: ${key} is not found...`);
      return undefined;
    }
  }