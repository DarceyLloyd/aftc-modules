// JSODOC = {
//     "method": "fetchJson",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load"
//         }
//     ],
//     "returns": {
//         "type": "Object"
//     },
//     "info": "Loads a json file and returns it as an object",
//     "example": [
//         "let data = await fetchJson('./data/config.json')"
//     ]
// } JSODOC

export async function fetchJson(url) {

    const response = await fetch(url);
    const json = await response.json();

    return json;
}