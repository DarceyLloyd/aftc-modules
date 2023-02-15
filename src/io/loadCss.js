// JSODOC = {
//     "method": "loadCss",
//     "params": [
//         {
//             "name": "href",
//             "type": "String",
//             "required": true,
//             "default": null,
//             "info": "Path/URL to the css file to load"
//         },
//         {
//             "name": "onComplete",
//             "type": "Function",
//             "required": false,
//             "default": null,
//             "info": "On complete callback"
//         }
//     ],
//     "info": "Loads a css file and auto attaches it to the head section of the document.",
//     "example": [
//         "loadCss('./include/css/style-sheet-5.css',onStyleSheet5Loaded)"
//     ]
// } JSODOC

async function loadCss(href) {
  try {
    const response = await fetch(href);
    if (response.ok) {
      const css = await response.text();
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = href;
      document.getElementsByTagName('head')[0].appendChild(link);
      return true;
    } else {
      throw new Error(`Failed to load ${href}: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}


