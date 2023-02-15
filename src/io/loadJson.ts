// JSODOC = {
//     "method": "loadJson",
//     "params": [
//         {
//             "name": "url",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the file to load."
//         }
//     ],
//     "info": "Loads a JSON file and returns it via the onComplete callback function.",
//     "example": [
//         "loadJson('./data/config.json',onLoadedHandler)"
//     ]
// } JSODOC

export async function loadJson(url: string): Promise<any> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
