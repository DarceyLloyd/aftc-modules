// JSODOC = {
//     "method": "warn",
//     "params": [
//         {
//             "name": "arg",
//             "type": "*",
//             "required": true,
//             "default": null,
//             "info": "arg gets injected into console.warn"
//         }
//     ],
//     "info": "Lazy version of console.warn, no more typing console!",
//     "example": [
//         "warn('Once you use me, you will never stop using me')",
//         "let a = 4;",
//         "warn('a = ' + a)",
//         "warn(`a = ${a}`)"
//     ]
// } JSODOC

export function warn(...args) {
    if (window.aftcLogEnabled === undefined){
        window.aftcLogEnabled = true;
    }

    if (window.aftcLogEnabled){
        console.warn(...args);
    }
}
