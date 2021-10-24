/**
 * Get window location pathname
 * @return {string}
 */
export const getLocationPath = () => window.location.pathname

/**
 * Get window location href
 * @return {string}
 */
export const getLocationHref = () => window.location.href

/**
 * Get Back button visibility in Top Bar
 * @return {bool}
 */
export const getBackBtnVisibility = url => {
  const filter = list.includes(url)

  return filter
}

/**
 * HandleClickOnBack - go back
 * @return {function} history.back()
 */
export const handleClickOnBack = () => history.back()
