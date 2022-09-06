export const saveToLocalStorage = (key: string, value: any) => {
  const serializedValue = JSON.stringify(value);

  localStorage.setItem(key, serializedValue);
};

export const loadFromLocalStorage = (key: string) => {
  const savedValue = localStorage.getItem(key);
  if (!savedValue) return;

  return JSON.parse(savedValue);
};
