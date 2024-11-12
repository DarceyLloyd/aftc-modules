export const doesUrlKeyExist = (key) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.has(key);
};
