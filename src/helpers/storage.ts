export const setLocalStorage = (key: string, value: string) =>
  localStorage.setItem(key, value)

export const getLocalStorage = (data: string) => localStorage.getItem(data)

export const removeLocalStorage = (key: string) => localStorage.removeItem(key)
