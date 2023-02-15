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
//         "type": "Promise<string>"
//     },
//     "info": "Loads a html file and returns it as a string",
//     "example": [
//         "let data = await fetchHtml('./pages/modal-user-content.html')"
//     ]
// } JSODOC

export async function loadHTML(url: string): Promise<string> {
    const response = await fetch(url);
    const html = await response.text();
    return html;
  }
  