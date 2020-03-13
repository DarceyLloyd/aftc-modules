export class EventManager {
    // WARNING: export class will not work for transpile to IE11 (DELETE CLASS IF YOU STILL NEED aftc-modules or use SRC file includes)
    // NOTE: Alternatively use aftc.js for ES5 - npm i aftc.js
}

/** jso {
 * "Function": "EventManager.js",
 * "Description": "A centralised event stack where you can hook your functions / class's into for centralised quick and easy event application event handling.",
 * "Methods": [
 *      {
 *          "name": "list",
 *          "description": "Lists which events have been created and available for dispatch in the EventManager.",
  *          "returns": "console.log",
 *      },
 *      {
 *          "name": "add",
 *          "description": "Adds or creates a new event within the event manager and attached a callback function / listener object to be called on dispatch of this event.",
 *          "parameters": [
 *              {
 *                  "name": "eventName",
 *                  "required": "true",
 *                  "description": "The name of the event to add.",
 *              },
 *              {
 *                  "name": "callbackFunction",
  *                  "required": "true",
 *                  "description": "The listener object / function which gets called when the event is triggered.",
 *              },
 *          ],
 *      },
 *      {
 *          "name": "dispatch",
 *          "description": "Dispatches / Triggers an event by name from the EventManager.",
 *          "parameters": [
 *              {
 *                  "name": "eventName",
 *                  "required": "true",
 *                  "description": "The name of the event to dispatch.",
 *              }
 *          ],
 *      },
 *  ]
 * }
 */