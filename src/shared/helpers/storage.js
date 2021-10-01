export const getLocalStorage = data => localStorage.getItem(data)

export const setLocalStorage = (key, value) => localStorage.setItem(key, value)

export const removeLocalStorage = data => localStorage.removeItem(data)

/**
 * Add all the state in local storage
 * @param getState
 * @returns {function(*): function(*=)}
 */
export const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action)

    localStorage.setItem('lp-applicationState', JSON.stringify(getState()))

    return result
  }
}

/**
 * Rehydrate store
 * @returns {function(*): function(*=)}
 */
export const reHydrateStore = () => {
  if (
    localStorage.getItem('lp-applicationState') !== null &&
    JSON.parse(localStorage.getItem('lp-applicationState')).account.data !==
      null &&
    JSON.parse(localStorage.getItem('lp-applicationState')).account.data !==
      undefined
  ) {
    return JSON.parse(localStorage.getItem('lp-applicationState'))
  }
}

/**
 * Returns string informing what skin is user already using
 * @returns {string}
 */
export const getSkin = () =>
  getLocalStorage('sidebarSkin') === null
    ? 'default'
    : getLocalStorage('sidebarSkin')
