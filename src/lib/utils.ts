export const setLocalStrage = (key: string, value: object) => {
  window && localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStrage = (key: string) => {
  const getData = window && localStorage.getItem(key);
  return getData ? JSON.parse(getData) : [];
};
