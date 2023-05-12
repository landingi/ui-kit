/* eslint-disable no-empty */
export const setLocalStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value)
  } catch {}
}

export const getLocalStorage = (data: string) => {
  try {
    return localStorage.getItem(data)
  } catch {
    return undefined
  }
}

export const removeLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key)
  } catch {}
}
