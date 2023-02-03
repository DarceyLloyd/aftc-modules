// JSODOC = {
//     "method": "isTouchDevice",
//     "params": [
//     ],
//     "returns": {
//         "type": "Boolean"
//     },
//     "info": "Returns boolean of whether the deivce is touch enabled.",
//     "example": [
//         "const isTouchDevice = isTouchDevice()"
//     ]
// } JSODOC

export const isTouchDevice = () => {
    return navigator
      ? "ontouchstart" in window ||
      // @ts-ignore-disable-next-line
      (window.DocumentTouch && document instanceof window.DocumentTouch) ||
      navigator.maxTouchPoints ||
      false
      : false;
  };
  