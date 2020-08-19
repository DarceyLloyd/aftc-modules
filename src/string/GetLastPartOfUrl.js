export function getLastPartOfUrl(url) {
    if (!url) {
        url = window.location.href;
    }
    let part = url.substring(url.lastIndexOf('/') + 1);
    return part;
}