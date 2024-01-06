export const setLocalStrage = (key: string, value: object) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStrage = (key: string) => {
  if (typeof window !== "undefined") {
    const getData = window?.localStorage.getItem(key);
    return getData ? JSON.parse(getData) : [];
  }
  throw new Error("windw がないお");
};
