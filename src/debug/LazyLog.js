// JSODOC = {
//     "function": "LazyLog",
//     "methods": [
//         {
//             "name": "log",
//             "info": "Short for console.log"
//         },
//         {
//             "name": "log",
//             "info": "Short for console.log"
//         },
//         {
//             "name": "log",
//             "info": "Short for console.log"
//         },
//         {
//             "name": "EnableLazyLogging",
//             "info": "Enables lazy logging functions (log,warn,error) globaly (uses window scope)"
//         },
//         {
//             "name": "DisableLazyLogging",
//             "info": "Disables lazy logging functions (log,warn,error) globaly (uses window scope)"
//         },
//         {
//             "name": "EnableLazyLog",
//             "info": "Enables lazy logging functions (log,warn,error) globaly (uses window scope)"
//         },
//         {
//             "name": "DisableLazyLog",
//             "info": "Disables lazy logging functions (log,warn,error) globaly (uses window scope)"
//         }
//     ],
//     "info": "Adds log, warn and error to the window scope (globally), so no more typing console. anymore.",
//     "params": [
//         {
//             "name": "NA",
//             "type": "any",
//             "required": false,
//             "default": null,
//             "info": "Use as if your were using console.log, console.warn and console.error directly"
//         }
//     ],
//     "example": [
//         "LazyLog(); // This will make log, warn and error available.",
//         "log('hello world 1')",
//         "log(`a = ${a}`)",
//         "log('a = ' + a)",
//         "log('log eg',[1,2,3])",
//         "warn('hello world 1')",
//         "warn(`a = ${a}`)",
//         "warn('a = ' + a)",
//         "warn('warn eg',[1,2,3])",
//         "error('hello world 1')",
//         "error(`a = ${a}`)",
//         "error('a = ' + a)",
//         "error('error eg',[1,2,3])"
//     ]
// } JSODOC

function initLazyLog() {
    let requiresInit = false;
    if (window.aftcLazyLog == undefined || window.aftcLazyLog == null || window.aftcLazyLog == NaN) {
        requiresInit = true;
    } else if (window.aftcLazyLog.enabled == undefined || window.aftcLazyLog.enabled == null || window.aftcLazyLog.enabled == NaN) {
        requiresInit = true;
    }
    if (requiresInit===true){
        window.aftcLazyLog = {
            enabled: true
        }
    }
}

export function LazyLog() {

    initLazyLog();

    if (window.log) {
        console.warn("LazyLog(): window.log was already defined but has now been re-defined.")
    }
    window.log = (...args) => { if (window.aftcLazyLog.enabled) { console.log(...args); } }

    if (window.warn) {
        console.warn("LazyLog(): window.warn was already defined but has now been re-defined.")
    }
    window.warn = (...args) => { if (window.aftcLazyLog.enabled) { console.warn(...args); } }

    if (window.error) {
        console.warn("LazyLog(): window.error was already defined but has now been re-defined.")
    }
    window.error = (...args) => { if (window.aftcLazyLog.enabled) { console.error(...args); } }

    window.EnableLazyLogging = function () {
        initLazyLog();
        window.aftcLazyLog.enabled = true;
    };

    window.EnableLazyLog = function () {
        initLazyLog();
        window.aftcLazyLog.enabled = true;
    };

    window.DisableLazyLogging = function () {
        initLazyLog();
        window.aftcLazyLog.enabled = false;
    };

    window.DisableLazyLog = function () {
        initLazyLog();
        window.aftcLazyLog.enabled = false;
    };
}