// JSODOC = {
//     "method": "setOptionSelectedIndex",
//     "params": [
//         {
//             "name": "selectElement",
//             "type": "HTML Select Element",
//             "required": true
//         },
//         {
//             "name": "selectedValue",
//             "type": "String",
//             "required": true
//         }
//     ],
//     "info": "Sets an option of HTML select element by value.",
//     "example": [
//         "let limitedSentence = wordCountFilter(source,20)"
//     ]
// } JSODOC

export function setOptionSelectedIndex(selectElement, selectedValue) {
    for (let i = 0; i < selectElement.options.length; i++) {
        let option = selectElement.options[i];
        // console.log(option);
        if (option.value.toLocaleLowerCase() == selectedValue.toLocaleLowerCase()) {
            option.selected = true;
        }
    }
}
