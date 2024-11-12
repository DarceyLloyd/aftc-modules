// JSODOC = {
//     "method": "getGUID",
//     "returns": {
//         "type": "String"
//     },
//     "info": "Returns a GUI string.",
//     "example": [
//         "let guid = getGUID()"
//     ]
// } JSODOC

export function getGUID() {
    function randomHex() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .padStart(4, '0');
    }
  
    return `${randomHex()}${randomHex()}-${randomHex()}-${randomHex()}-${randomHex()}-${randomHex()}${randomHex()}${randomHex()}`;
  }
  