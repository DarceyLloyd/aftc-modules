// JSODOC = {
//     "method": "log",
//     "params": [
//         {
//             "name": "arg",
//             "type": "*",
//             "required": true,
//             "default": null,
//             "info": "arg gets injected into console.log"
//         }
//     ],
//     "info": "Lazy version of console.log, no more typing console!",
//     "example": [
//         "log('Once you use me, you will never stop using me')",
//         "let a = 4;",
//         "log('a = ' + a)",
//         "log(`a = ${a}`)"
//     ]
// } JSODOC

export function log(arg) {
    console.log(arg);
}
