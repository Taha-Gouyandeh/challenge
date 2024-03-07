export const setLocalItems = (key: string, object: any) => {
  localStorage.setItem(`Challenge-${key}`, JSON.stringify(object));
};

export const getLocalItems = (key: string): any => {
  return JSON.parse(localStorage.getItem(`Challenge-${key}`) + "");
};
