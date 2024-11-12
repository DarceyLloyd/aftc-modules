// JSODOC = {
//     "method": "onReady",
//     "params": [
//         {
//             "name": "fn",
//             "type": "Function",
//             "required": true,
//             "default": null
//         }
//     ],
//     "info": "Checks if the DOM is ready and then executes a function.",
//     "example": [
//         "onReady(function()){",
//         "\t/* DOM is ready, do your thing */",
//         "});",
//         "",
//         "/* or */",
//         "onReady(() =>{",
//         "\t/* DOM is ready, do your thing */",
//         "});"
//     ]
// } JSODOC

export function onReady(fn) {
    function executeFnWithDelay() {
      setTimeout(fn, 10);
    }
  
    if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
      executeFnWithDelay();
    } else {
      document.addEventListener("DOMContentLoaded", executeFnWithDelay);
    }
  }
  
