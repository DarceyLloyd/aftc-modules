// JSODOC = {
//     "method": "objectToObject",
//     "params": [
//         {
//             "name": "src",
//             "type": "Object",
//             "required": true,
//             "default": null,
//             "info": "The source object. Eg: Use arguments[0] from constructor in a class."
//         },
//         {
//             "name": "dest",
//             "type": "Object",
//             "required": true,
//             "default": null,
//             "info": "The target object you wish to assign arguments to."
//         },
//         {
//             "name": "strict",
//             "type": "Boolean",
//             "required": false,
//             "default": true,
//             "info": "Whether you want to enable strict assignments only. Enabling strict will warn users of the function that the argument supplied is not supported."
//         }
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Parses an object to another object of your choice with strict or relaxed assigning features (good for defaults and instantiation processing).",
//     "example": [
//         "/* Class based example */",
//         "constructor(){",
//         "\tthis.appArgs = {a:0,b:0};",
//         "\tobjectToObject(arguments[0], this.appArgs, true)",
//         "}",
//         "",
//         "/* Instantiation of your class (not the only use) */",
//         "NOTE: c if strict enabled will give a warning, this is a good thing prevents users from incorrectly using your class's or functions */\n",
//         "new MyApp({a:1,b:3,c:4});"
//     ]
// } JSODOC

export function objectToObject(src, dest, strict = true) {
    for (let key in src) {
        if (strict) {
            if (dest.hasOwnProperty(key)) {
                dest[key] = src[key];
            } else {
                console.warn("ObjectToObject(): Destination object key doesn't exist [" + key + "].");
            }
        } else {
            dest[key] = src[key];
        }
    }
}