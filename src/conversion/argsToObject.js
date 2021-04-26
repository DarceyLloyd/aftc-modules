// JSODOC = {
//     "method": "argsToObject",
//     "params": [
//         {
//             "name": "fArgs",
//             "type": "Object",
//             "required": true,
//             "default": null,
//             "info": "The arguments object from the function or class. Eg: Use arguments[0] from constructor in a class."
//         },
//         {
//             "name": "appArgs",
//             "type": "Object",
//             "required": true,
//             "default": null,
//             "info": "The arguments object you wish to assign arguments to."
//         },
//         {
//             "name": "strict",
//             "type": "Boolean",
//             "required": false,
//             "default": true,
//             "info": "Whether you want to enable strict assignments only. Enabling strict will warn users of the function that the argument supplied is not supported."
//         }
//     ],
//     "returns": "Boolean",
//     "info": "Parses arguments to an object of your choice with strict or relaxed assigning features (good for defaults and instantiation processing).",
//     "example": [
//         "/* Class based example */",
//         "constructor(){",
//         "\tthis.appArgs = {a:0,b:0};",
//         "\targsToObject(arguments[0], this.appArgs, true)",
//         "}",
//         "",
//         "/* Instantiation of your class (not the only use) */",
//         "NOTE: c if strict enabled will give a warning, this is a good thing prevents users from incorrectly using your class's or functions */\n",
//         "new MyApp({a:1,b:3,c:4});"
//     ]
// } JSODOC

export function argsToObject(fArgs, appArgs, strict = false) {
    if (fArgs[0] && typeof (fArgs[0]) === "object") {
        let args = fArgs[0];

        if (strict === undefined) {
            strict = true;
        }
        if (args && typeof (args) === "object") {
            for (let key in args) {
                if (strict) {
                    if (obj.hasOwnProperty(key)) {
                        obj[key] = args[key];
                    } else {
                        console.warn("argsToObject(): Argument [" + key + "] is not supported.");
                    }
                } else {
                    obj[key] = args[key];
                }
            }
        }

    }
};