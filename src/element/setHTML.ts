enum SetHTMLMode {
    SET = "set",
    APPEND = "append",
    PREPEND = "prepend"
  }
  
  function setHTML(elementOrId: HTMLElement | string, str: string, mode: SetHTMLMode = SetHTMLMode.SET) {
    let ele: HTMLElement | null;
  
    if (typeof elementOrId === "string") {
      ele = document.getElementById(elementOrId);
      if (!ele) {
        ele = document.querySelector<HTMLElement>(elementOrId);
      }
    } else {
      ele = elementOrId;
    }
  
    if (ele) {
      switch (mode) {
        case SetHTMLMode.APPEND:
          if (ele.innerHTML === "") {
            ele.innerHTML += str;
          } else {
            ele.innerHTML += "<br>" + str;
          }
          break;
        case SetHTMLMode.PREPEND:
          ele.innerHTML = str + "<br>" + ele.innerHTML;
          break;
        default:
          ele.innerHTML = str;
          break;
      }
    } 
  }
  