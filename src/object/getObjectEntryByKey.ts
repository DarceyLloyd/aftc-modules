// JSODOC = {
//     "method": "getObjectPropByKey",
//     "params": [
//         {
//             "name": "obj",
//             "type": "Object",
//             "required": true,
//             "info": "The object you want to get the property in."
//         },
//         {
//             "name": "key",
//             "type": "String",
//             "required": true,
//             "info": "The name of the property in the object you want to fetch."
//         }
//     ],
//     "returns": {
//         "type": "any"
//     },
//     "info": "Returns the /property of the supplied object by name/key.",
//     "example": [
//         "let colourDefinitions = getObjectPropByKey(myObj,'colours')"
//     ]
// } JSODOC

export function getObjectPropByKey(obj: any, key: string):any {
    type ObjectKey = keyof typeof obj;
    return obj[key as ObjectKey];
}