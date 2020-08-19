export function isFireFox () {
    // let is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    // return is_firefox;
    return (typeof InstallTrigger !== 'undefined');
}