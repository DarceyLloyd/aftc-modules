// JSODOC = {
//     "class": "Logger",
//     "methods": [
//         {
//             "name": "enable",
//             "info": "Enable logging for the class/fn this is used in, overridden by enable & disable All/Globally"
//         },
//         {
//             "name": "disable",
//             "info": "Disable logging for the class/fn this is used in, overridden by enable & disable All/Globally"
//         },
//         {
//             "name": "enableAll",
//             "info": "Enable logging for instances of Logger, overiding local class/function enable/disable methods"
//         },
//         {
//             "name": "disableAll",
//             "info": "Disable logging for instances of Logger, overiding local class/function enable/disable methods"
//         },
//         {
//             "name": "enableGlobally",
//             "info": "Alias for disableAll"
//         },
//         {
//             "name": "disableGlobally",
//             "info": "Alias for disableAll"
//         }
//     ],
//     "info": "A substitute for console.log, allowing you to keep your comments and enable them on a class by class or function by function basis, or globally on all class's or functions implemented in.",
//     "example": [
//         "this.logger = new Logger()",
//         "this.logger.log('hello world 1')",
//         "this.logger.warn('hello world 2')",
//         "this.logger.error('hello world 3')",
//         "this.logger.enable()",
//         "this.logger.disable()",
//         "this.logger.enableAll()",
//         "this.logger.disableAll()"
//     ]
// } JSODOC

export class Logger {

    // Var defs
    enabled = true;

    // NOTE: Global override can be achieved with
    // window.AFTCConsoleLogger.enable = true
    // - - - - - - - - - - - - -

    constructor() {
        if (!window.AFTCConsoleLogger) {
            window.AFTCConsoleLogger = {
                enabledAll: false
            }
        }
    }
    // - - - - - - - - - - - - -

    enable() {
        this.enabled = true;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    disable() {
        this.enabled = false;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    enableAll() {
        if (window.AFTCConsoleLogger) {
            window.AFTCConsoleLogger.enabledAll = true;
        } else {
            window.AFTCConsoleLogger = {
                enabledAll: true
            }
        }
    }
    enableGlobally() {
        this.enableAll();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    disableAll() {
        if (window.AFTCConsoleLogger) {
            window.AFTCConsoleLogger.enabledAll = false;
        } else {
            window.AFTCConsoleLogger = {
                enabledAll: false
            }
        }
    }
    disableGlobally() {
        this.disableAll();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -


    log(arg) {
        if (this.enabled === true || window.AFTCConsoleLogger.enabledAll === true) {
            console.log(arg);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -


    warn(arg) {
        if (this.enabled === true || window.AFTCConsoleLogger.enabledAll === true) {
            console.warn(arg);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -


    error(arg) {
        if (this.enabled === true || window.AFTCConsoleLogger.enabledAll === true) {
            console.error(arg);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -
}