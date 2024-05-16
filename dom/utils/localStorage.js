export const setItemInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItemFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};