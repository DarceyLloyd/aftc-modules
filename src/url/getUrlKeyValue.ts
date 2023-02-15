export const getUrlKeyValue = (key: string): string | null => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const hasKey = urlParams.has(key);

  if (hasKey) {
    return urlParams.get(key);
  } else {
    // console.warn(`doesUrlKeyExist(): Key: ${key} is not found...`);
    return null;
  }
}