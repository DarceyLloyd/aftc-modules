export function getElementPosition(el) {
    let position = {
        top: el.offsetTop,
        left: el.offsetLeft
    };

    if (el.offsetParent) {
        let parentPosition = {
            top: el.offsetParent.offsetTop,
            left: el.offsetParent.offsetLeft
        };

        position.top += parentPosition.top;
        position.left += parentPosition.left;
    }
    return position;
}

export function getElementPos(el) {
    let x = 0;
    let y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        x += el.offsetLeft - el.scrollLeft;
        y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { left: x, top: y };
}