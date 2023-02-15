// JSODOC = {
//     "method": "loadCss",
//     "params": [
//         {
//             "name": "href",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the css file to load"
//         }
//     ],
//     "info": "Loads a css file and auto attaches it to the head section of the document.",
//     "example": [
//         "loadCss('./include/css/style-sheet-5.css',onStyleSheet5Loaded)"
//     ]
// } JSODOC

export async function promiseLoadCss(href: string): Promise<boolean> {
    try {
        const response = await fetch(href, { method: 'GET' });
        if (!response.ok) {
            throw new Error(`Failed to load CSS: ${response.status} ${response.statusText}`);
        }

        const link = document.createElement('link');
        link.href = href;
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.media = 'screen,print';
        document.getElementsByTagName('head')[0].appendChild(link);

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
