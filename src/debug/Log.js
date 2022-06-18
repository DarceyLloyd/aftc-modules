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

export function log(...args) {
    if (window.aftcLogEnabled === undefined){
        window.aftcLogEnabled = true;
    }

    if (window.aftcLogEnabled){
        console.log(...args);
    }
}


// JSODOC = {
//     "method": "logDisable",
//     "info": "Disable log() globally. Good for keeping all your log commands without having to comment them out in your projects. You should really you should comment them all out for removal in the packaging process.",
//     "example": [
//         "log('You will see this in console')",
//         "logDisable()",
//         "log('You wont see this in console')"
//     ]
// } JSODOC

export function logDisable() {
    window.aftcLogEnabled = false;
}



// JSODOC = {
//     "method": "logEnable",
//     "info": "Enable log() globally. Good for keeping all your log commands without having to comment them out in your projects. You should really you should comment them all out for removal in the packaging process.",
//     "example": [
//         "log('You will see this in console')",
//         "logDisable()",
//         "log('You wont see this in console')",
//         "logEnable()",
//         "log('You will see this in console')"
//     ]
// } JSODOC

export function logEnable() {
    window.aftcLogEnabled = true;
}
