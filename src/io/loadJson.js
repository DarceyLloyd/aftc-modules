// JSODOC = {
//     "method": "loadJson",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load."
//         },
//         {
//             "name": "onComplete",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On complete callback, sends json response back as a parameter."
//         },
//         {
//             "name": "onError",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On error callback function handler"
//         }
//     ],
//     "info": "Loads a JSON file and returns it via the onComplete callback function.",
//     "example": [
//         "loadJson('./data/config.json',onLoadedHandler)"
//     ]
// } JSODOC

export async function loadJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  