// JSODOC = {
//     "method": "debugTo",
//     "params": [
//         {
//             "name": "index",
//             "type": "Number",
//             "required": true,
//             "default": null,
//             "info": "The debug container index to write to (setup via <b>attachDebug</b>)."
//         },
//         {
//             "name": "str",
//             "type": "String",
//             "required": true,
//             "default": "null",
//             "info": "The string you want to write to the debug container."
//         }
//     ],
//     "returns": "",
//     "info": "Sets a visual debug element so you can visually track variables without the use of the console, excellent for working with the graphical side of things, animations, webgl etc.",
//     "example": [
//         "attachDebug(3)",
//         "debugTo(0,'hello world 1')",
//         "debugTo(1,'hello world 2')",
//         "debugTo(2,'hello world 3')"
//     ]
// } JSODOC

export function debugTo(index, str) {
    if (window.aftcDebug) {
        if (window.aftcDebug[index]) {
            window.aftcDebug[index].innerHTML = str;
        }
    }
}