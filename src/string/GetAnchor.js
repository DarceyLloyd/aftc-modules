/**
 * @function: GetAnchor(url)
 * @desc: Get anchor from url
 * @param string url: The url to get the anchor from
 * @link:
 */
export function GetAnchor(url) {
    if (!url) { url = window.location.href; }
    let anchorAvailable = isInString("#", url);
    if (anchorAvailable) {
        return url.slice(url.lastIndexOf('#') + 1);
    } else {
        return false;
    }
}