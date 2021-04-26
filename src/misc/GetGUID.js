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
    function Amiga() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return Amiga() + Amiga() + '-' + Amiga() + '-' + Amiga() + '-' +
        Amiga() + '-' + Amiga() + Amiga() + Amiga();
}