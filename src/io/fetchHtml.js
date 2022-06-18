// JSODOC = {
//     "method": "fetchHtml",
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
//         "type": "String"
//     },
//     "info": "Loads a html file and returns it as a string",
//     "example": [
//         "let data = await fetchHtml('./pages/modal-user-content.html')"
//     ]
// } JSODOC

export async function fetchHtml(url) {

    const response = await fetch(url);
    const text = await response.text();

    return text;
}