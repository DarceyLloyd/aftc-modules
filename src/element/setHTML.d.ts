declare enum SetHTMLMode {
    SET = "set",
    APPEND = "append",
    PREPEND = "prepend"
}
declare function setHTML(elementOrId: HTMLElement | string, str: string, mode?: SetHTMLMode): void;
