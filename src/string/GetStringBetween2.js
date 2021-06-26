// JSODOC = {
//     "method": "getStringBetween2",
//     "params": [
//         {
//             "name": "source",
//             "type": "String",
//             "required": true,
//             "info": "The length to parse."
//         },
//         {
//             "name": "start",
//             "type": "String",
//             "required": true,
//             "info": "The starting string marker in the source string."
//         },
//         {
//             "name": "end",
//             "type": "String",
//             "required": true,
//             "info": "The ending string marker in the source string."
//         }
//     ],
//     "returns": {
//         "type": "Array",
//         "info": "Max 500 results"
//     },
//     "info": "Returns an array of all the strings found between a start and end markers. Max of 500 items in array returned.",
//     "example": [
//         "let found = getStringsBetween2(sourceString,'start-marker','end-marker')"
//     ]
// } JSODOC
export function getStringBetween2(str, start, end) {
    let orig = str;
    let results = [];
    // log(orig);
    // log("--------");

    function getBetween() {
        // log("CHECKING: " + str);
        let startMatchIndex = str.indexOf(start); // Find start match
        // log("startMatchIndex: " + startMatchIndex);
        if (startMatchIndex === -1) { return false; }

        let startCutIndex = start.length + startMatchIndex; // calc start cut index
        // log("startCutIndex: " + startCutIndex);

        str = str.substring(startCutIndex, str.length); // LTrim to start cut index
        // log("CUT: " + str);

        let endMatchIndex = str.indexOf(end); // find end match index
        // log("endMatchIndex: " + endMatchIndex);
        if (endMatchIndex === -1) { return false; }

        let between = str.substring(0, endMatchIndex); // get string between
        // log("between: " + between);
        let endCutIndex = end.length + endMatchIndex;
        //log("endCutIndex: " + endCutIndex);
        str = str.substring(endCutIndex, str.length); // cut off end string
        //log("FINAL: " + str);
        return between;
    }
    let lim = 500; // Want to loop forever? 500 seems like a reasonable limit
    let pos = 0;
    let result = true;
    while (pos <= lim && result != false) {
        pos++;
        result = getBetween();
        if (result) {
            //log("between["+i+"] = " + result);
            results.push(result);
            //log("");
        }
    }
    return results;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * @function: getStringsBetween(str,start,end)
 * @desc: Gets all strings between two other strings (multi match)
 * @param string str: input string to check
 * @param string start: start string marker
 * @param string end: end string marker
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */