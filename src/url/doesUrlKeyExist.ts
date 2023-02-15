export const doesUrlKeyExist = (key: string): boolean => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.has(key);

}