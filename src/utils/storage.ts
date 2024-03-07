export const setLocalItems = (key: string, object: any) => {
  localStorage.setItem(`challenge-${key}`, JSON.stringify(object));
};

export const getLocalItems = (key: string): any => {
  // for prevent server side error
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(`challenge-${key}`) + "");
  } else {
    return null;
  }
};
